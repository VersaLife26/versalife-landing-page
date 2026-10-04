const REVIEWS = [
  {
    name: "Amaya Perera",
    place: "Colombo",
    body: "My wellness order arrived sealed the next morning. Clear labels, and the tea was exactly what I had chosen.",
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Nuwan Silva",
    place: "Kandy",
    body: "I booked a video visit after work and spoke with a doctor before dinner. The notes were waiting in the app.",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Ishara Fernando",
    place: "Galle",
    body: "The herbal oil and balm came with a calm, simple checkout. Islandwide delivery was quicker than I expected.",
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Dr. Ravindu Jayasuriya",
    place: "VersaLife doctor",
    body: "Patients join from home, and the visit stays focused. Prescriptions and summaries are ready when the call ends.",
    profile:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Sanduni Wickrama",
    place: "Negombo",
    body: "I reordered the same supplements without starting over. It feels like one brand looking after the whole order.",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Kasun Mendis",
    place: "Jaffna",
    body: "The video room was quiet and easy to join from my phone. I did not have to travel for a short consultation.",
    profile:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
  },
];

const firstRow = REVIEWS.slice(0, 3);
const secondRow = REVIEWS.slice(3);

function ReviewCard({
  profile,
  name,
  place,
  body,
}: {
  profile: string;
  name: string;
  place: string;
  body: string;
}) {
  return (
    <figure className="care-review">
      <figcaption>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile} alt="" width={36} height={36} />
        <span>
          <strong>{name}</strong>
          <em>{place}</em>
        </span>
      </figcaption>
      <blockquote>{body}</blockquote>
    </figure>
  );
}

function Row({ items, reverse }: { items: typeof REVIEWS; reverse?: boolean }) {
  const filled = Array.from({ length: 4 }, () => items).flat();
  const loop = [...filled, ...filled];
  return (
    <div className={`care-marquee${reverse ? " is-reverse" : ""}`}>
      <div className="care-marquee-track">
        {loop.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} {...review} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  return (
    <div className="care-bridge-inner">
      <p className="care-bridge-kicker">From patients and doctors</p>
      <h3 className="care-bridge-title">
        Care, <span>in their words.</span>
      </h3>
      <Row items={firstRow} />
      <Row items={secondRow} reverse />
    </div>
  );
}
