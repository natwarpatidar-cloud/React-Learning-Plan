import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart, removeItem } from './cartReducer';
import { Button } from '@/components/ui/button';

const products = [
  { id: 1, name: "Apple", price: 199 },
  { id: 2, name: "Banana", price: 39 },
  { id: 3, name: "Orange", price: 59 }
];

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  return (
    <div className='p-12 space-y-4'>
        <h2 className='text-2xl font-semibold'>Products</h2>
        <ul className='flex flex-wrap gap-4'>
            {products.map(product => (
            <li key={product.id} className='flex flex-col border p-4 gap-3 rounded-2xl shadow-2xl'>
                <p>{product.name}</p>
                <p>{product.price.toFixed(2)}</p>
                <Button size='sm' onClick={() => dispatch(addItem(product))}>Add to cart</Button>
            </li>
            ))}
        </ul>

        <div className='border mt-12 rounded-2xl p-4 max-w-xs'>
            <h2 className='text-2xl font-semibold'>Shopping Cart</h2>
            {items.length === 0 && <p>Cart is empty</p>}
            <ul>
                {items.map(item => (
                <li key={item.id}>
                    {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}{' '}
                    <Button size='sm' variant="destructive" onClick={() => dispatch(removeItem(item))}>Remove</Button>
                </li>
                ))}
            </ul>

            {items.length > 0 && (
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            )}
            </div>
        </div>
  );
}

export default Cart;