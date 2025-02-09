import { products } from '@/data/products';
import { type CartItemType } from '@/types/cart';
import { useState } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(products);

  const updateQuantity = (id: string, count: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: count } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <section className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🛒 Shopping Cart
      </h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </ul>
      <CartTotal total={totalPrice} />
    </section>
  );
}

export default Cart;
