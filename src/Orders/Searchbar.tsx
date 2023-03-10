import { memo } from 'react';

const Searchbar = ({ searchText, setSearchText }: SearchbarProps) => (
  <div className='relative'>
    <svg
      className='w-4 h-4 absolute mt-1 top-4 left-1 text-gray-600'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='text-gray-600'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>

    <input
      className='text-sm text-gray-600 w-full p-4 pl-6 outline-0 rounded-tl-md rounded-tr-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
      onChange={e => setSearchText(e.target.value)}
      placeholder='Search by Order Id, Customer, Buyer...'
      value={searchText}
    />
  </div>
);

export default memo(Searchbar);

interface SearchbarProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
}
