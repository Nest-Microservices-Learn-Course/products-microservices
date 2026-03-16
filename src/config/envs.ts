import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const validationResult = envsSchema.validate(process.env);

if (validationResult.error) {
  throw new Error(`Config validation error: ${validationResult.error.message}`);
}

const envVars: EnvVars = validationResult.value as EnvVars;

export const envs = {
  port: envVars.PORT,
};
