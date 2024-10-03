'use server'
import {PrismaClient} from '@prisma/client'
import {Training} from "@/@types/Training";

const prisma = new PrismaClient()

export const getTrainings = async () : Promise<Training[]> => {
    return prisma.training.findMany();

}