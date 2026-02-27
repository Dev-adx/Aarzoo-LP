import { motion } from "framer-motion";
import g1 from "@/assets/gallery/g1.png";
import g2 from "@/assets/gallery/g2.png";
import g3 from "@/assets/gallery/g3.png";
import g4 from "@/assets/gallery/g4.png";
import g5 from "@/assets/gallery/g5.png";
import g6 from "@/assets/gallery/g6.png";
import g7 from "@/assets/gallery/g7.png";
import g8 from "@/assets/gallery/g8.png";

const celebrities = [
  { src: g1},
  { src: g2 },
  { src: g3},
  { src: g4 },
  { src: g5 },
  { src: g6 },
  { src: g7},
  { src: g8},
];

export default function SpeakerGallery() {
  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-10 px-4 text-center"
      >
        <p
          className="mb-2 text-sm font-bold uppercase tracking-[0.18em]"
          style={{ color: "#EA924D" }}
        >
          Her Conversations, Their Wisdom
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          style={{ color: "#0B3E77" }}
        >
          Decoding{" "}
          <span style={{ color: "#F5543A" }}>Success Mindset</span>
        </h2>
        <div
          className="mx-auto mt-3 h-[3px] w-20 rounded-full"
          style={{ backgroundColor: "#EA924D" }}
        />
        <p
          className="mx-auto mt-3 max-w-2xl text-sm sm:text-lg leading-relaxed"
          style={{ color: "#0B3E7799" }}
        >
          Aarzoo has travelled across the country, meeting hundred's of
          successful women from various fields, and in conversation with them
          she has decoded their success mindset
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="group relative">

        <div className="flex w-max animate-marquee items-start gap-5 will-change-transform group-hover:[animation-play-state:paused]">
          {[...celebrities, ...celebrities].map((celeb, i) => (
            <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img src={celeb.src} className="block max-h-[420px] w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
