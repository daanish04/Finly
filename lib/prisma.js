import { PrismaClient } from "./generated/prisma";

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db; // Prevents creating new Prisma Client instances in development
}

console.log(process.env.NODE_ENV);

export default db;
