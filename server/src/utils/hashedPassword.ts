import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
