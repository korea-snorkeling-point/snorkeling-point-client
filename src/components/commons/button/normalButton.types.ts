export interface INormalButtonStylesProps {
  color: string;
  disabled?: boolean;
}

export interface INormalButtonProps extends INormalButtonStylesProps {
  value: string;
  onClick: () => void;
}
