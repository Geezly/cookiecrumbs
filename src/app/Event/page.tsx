"use client";

import { useRef } from "react";
import Link from "next/link";
import "./events.css";

const events = [
  { slug: "valentine", title: "Valentine Special", image: "/images/valentine.png" },
  { slug: "new-year", title: "New Year Bash", image: "/images/new-year.png" },
  { slug: "christmas", title: "Christmas Magic", image: "/images/christmas.png" },
  { slug: "halloween", title: "Halloween Treats", image: "/images/halloween.png" },
  { slug: "imlek", title: "Imlek Celebration", image: "/images/imlek.png" },
  { slug: "idul-fitri", title: "Idul Fitri Feast", image: "/images/idul-fitri.png" },
];

export default function EventDashboard() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <main className="dashboard">
      <section className="hero">
        <h1>Weekly & Seasonal Events 🍪</h1>
        <p>Limited edition cookies for every celebration</p>
      </section>

      <section className="slider-wrapper">
        <button className="nav left" onClick={() => scroll("left")}>‹</button>

        <div className="slider" ref={sliderRef}>
          {events.map((e) => (
            <Link
              key={e.slug}
              href={`/Event/${e.slug}`}
              className="event-slide"
              style={{ backgroundImage: `url(${e.image})` }}
            >
              <div className="overlay" />
              <h2>{e.title}</h2>
            </Link>
          ))}
        </div>

        <button className="nav right" onClick={() => scroll("right")}>›</button>
      </section>
    </main>
  );
}
