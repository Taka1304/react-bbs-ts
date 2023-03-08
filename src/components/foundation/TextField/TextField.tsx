import type { ComponentProps, FC } from 'react'

type Props = Omit<ComponentProps<'input'>, 'className'> & {
  label?: string;
};

export const TextField: FC<Props> = ({ label, ...rest}) => {
  return (
    <label className='flex flex-col gap-1 text-white font-bold w-full'>
      {label}
      <input className='bg-[#0d1117] text-[#c9d1c9] border-2 border-[#f0f6fc20] rounded-[4px] placeholder&text-gray p-1 font-normal ' {...rest} />
    </label>
  )
}
