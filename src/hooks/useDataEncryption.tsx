import Bcrypt from 'bcryptjs';

const useDataEncryption = () => {
  const encryptData = (data: string | object) => {
    const saltRounds = 10;
    const salt = Bcrypt.genSaltSync(saltRounds);

    return typeof data === 'string'
      ? Bcrypt.hashSync(data, 10)
      : Bcrypt.hashSync(JSON.stringify(data), salt);
  };

  const compareHashedPassword = (password: string, hashedPasswordStoredInDB: string) => {
    return Bcrypt.compare(password, hashedPasswordStoredInDB);
  };

  return { encryptData, compareHashedPassword };
};
export default useDataEncryption;
