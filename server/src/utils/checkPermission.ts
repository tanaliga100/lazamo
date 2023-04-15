import { UnAuthenticatedError } from "../errors";

export const checkPermissions = (requestUser: any, resourceUserId: any) => {
  console.log(requestUser);
  console.log(resourceUserId);
  console.log(typeof resourceUserId);

  if (requestUser.role === "admin" || requestUser.role === "manager") return;
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError("Not authorized to access this rosource");
};
