import { drizzle } from "drizzle-orm/neon-http";

import { relations } from "./relations";

export function getDb({ connectionString }: { connectionString: string }) {
  return drizzle(connectionString, { relations });
}

export type Database = ReturnType<typeof getDb>;
