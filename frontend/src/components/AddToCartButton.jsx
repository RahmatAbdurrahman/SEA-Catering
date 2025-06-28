import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function AddToCartButton({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(item)} className="px-4 py-2 mt-2 rounded bg-orange-500 text-white hover:bg-orange-600">
      Tambah ke Keranjang
    </button>
  );
}