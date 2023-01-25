import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orders as defaultOrders, orderType } from '../static/orders';
import { RootState } from '../store';

export interface OrdersState {
  data: Array<orderType>;
}

const initialState: OrdersState = {
  data: []
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<string>) => {
      if (action.payload?.length)
        state.data = defaultOrders.filter(
          order =>
            order.orderID?.includes(action.payload) ||
            order.customerName
              ?.toUpperCase()
              ?.includes(action.payload.toUpperCase())
        );
      else state.data = defaultOrders;
    }
  }
});

export const { getData } = ordersSlice.actions;

export const orders = (state: RootState) => state.orders.data;

export default ordersSlice.reducer;
