export interface Credentials {
  name?: string;
  email: string;
  password: string;
}

interface IUser {
  name?: string;
  email?: string;
  role?: string;
  userId?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  user: IUser;
  token: string | null;
  msg?: string;
}

export interface APIResponse {
  msg: string;
  token: string;
  data: {
    name: string;
    userId: string;
    role: string;
    email: string;
  };
}
