import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import { useForm } from 'react-hook-form';

export default function TestPage() {
  const { control } = useForm();
  return (
    <div>
      <NormalInput control={control} name="test" />
    </div>
  );
}
