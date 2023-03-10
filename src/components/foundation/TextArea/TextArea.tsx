import type { ComponentProps, FC } from 'react';

type Props = ComponentProps<'textarea'> & {
  label: string;
};

export const TextArea: FC<Props> = ({ label, ...rest }) => (
  <label className="text-white flex flex-col font-bold gap-1">
    <span>{label}</span>
    <textarea className="bg-[#0d1117] text-[#c9d1c9] border-2 border-[#f0f6fc20] rounded-[4px] placeholder&text-gray p-1 font-normal" {...rest} />
  </label>
);
