import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
}

export default function EventCard({ title, image, slug }: Props) {
  return (
    <Link href={`/events/${slug}`} className="group">
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="group-hover:scale-110 transition duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 text-center">
        {title}
      </h3>
    </Link>
  );
}
