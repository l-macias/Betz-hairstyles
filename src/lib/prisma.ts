import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

// Inicializamos el Pool de conexiones nativo de pg
const pool = new Pool({ connectionString });

// Envolvemos el pool con el adaptador oficial de Prisma
const adapter = new PrismaPg(pool);

// Instanciamos el cliente pasándole el adaptador
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
