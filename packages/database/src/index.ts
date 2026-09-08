import { env } from "#env";

import { getDb } from "./get-db";
import { schema } from "./schema";

export const db = getDb({ connectionString: env.DATABASE_URL });

export { schema };
export type { Database } from "./get-db";
