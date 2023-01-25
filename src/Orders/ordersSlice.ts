import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orders as defaultOrders, orderType } from '../static/orders';
import { RootState } from '../store';

export interface OrdersState {
  data: Array<orderType>;
}

const initialState: OrdersState = { data: [] };

export const ordersSlice = createSlice({
  initialState,
  name: 'orders',
  reducers: {
    getData: (state, action: PayloadAction<string>) => {
      let updatedData = defaultOrders;
      if (action.payload?.length)
        updatedData = defaultOrders.filter(
          order =>
            order.orderID?.includes(action.payload) ||
            order.customerName
              ?.toUpperCase()
              ?.includes(action.payload.toUpperCase())
        );

      state.data = updatedData;
    }
  }
});

export const { getData } = ordersSlice.actions;

export const orders = (state: RootState) => state.orders.data;

export default ordersSlice.reducer;
