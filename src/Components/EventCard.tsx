"use client";

import Image from "next/image";
import Link from "next/link";

export default function EventCard({ title, slug, image }: any) {
  return (
    <Link href={`/events/${slug}`}>
      <div
        className="group cursor-pointer rounded-3xl overflow-hidden 
        bg-white/5 backdrop-blur-lg border border-white/10 
        transition-all duration-300 hover:-translate-y-2 group-hover:scale-105"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-white group-hover:text-pink-400 transition">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
