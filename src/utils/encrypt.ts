import CryptoJS from 'crypto-js';

// Encrypt
export const encrypt = (data: any, key: string) => {
  if (typeof data === 'object') {
    const stringData = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(stringData, key).toString();
    return encrypted;
  } else {
    return CryptoJS.AES.encrypt(data, key).toString();
  }
};

// Decrypt
export const decrypt = (data: any, key: string) => {
  var bytes = CryptoJS.AES.decrypt(data, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
