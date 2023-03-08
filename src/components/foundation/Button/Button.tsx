import React, { ComponentProps, FC } from 'react'

type Props = ComponentProps<'button'>;

export const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <div>
      <button 
        
        className='px-3 py-2 ml-0 leading-tight border rounded-lg bg-gray-800 border-gray-700 text-white hover:border-white font-medium'
        {...rest}
        >
        {children}
      </button>
    </div>
  )
}
