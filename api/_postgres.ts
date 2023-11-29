import env from './_env';

export const tablePrefix = env.ENVIRONMENT === 'prod' ? '' : 'dev_';
export const tableSubscriptions = `${tablePrefix}subscriptions`;
