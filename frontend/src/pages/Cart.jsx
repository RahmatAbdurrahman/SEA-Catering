import { useState } from 'react';
import Button from '../components/Button';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Nasi Goreng', price: 20000, quantity: 2 },
    { id: 2, name: 'Ayam Bakar', price: 25000, quantity: 1 }
  ]);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Keranjang</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded shadow">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>Rp {item.price} x {item.quantity}</p>
              </div>
              <p className="font-semibold">Rp {item.price * item.quantity}</p>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-lg font-bold">Total: Rp {getTotal()}</p>
            <Button variant="order">Lanjut ke Pembayaran</Button>
          </div>
        </div>
      )}
    </section>
  );
}