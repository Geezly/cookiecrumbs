"use client";

import Image from "next/image";

export default function ProductCard({ name, image }: any) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-pink-500 transition-all">
      <div className="animate-fadeIn">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-white font-semibold group-hover:text-pink-400">
          {name}
        </h3>
      </div>
    </div>
  );
}
