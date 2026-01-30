export default function OrderPage({ params }: { params: { slug: string } }) {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Order Cookie 🍪
      </h1>
      <p className="text-lg">
        You are ordering: <b>{params.slug}</b>
      </p>

      <button className="mt-8 px-8 py-3 bg-black text-white rounded-full">
        Checkout
      </button>
    </div>
  );
}
