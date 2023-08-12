import dotenv from 'dotenv';

// Parsing the env file.
dotenv.config({ path: '../../.env' });

type Env = {
  PAYPAL_LIVE_CLIENT_ID: string;
  PAYPAL_SANDBOX_CLIENT_ID: string;
  ENVIRONMENT: 'dev' | 'prod';
};

type DirtyEnv = { [key in keyof Env]?: string };

const ENV: { [key in keyof Env]: number } = {
  PAYPAL_LIVE_CLIENT_ID: 1,
  PAYPAL_SANDBOX_CLIENT_ID: 1,
  ENVIRONMENT: 1,
};

const { env }: { env: DirtyEnv } = process;

const sanitisedEnvEntries = (Object.keys(ENV) as (keyof Env)[]).map<[keyof Env, string]>((key) => {
  const value = env[key];
  if (!value) {
    throw new Error(`Environment not configured correctly. ${key} was not defined.`);
  }

  if (key === 'ENVIRONMENT') {
    if (!['dev', 'prod'].includes(value)) {
      throw new Error(`
          Environment not configured correctly. ${key} must be
          either 'dev' or 'prod', but '${value}' was provided.
        `);
    }
  }
  return [key, value];
});

const sanitisedEnv = Object.fromEntries(sanitisedEnvEntries) as Env;

export default sanitisedEnv;
