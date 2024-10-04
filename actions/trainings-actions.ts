'use server'
import {PrismaClient} from '@prisma/client'
import {TrainingEntity} from "@/entities/training.entity";

const prisma = new PrismaClient()

export const getTrainings = async () : Promise<TrainingEntity[]> => {
    const trainings = await prisma.training.findMany();
    return trainings.map((training => new TrainingEntity(training)))

}