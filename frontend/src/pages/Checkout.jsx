export default function Checkout() {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Nama Lengkap</label>
          <input type="text" className="w-full p-3 rounded border border-gray-300 dark:bg-slate-700 dark:border-slate-600" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Alamat Pengiriman</label>
          <textarea className="w-full p-3 rounded border border-gray-300 dark:bg-slate-700 dark:border-slate-600" rows="3"></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Metode Pembayaran</label>
          <select className="w-full p-3 rounded border border-gray-300 dark:bg-slate-700 dark:border-slate-600">
            <option>Transfer Bank</option>
            <option>COD</option>
            <option>E-Wallet</option>
          </select>
        </div>
        <Button variant="order">Bayar Sekarang</Button>
      </form>
    </section>
  );
}