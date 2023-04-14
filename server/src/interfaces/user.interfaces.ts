export {};
interface IRole {
  enum: string[];
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  role?: IRole;
}

export interface ITokenPayload {
  name: string;
  userId: any;
  role: string;
}