import { Fragment, memo, useCallback, useEffect, useState } from 'react';

import Calendar from '../Icons/Calendar';
import DownArrow from '../Icons/DownArrow';
import Ellipsis from '../Icons/Ellipsis';
import UpArrow from '../Icons/UpArrow';
import Searchbar from './Searchbar';
import { getData, orders } from './ordersSlice';
import { useAppSelector, useAppDispatch } from '../hooks';

const Orders = () => {
  const [searchText, setSearchText] = useState('');
  const data = useAppSelector(orders);
  const dispatch = useAppDispatch();

  const loadData = useCallback(() => {
    dispatch(getData(searchText));
  }, [dispatch, searchText])

  useEffect(() => {
    loadData()
  }, [loadData]);

  return (
    <div className='bg-slate-50 p-4'>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      <table className='text-sm text-gray-600 w-full'>
        <thead>
          <tr className='bg-gray-200 overflow-hidden rounded-b-md shadow'>
            <th className='font-medium p-4 text-left rounded-bl-md'>Order #</th>
            <th className='font-medium p-4 text-left'>Order status</th>
            <th className='font-medium p-4 text-left'>Customer</th>
            <th className='font-medium p-4 text-left'>
              Purchase date
              <DownArrow />
            </th>
            <th className='font-medium p-4 text-left '>
              Fulfilled date
              <UpArrow />
            </th>
            <th className='font-medium p-4 text-left'>Invoice status</th>
            <th className='font-medium p-4 text-left'>
              Amount
              <UpArrow />
            </th>
            <th className='rounded-br-md' />
          </tr>
        </thead>
        <tbody>
          <tr className='h-2' />

          {data.map((order) => (
            <Fragment key={order.orderID}>
              <tr className='bg-white overflow-hidden rounded-md shadow'>
                <td className='p-4 rounded-tl-md rounded-bl-md'>
                  {order.orderID}
                </td>
                <td className='p-4'>
                  <span className='inline-block mr-2 h-2 w-2 bg-red-500 rounded-2xl' />
                  {order.orderStatus}</td>
                <td className='p-4'>
                  <div className='font-medium'>{order.companyName}</div>
                  {order.customerName}
                </td>
                <td className='p-4'>
                  <Calendar color='#b100b1' />
                  {order.purDate}
                </td>
                <td className='p-4'>
                  <Calendar color='#00bd0d' />
                  {order.fulfillDate}</td>
                <td className='p-4'>{order.invoiceStatus}</td>
                <td className='p-4 font-medium'>{order.currency} {order.amount}</td>
                <td className='rounded-tr-md rounded-br-md'>
                  <Ellipsis />
                </td>
              </tr>
              <tr className='h-2' />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Orders);
