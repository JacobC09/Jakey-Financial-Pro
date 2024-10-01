import { PrismaClient } from "@prisma/client";

declare global {
  var prismaGlobal: undefined | PrismaClient;
}

const db = globalThis.prismaGlobal ?? new PrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") global.prisma = db;