import { compare, hash } from 'bcryptjs';

export async function hashPassword(pw: string) {
  const hashedPw = await hash(pw, 12);
  return hashedPw;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
