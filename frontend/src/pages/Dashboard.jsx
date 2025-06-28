import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('/api/menus')
      .then(res => setMenus(res.data))
      .catch(console.error);

    axios.get('/api/orders', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setOrders(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Daftar Menu</h3>
        <ul className="space-y-2">
          {menus.map(menu => (
            <li key={menu._id} className="p-4 bg-white dark:bg-slate-800 rounded shadow">
              {menu.name} - Rp {menu.price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Pesanan Masuk</h3>
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order._id} className="p-4 bg-white dark:bg-slate-800 rounded shadow">
              {order.userId?.name} - Total: Rp {order.total}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
