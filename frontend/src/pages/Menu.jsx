import MenuCard from '../components/MenuCard';
import AddToCartButton from '../components/AddToCartButton';



export default function MenuPage() {
  const menus = [
    { id: 1, name: 'Nasi Goreng', price: 20000, imageUrl: '#' },
    { id: 2, name: 'Ayam Bakar', price: 25000, imageUrl: '#' }
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map(menu => <MenuCard key={menu.id} menu={menu} />)}
      </div>
    </section>
  );
}



export default function MenuPage() {
  const menus = [
    { id: 1, name: 'Nasi Goreng', price: 20000, imageUrl: '#' },
    { id: 2, name: 'Ayam Bakar', price: 25000, imageUrl: '#' }
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map(menu => (
          <div key={menu.id} className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <img src={menu.imageUrl} alt={menu.name} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-bold text-lg">{menu.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">Rp {menu.price}</p>
            <AddToCartButton item={menu} />
          </div>
        ))}
      </div>
    </section>
  );
}