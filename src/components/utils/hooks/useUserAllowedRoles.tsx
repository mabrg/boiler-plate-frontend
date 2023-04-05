import { useUserInfo } from './useUserInfo';

export function useUserAllowedRoles(...roles: string[]): boolean {
  const userInfo = useUserInfo();
  const allowedRoles = userInfo.user?.allowedRoles ?? [];

  return roles.some((role) => allowedRoles.includes(role));
}
