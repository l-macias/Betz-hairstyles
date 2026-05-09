import { PrismaClient } from '../../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { cache } from 'react';

export const getDb = cache(() => {
  let connectionString: string;

  try {
    const { getCloudflareContext } = require('@opennextjs/cloudflare');
    const { env } = getCloudflareContext() as unknown as {
      env: Cloudflare.Env;
    };
    connectionString = env.HYPERDRIVE.connectionString;
  } catch {
    // Fallback para build time / prerendering
    connectionString = process.env.DATABASE_URL!;
  }

  const adapter = new PrismaPg({ connectionString, maxUses: 1 });
  return new PrismaClient({ adapter });
});
