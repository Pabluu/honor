import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  HOST: z.string(),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new Error('Variaveis de ambiente inválidos!!!\n' + _env.error.format())
}

export const env = _env.data
