import type { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const Icons = {
  FaCheckCircle,
};

// 追加可能
type Props = {
  type: 'FaCheckCircle'
  size: number | string;
  color: string;
};

const IconStyle = {
  aspectRatio: "1 / 1"
}

export const Icon: FC<Props> = ({ color, size, type }) => {
  const Icon = Icons[type]
  return (
    <Icon 
      style={IconStyle} 
      color={color}
      size={size}
    />
  );
};
