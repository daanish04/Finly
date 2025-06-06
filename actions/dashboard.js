"use server";

import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serialize = (obj) => {
  const serialized = { ...obj };

  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }

  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }

  return serialized;
};

export async function createAccount(data) {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("User not authenticated");

    const user = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) throw new Error("Invalid balance value");

    const existingAccount = await db.account.findMany({
      where: {
        userId: user.id,
      },
    });

    const isDefaultAccount =
      existingAccount.length === 0 ? true : data.isDefault;

    if (isDefaultAccount) {
      await db.account.updateMany({
        where: {
          userId: user.id,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        isDefault: isDefaultAccount,
        userId: user.id,
      },
    });

    const serializedAccount = serialize(account);

    revalidatePath("/dashboard");

    return {
      success: true,
      data: serializedAccount,
    };
  } catch (e) {
    console.log(e);
  }
}

export async function getUserAccounts() {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("User not authenticated");

    const user = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) throw new Error("User not found");

    const accounts = await db.account.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            transactions: true,
          },
        },
      },
    });

    const serializedAccounts = accounts.map(serialize);
    return serializedAccounts;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getDashboardData() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("User not authenticated");

    const user = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    if (!user) throw new Error("User not found");

    const transactions = await db.transaction.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: "desc",
      },
    });

    return transactions.map(serialize);
  } catch (error) {
    console.error("Error fetching dashboard data: ", error.message);
    return [];
  }
}
