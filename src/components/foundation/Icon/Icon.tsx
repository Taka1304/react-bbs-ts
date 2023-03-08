import type { FC } from 'react';

type Props = {
  icon: string
  width: number | string;
  height: number | string;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, icon, width }) => {
  return (
    <img 
      className={`text-${color} h-${height} w-${width} `} 
      alt={`${icon}`}
      />
  );
};
