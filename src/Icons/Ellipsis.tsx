import { memo } from 'react';

const Ellipsis = () => (
  <svg
    className='w-6 h-6 inline align-text-bottom text-gray-400 cursor-pointer'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default memo(Ellipsis);
