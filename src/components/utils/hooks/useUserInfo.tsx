import { useEffect, useState } from 'react';

import { IUser, IUserInfo } from './useUserInfo.d';

let token = '';
let user: IUser | undefined;
let loading = false;
export function useUserInfo(): IUserInfo {
  const [state, setState] = useState<IUserInfo>({
    token,
    user,
    loading,
  });

  useEffect(() => {
    user = {
      defaultRole: 'ORG_ADMIN',
      allowedRoles: ['ORG_ADMIN', 'ROLE1', 'ROLE2'],
      email: 'toto@example.com',
      name: 'Toto'
    };

    if(!user){
      setState({
        loading,
        token,
        user,
      });
    }
  })

  return state;
}
