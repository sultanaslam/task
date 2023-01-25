import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Orders from './Orders';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Orders />} path='/orders' />
      <Route element={<Home />} path='/' />
    </Routes>
  </BrowserRouter>
);

export default App;
