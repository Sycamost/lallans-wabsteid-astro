class UserAlreadyExistsError extends Error {
  constructor(userId) {
    super(`A user already exists with the user ID ${userId}.`);
    this.name = 'UserAlreadyExistsError';
  }
}

export default UserAlreadyExistsError;
