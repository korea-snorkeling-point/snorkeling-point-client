import constate from 'constate';
import { useState } from 'react';

const useUserContext = () => {
  const [token, setToken] = useState<string | null>(null);

  return {
    token,
    setToken,
  };
};

export const [UserProvider, useToken, useSetToken] = constate(
  useUserContext,
  value => value.token,
  value => value.setToken,
);
