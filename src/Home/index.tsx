import { memo } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p className='text-center mt-8'>
      To see the list of orders move to{' '}
      <Link className='text-blue-500 font-medium' to='/orders'>
        ORDERS
      </Link>
    </p>
  </>
);

export default memo(Home);
