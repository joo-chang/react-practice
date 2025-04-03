import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from '../store';

export default function Cart() {
  const user = useSelector((state: any) => state.user);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price * item.quantity}</TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(updateItem({ id: item.id }));
                }}
              >
                Update
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(
            addItem({
              id: cart.length + 1,
              name: 'apple',
              price: 1000,
              quantity: 1 + cart.length,
            }),
          );
        }}
      >
        Checkout
      </Button>
    </div>
  );
}
