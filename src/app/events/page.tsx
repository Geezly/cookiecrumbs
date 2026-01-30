import EventCard from "@/Components/EventCard";

const events = [
  { title: "Valentine’s Cookies", slug: "valentine", image: "/events/valentine.jpg" },
  { title: "New Year Cookies", slug: "new-year", image: "/events/newyear.jpg" },
  { title: "Christmas Cookies", slug: "christmas", image: "/events/christmas.jpg" },
  { title: "Halloween Cookies", slug: "halloween", image: "/events/halloween.jpg" },
  { title: "Imlek Cookies", slug: "imlek", image: "/events/imlek.jpg" },
  { title: "Idul Fitri Cookies", slug: "idul-fitri", image: "/events/idulfitri.jpg" },
];

export default function EventsPage() {
  return (
    <div className="px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">
        Seasonal Events 🍪
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map((event) => (
          <EventCard key={event.slug} {...event} />
        ))}
      </div>
    </div>
  );
}
