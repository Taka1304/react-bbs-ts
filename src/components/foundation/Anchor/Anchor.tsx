import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';


type Props = { 
  href: string
  dataTestId?: string 
  children: ReactNode
  className?: string
};

export const Anchor: FC<Props> = ({ children, dataTestId, href, className="" }) => (
  <Link 
    className={"underline hover:text-gray-300 " + className} 
    data-testid={dataTestId ? dataTestId : undefined} 
    to={href}
    >
    {children}
  </Link>
);