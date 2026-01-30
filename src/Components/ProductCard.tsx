import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ name, image, slug }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <h4 className="mt-4 text-lg font-semibold">{name}</h4>

      <Link
        href={`/order/${slug}`}
        className="inline-block mt-4 px-5 py-2 bg-black text-white rounded-full"
      >
        Order
      </Link>
    </div>
  );
}
