'use client';

import Navigation from '@/components/Navigation';
import PDFModal from '@/components/PDFModal';
import { useState } from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: 'KTRN',
    description: 'Rebel threads, timeless roots',
    pdfUrl: '/pdfs/KTRN.pdf',
    imageUrl: '/images/krtn.png',
    index: '01',
  },
  {
    id: 2,
    title: 'THE LINEBREAKERS',
    description: 'When every blazer becomes a canvas of disruption',
    pdfUrl: '/pdfs/THE LINEBREAKERS.pdf',
    imageUrl: '/images/line-breakers.png',
    index: '02',
  },
  {
    id: 3,
    title: 'SALT SUN & LINEN',
    description: 'A life without urgency, a wardrobe without restriction, a summer without an ending',
    pdfUrl: '/pdfs/LONDONS LAST SUMMER-PROJECT 3.pdf',
    imageUrl: '/images/londons-last-summer.png',
    index: '03',
  },
  {
    id: 4,
    title: 'RED ONE',
    description: 'Embracing the adrenaline of racing',
    pdfUrl: '/pdfs/project 4 red one .pdf',
    imageUrl: '/images/red-one.png',
    index: '04',
  },
  {
    id: 5,
    title: 'THE TAJ MAHAL',
    description: 'Eternalising elegance in stones and spirit',
    pdfUrl: '/pdfs/PROJECT 5 TAJ MAHAL.pdf',
    imageUrl: '/images/taj-mahal.png',
    index: '05',
  },
  {
    id: 6,
    title: 'CELESTIAL BLOOM',
    description: 'Blooms only in zero-gravity',
    pdfUrl: '/pdfs/PROJECT6 CELESTIAL BLOOM.pdf',
    imageUrl: '/images/celestial_boom.png',
    index: '06',
  },
];

export default function Gallery() {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleViewPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ url: pdfUrl, title });
  };

  return (
    <>
      <Navigation />
      <main className="bg-[#F8F6F2]">

        {/* ── PAGE HEADER ── */}
        <section
          className="relative flex items-end"
          style={{
            minHeight: '38vh',
            backgroundImage: 'url(/homeImages/Screenshot%202026-06-11%20at%203.01.28%20AM.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient scrim — same logic as homepage hero */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.10) 0%, rgba(10,10,10,0.20) 40%, rgba(10,10,10,0.75) 100%)',
            }}
          />

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-14 pb-12 md:pb-14">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4"
              style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              Portfolio · Collections
            </p>
            <h1
              className="font-light text-white tracking-tight leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              Collections
            </h1>
          </div>
        </section>

        {/* ── THIN RULE ── */}
        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── COLLECTIONS GRID ── */}
        <section className="py-16 md:py-24 px-6 md:px-14 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-14">
            {collections.map((collection) => (
              <motion.article
                key={collection.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col"
              >
                {/* Image container */}
                <div className="relative overflow-hidden aspect-[3/4] bg-[#D4C9B8] mb-5">
                  {collection.imageUrl ? (
                    <img
                      src={collection.imageUrl}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#8A8278] text-xs tracking-widest uppercase">No Image</span>
                    </div>
                  )}

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-500" />

                  {/* Index number — top-right corner */}
                  <span
                    className="absolute top-4 right-4 text-[10px] tracking-[0.25em] text-white/60 font-light"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {collection.index}
                  </span>

                  {/* View button — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <button
                      onClick={() => handleViewPdf(collection.pdfUrl, collection.title)}
                      className="w-full py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-light hover:bg-[#D4C9B8] transition-colors duration-200"
                    >
                      View Collection
                    </button>
                  </div>
                </div>

                {/* Text below image */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="text-[#0A0A0A] font-light tracking-tight mb-1.5 leading-tight"
                      style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
                    >
                      {collection.title}
                    </h3>
                    <p className="text-[#8A8278] font-light text-sm leading-relaxed">
                      {collection.description}
                    </p>
                  </div>

                  {/* Arrow — only visible on hover, desktop */}
                  <button
                    onClick={() => handleViewPdf(collection.pdfUrl, collection.title)}
                    aria-label={`View ${collection.title}`}
                    className="shrink-0 mt-0.5 text-[#8A8278] hover:text-[#0A0A0A] transition-colors duration-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity md:block hidden"
                  >
                    →
                  </button>
                </div>

                {/* Mobile-only tap button (always visible, no hover slide) */}
                <button
                  onClick={() => handleViewPdf(collection.pdfUrl, collection.title)}
                  className="mt-4 w-full py-3 border border-[#D4C9B8] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-light hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-200 md:hidden"
                >
                  View Collection
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="py-20 border-t border-[#D4C9B8] px-6 text-center bg-[#F0EDE8]">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-6">Get Involved</p>
          <h2
            className="text-[#0A0A0A] font-light tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
          >
            Want to collaborate<br />
            <span className="italic">on something new?</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#0A0A0A] text-white text-xs font-light tracking-widest uppercase hover:bg-[#8A8278] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </section>
      </main>

      {selectedPdf && (
        <PDFModal
          isOpen={!!selectedPdf}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </>
  );
}