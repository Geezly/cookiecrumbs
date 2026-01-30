import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
}

export default function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <Image src={image} alt={name} width={300} height={200} className="object-cover"/>
      <div className="p-4">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-pink-600 font-bold">{price}</p>
      </div>
    </div>
  );
}
