import { message } from 'antd';
import { ReactNode, useEffect } from 'react';
import { useAlert } from 'src/commons/context/AlertContext';

type Props = {
  children: ReactNode;
};

export default function AlertMessage({ children }: Props) {
  const alertMessage = useAlert();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!alertMessage) return;

    messageApi[alertMessage.state](alertMessage.message);
  }, [alertMessage]);
  return (
    <>
      {contextHolder}
      {children}
    </>
  );
}
