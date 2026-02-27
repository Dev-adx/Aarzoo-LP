import { motion } from "framer-motion";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.png";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.png";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";

const COLORS = {
  navy: "#0B3E77",
  cream: "#EEEAD3",
  yellow: "#F3D35B",
  orange: "#EA924D",
  redOrange: "#F5543A",
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  },
});

/* Desktop bento grid cells */
const desktopCells = [
  {
    src: g1,
    alt: "Aarzoo Shah speaking on stage in red blazer",
    col: "col-start-1 col-end-2",
    row: "row-start-1 row-end-3",
    delay: 0,
    fit: "cover" as const,
    pos: "top center",
    bg: "transparent",
  },
  {
    src: g4,
    alt: "Aarzoo Shah presenting to a live audience",
    col: "col-start-2 col-end-4",
    row: "row-start-1 row-end-2",
    delay: 0.06,
    fit: "cover" as const,
    pos: "center top",
    bg: "transparent",
  },
  {
    src: g6,
    alt: "Aarzoo Shah speaking on stage in black outfit",
    col: "col-start-4 col-end-5",
    row: "row-start-1 row-end-3",
    delay: 0.1,
    fit: "cover" as const,
    pos: "top center",
    bg: "transparent",
  },
  {
    src: g2,
    alt: "Aarzoo Shah with book in pink chair",
    col: "col-start-2 col-end-3",
    row: "row-start-2 row-end-3",
    delay: 0.08,
    fit: "cover" as const,
    pos: "center",
    bg: "transparent",
  },
  {
    src: g5,
    alt: "Aarzoo Shah smiling at an event",
    col: "col-start-3 col-end-4",
    row: "row-start-2 row-end-3",
    delay: 0.12,
    fit: "cover" as const,
    pos: "top center",
    bg: "transparent",
  },
  {
    src: g3,
    alt: "Decode Your Wealth – by Aarzoo Shah",
    col: "col-start-1 col-end-3",
    row: "row-start-3 row-end-4",
    delay: 0.14,
    fit: "cover" as const,
    pos: "center",
    bg: "transparent",
  },
  {
    // g7 has important text at the bottom of the image — use contain so nothing is cut
    src: g7,
    alt: "Aarzoo Shah – Entrepreneur, Coach, TEDx Speaker & ChangeMaker",
    col: "col-start-3 col-end-5",
    row: "row-start-3 row-end-4",
    delay: 0.16,
    fit: "contain" as const,
    pos: "center",
    bg: "#F5F0E8",   // warm cream so the white-card image blends naturally
  },
];

export default function SpeakerGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-10">
      {/* Soft background blobs */}
      <div
        className="pointer-events-none absolute -left-28 -top-12 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${COLORS.yellow}30` }}
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `${COLORS.orange}22` }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10 text-center"
        >
          <p
            className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: COLORS.orange }}
          >
            The Proof Is in the Stage
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
            style={{ color: COLORS.navy }}
          >
            Aarzoo in{" "}
            <span style={{ color: COLORS.redOrange }}>Action</span>
          </h2>
          <div
            className="mx-auto mt-3 h-[3px] w-20 rounded-full"
            style={{ backgroundColor: COLORS.orange }}
          />
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: `${COLORS.navy}99` }}
          >
            From boardrooms to stages — transforming thousands across India
          </p>
        </motion.div>

        {/* ── DESKTOP Bento Grid (md+) ── */}
        <div
          className="hidden md:grid gap-3 lg:gap-4"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "240px 240px 300px",
          }}
        >
          {desktopCells.map(({ src, alt, col, row, delay, fit, pos, bg }) => (
            <motion.div
              key={alt}
              initial="hidden"
              whileInView="show"
              variants={fadeUp(delay)}
              viewport={{ once: true, amount: 0.15 }}
              className={`${col} ${row} group overflow-hidden rounded-2xl shadow-sm`}
              style={{ border: `1px solid ${COLORS.navy}10`, backgroundColor: bg }}
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ objectFit: fit, objectPosition: pos }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE 2-col grid ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {/* Wide landscape — full width */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0)}
            viewport={{ once: true }}
            className="col-span-2 h-44 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g4}
              alt="Aarzoo Shah presenting to audience"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Portrait pair */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.05)}
            viewport={{ once: true }}
            className="h-64 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g1}
              alt="Aarzoo Shah in red blazer on stage"
              className="h-full w-full object-cover"
              style={{ objectPosition: "top center" }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.07)}
            viewport={{ once: true }}
            className="h-64 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g6}
              alt="Aarzoo Shah speaking in black outfit"
              className="h-full w-full object-cover"
              style={{ objectPosition: "top center" }}
            />
          </motion.div>

          {/* Square pair */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.09)}
            viewport={{ once: true }}
            className="h-40 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g2}
              alt="Aarzoo Shah with book in pink chair"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.11)}
            viewport={{ once: true }}
            className="h-40 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g5}
              alt="Aarzoo Shah smiling at event"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Banner — full width */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.13)}
            viewport={{ once: true }}
            className="col-span-2 h-40 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={g3}
              alt="Decode Your Wealth by Aarzoo Shah"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          {/* Branded card — full width, contain so the text card at bottom stays visible */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.15)}
            viewport={{ once: true }}
            className="col-span-2 h-64 overflow-hidden rounded-2xl shadow-sm"
            style={{ backgroundColor: "#F5F0E8" }}
          >
            <img
              src={g7}
              alt="Aarzoo Shah – Entrepreneur, Coach, TEDx Speaker & ChangeMaker"
              className="h-full w-full"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </motion.div>
        </div>

        {/* Bottom tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10"
        >
          {[
            "2000+ Lives Impacted",
            "TEDx Speaker",
            "SEBI Registered Analyst",
            "Entrepreneur & Coach",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-4 py-1.5 text-xs font-bold shadow-sm"
              style={{
                backgroundColor: COLORS.cream,
                border: `1px solid ${COLORS.orange}55`,
                color: COLORS.navy,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
