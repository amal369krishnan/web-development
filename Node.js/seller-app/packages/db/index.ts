import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Exporting individual models
export const userModel = prisma.user;
export const postModel = prisma.post;