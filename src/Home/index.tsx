import { memo } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p>
      To see the list of orders move to{' '}
      <Link to='/orders'>
        <code>/orders</code>
      </Link>
    </p>
  </>
);

export default memo(Home);
