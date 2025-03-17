import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_c5RMjVSB6Lwi@ep-solitary-flower-a5db06h5-pooler.us-east-2.aws.neon.tech/savebuddy?sslmode=require"
);
export const db = drizzle(sql, { schema });
