import type Authenticator from '../types/Authenticator';
import type Subscription from '../types/Subscription';
import type User from '../types/User';

import env from '../_env';

const prefix = env.ENVIRONMENT === 'prod' ? '' : 'dev_';

type TableSchema<Model> = {
  name: string,
  fields: { [key in keyof Model]: string },
};

export const AUTHENTICATORS: TableSchema<Authenticator> = {
  name: `${prefix}authenticators`,
  fields: {
    id: 'id',
    backedUp: 'backed_up',
    counter: 'counter',
    deviceType: 'device_type',
    publicKey: 'public_key',
    transports: 'transports',
    type: 'type',
    userId: 'user_id',
  },
};

export const CURRENT_CHALLENGES: TableSchema<{ userId: User['id'], currentChallenge: string }> = {
  name: `${prefix}current_challenges`,
  fields: {
    userId: 'user_id',
    currentChallenge: 'current_challenge',
  },
};

export const SUBSCRIPTIONS: TableSchema<Subscription> = {
  name: `${prefix}subscriptions`,
  fields: {
    id: 'id',
    emailAddress: 'email_address',
  },
};

export const USERS: TableSchema<User> = {
  name: `${prefix}users`,
  fields: {
    id: 'id',
    displayName: 'display_name',
  },
};
