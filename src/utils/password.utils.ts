import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 6);
};

export const comparePassword = async (password: string, hashed: string) => {
  return await bcrypt.compare(password, hashed);
};
