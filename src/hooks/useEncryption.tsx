import bcrypt from 'bcryptjs';

const useEncryption = () => {
  const saltRounds = 10;
  const encryptPassword = async (password: string) => await bcrypt.hash(password, saltRounds);

  const compareHashedPassword = async (password: string, hashedPasswordStoredInDB: string) => await bcrypt.compare(password, hashedPasswordStoredInDB);

  return { encryptPassword, compareHashedPassword };
};
export default useEncryption;
