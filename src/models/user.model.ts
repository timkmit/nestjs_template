import { Prisma } from '@prisma/client';

export const user = Prisma.validator<Prisma.UserCreateInput>()({});