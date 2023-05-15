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

export type Roles<Partials = never> = Partial<["admin", "manager", "user"]>;

export interface BadRequestErrorObject {
  errors: {
    [key: string]: string[];
  };
}
export interface userData {
  name: string;
  email?: string;
  userId: string;
}
