import { useForm } from 'react-hook-form';
import SnorkelingPointWriteUI from './snorkelingPointWrite.presenter';

export default function SnorkelingPointWrite() {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return <SnorkelingPointWriteUI control={control} errors={formState.errors} />;
}
