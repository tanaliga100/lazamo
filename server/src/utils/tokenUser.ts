export const createTokenUser = async (user: any) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    email: user.email,
  };
};
