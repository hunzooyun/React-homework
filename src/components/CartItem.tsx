import { type CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, count: number) => void;
}

function CartItem({ item, onUpdateQuantity }: CartItemProps) {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };
  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      onUpdateQuantity(item.id, item.quantity + 1);
    }
  };

  return (
    <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-row ml-4">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{item.price.toLocaleString()}원</p>
      </div>
      <div className="flex items-center space-x-2 ml-auto">
        <button
          onClick={handleDecrease}
          disabled={item.quantity === 1}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          ➖
        </button>
        <span className="w-6 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          disabled={item.quantity === item.stock}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          ➕
        </button>
      </div>
    </li>
  );
}

export default CartItem;
