import User from './User';

type Authenticator = {
  id: string,
  backedUp: boolean,
  counter: number,
  deviceType: string,
  publicKey: string,
  type: 'public-key',
  transports: AuthenticatorTransport[],
  userId: User['id'],
};

export default Authenticator;
