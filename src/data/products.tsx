import { type CartItemType } from '@/types/cart';

export const products: CartItemType[] = [
  {
    id: 'p1',
    name: '1A 우유 900mL',
    price: 1880,
    quantity: 1,
    stock: 5,
    image: '/public/우유.svg',
  },
  {
    id: 'p2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    quantity: 1,
    stock: 3,
    image: '/public/콩나물.svg',
  },
  {
    id: 'p3',
    name: '고소한 두부 1kg',
    price: 2280,
    quantity: 1,
    stock: 3,
    image: '/public/두부.svg',
  },
];
