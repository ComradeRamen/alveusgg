import { PrismaClient } from "@prisma/client";

import { env } from "@/env";

declare global {
  var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare:
export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
