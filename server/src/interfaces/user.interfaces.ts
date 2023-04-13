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
