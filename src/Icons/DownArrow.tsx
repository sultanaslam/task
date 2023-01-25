import { memo } from 'react';

const DownArrow = () => (
  <svg
    className='ml-4 w-4 h-4 inline align-text-bottom cursor-pointer'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default memo(DownArrow);
