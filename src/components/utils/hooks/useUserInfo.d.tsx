export interface IUser {
  defaultRole: string;
  allowedRoles: string[];
  email: string;
  name: string;
}

export interface IUserInfo {
  loading: boolean;
  token?: string;
  user?: IUser;
}
