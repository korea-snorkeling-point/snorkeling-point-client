import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

export interface INormalSelectProps
  extends Omit<SelectProps, 'name' | 'options'> {
  control: any;
  name: string;
  options: DefaultOptionType[];
}
