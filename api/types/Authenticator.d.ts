import User from './User';

type Authenticator = {
  id: Uint8Array,
  backedUp: boolean,
  counter: number,
  deviceType: string,
  publicKey: Uint8Array,
  type: 'public-key',
  transports: AuthenticatorTransport[],
  userId: User['id'],
};

export default Authenticator;
