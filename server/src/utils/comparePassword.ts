import bcrypt from "bcryptjs";
export const comparePassword = async (
  candidatePassword: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(candidatePassword, hashedPassword);
  return isMatch;
};
