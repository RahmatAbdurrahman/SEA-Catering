export default function MenuCard({ menu }) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white dark:bg-slate-800">
      <img src={menu.imageUrl} alt={menu.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-lg font-bold mb-1">{menu.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Rp {menu.price}</p>
    </div>
  );
}
