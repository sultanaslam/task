import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Orders from './Orders';

const App = () => (
  <BrowserRouter>
    <div className='bg-blue-500 text-white p-4'>
      <NavLink className={({ isActive }) =>
        isActive ? 'mr-4 font-medium' : 'mr-4'
      } to='/' >HOME</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? 'font-medium' : ''
      } to='/orders'>ORDERS</NavLink>
    </div>
    <Routes>
      <Route element={<Orders />} path='/orders' />
      <Route element={<Home />} path='/' />
    </Routes>
  </BrowserRouter>
);

export default App;
