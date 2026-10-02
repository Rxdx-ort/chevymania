import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  MONGODB_URI: z.string().min(1), JWT_SECRET: z.string().min(32),
  PORT: z.coerce.number().default(3000), CLIENT_ORIGIN: z.string().url().default('http://localhost:5173')
});
// Vitest carga módulos de autenticación sin una conexión real; no relaja la
// validación de configuración en procesos normales.
const environment = process.env.VITEST ? { ...process.env, MONGODB_URI: process.env.MONGODB_URI ?? 'mongodb://test.invalid/chevymania', JWT_SECRET: process.env.JWT_SECRET ?? 'test_secret_that_is_longer_than_thirty_two_characters' } : process.env;
export const config = schema.parse(environment);
