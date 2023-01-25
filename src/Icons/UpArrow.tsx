import { memo } from 'react';

const UpArrow = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
    className='ml-4 w-4 h-4 inline align-text-bottom'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
    />
  </svg>
);

export default memo(UpArrow);
