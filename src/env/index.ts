import { z } from 'zod'

const envSchema = z.object({
  HOST: z.string().default('http://localhost'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid environment variables')

  throw new Error('Invalid environment variables')
}

export const env = _env.data
