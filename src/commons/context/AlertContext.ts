import constate from 'constate';
import { useState } from 'react';

type Message = {
  state: 'error' | 'success' | 'warning';
  message: string;
};

const useAlertContext = () => {
  const [message, setMessage] = useState<Message | null>();

  const reset = () => {
    setMessage(null);
  };

  return {
    message,
    reset,
    setMessage,
  };
};

export const [AlertProvider, useAlert, useResetAlert, useSetAlert] = constate(
  useAlertContext,
  value => value.message,
  value => value.reset,
  value => value.setMessage,
);
