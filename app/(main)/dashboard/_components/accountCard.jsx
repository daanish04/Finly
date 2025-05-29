"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import useFetch from "@/hooks/useFetch";
import { updateDefaultAccount } from "@/actions/accounts";
import { useEffect } from "react";
import { toast } from "sonner";

const AccountCard = ({ account }) => {
  const { name, balance, type, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultfn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault();

    if (isDefault) {
      toast.warning("You need atleast one default account");
      return;
    }
    await updateDefaultfn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Account updated successfully");
    }
  }, [updatedAccount, updateDefaultLoading]);

  useEffect(() => {
    if (updatedAccount?.success === false) {
      toast.success("Account updation failed");
    }
  }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer border-double group-relative mb-6">
      <Link href={`/accounts/${id}`} className="w-full h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
          />
        </CardHeader>
        <CardContent className="pb-2">
          <div className="text-2xl font-bold">
            {parseFloat(balance).toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </div>
        </CardContent>
        <CardFooter className="mt-2 text-sm font-medium capitalize flex justify-around text-gray-900">
          <div className="flex items-center dark:text-gray-100">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center dark:text-gray-100">
            <ArrowDownRight className="mr-1 w-4 h-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
