import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Utility functions for handling arrays in SQLite
export function convertArrayToString(arr: string[]): string {
  return arr.join(',')
}

export function convertStringToArray(str: string): string[] {
  return str.split(',').filter(Boolean)
}