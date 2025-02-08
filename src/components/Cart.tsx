import { useState } from 'react';
import CartItem, { type CartItemType } from './CartItem';

const INITIAL_ITEMS: CartItemType[] = [
  { id: 1, name: '상품 A', price: 10000, quantity: 1 },
  { id: 2, name: '상품 B', price: 20000, quantity: 1 },
];

function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(INITIAL_ITEMS);
  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
