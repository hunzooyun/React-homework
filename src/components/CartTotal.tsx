interface CartTotalProps {
  total: number;
}

function CartTotal({ total }: CartTotalProps) {
  return (
    <div className="mt-6 p-4 text-end rounded-lg">
      <h3 className="text-xl font-semibold">
        총 결제 금액: {total.toLocaleString()}원
      </h3>
    </div>
  );
}

export default CartTotal;
