import Cryptr from 'cryptr';

const useEncryption = () => {
  const cryptr = new Cryptr("YJ8ivJzav5pIIYiNXkeNZG9s3iXa7fz+5dukPDhfF");

  const encryptData = (data: string | object) => {
    return typeof data === 'string' ? cryptr.encrypt(data) : cryptr.encrypt(JSON.stringify(data));
  };

  const decryptData = (data: string | object) => {
    return typeof data === 'string' ? cryptr.decrypt(data) : cryptr.decrypt(JSON.stringify(data));
  };

  const compareHashedPassword = (password: string, hashedPasswordStoredInDB: string) => {
    return decryptData(password) === hashedPasswordStoredInDB;
  };

  return { encryptData, decryptData, compareHashedPassword };
};
export default useEncryption;
