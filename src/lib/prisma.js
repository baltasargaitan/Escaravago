import { PrismaClient } from "@prisma/client";

// Función para crear una nueva instancia del Prisma Client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Aseguramos que `globalThis.prismaGlobal` no esté declarado en JavaScript
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Asignación condicional solo si no estamos en producción
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
