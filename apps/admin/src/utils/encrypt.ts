import bcrypt from 'bcryptjs'

const saltRounds = 10

export const encryptPassword = async (password: string) => await bcrypt.hash(password, saltRounds)

export const compareHashedPassword = async (password: string, hashedPasswordStoredInDB: string) =>
  await bcrypt.compare(password, hashedPasswordStoredInDB)
