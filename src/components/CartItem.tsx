export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  return (
    <div>
      <span>{item.name}</span> - <span>{item.price}원</span> (x{item.quantity})
    </div>
  );
}

export default CartItem;
