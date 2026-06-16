import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Fashion Designer Portfolio',
  description: 'Discover stunning fashion designs and brand collaborations',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F8F6F2]">

        {/* ── HERO COLLAGE ── */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>

          {/* Three-photo asymmetric grid */}
     <div className="absolute inset-0">
  <div
    className="w-full h-full"
    style={{
      backgroundImage: "url('/homeImages/hi2.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
</div>
          {/* Dark scrim — heavier at bottom where text lives */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.18) 40%, rgba(10,10,10,0.72) 100%)',
            }}
          />

          {/* Horizontal seam overlay line — purely decorative, runs across the bottom third */}
          <div
            className="absolute left-0 right-0 h-[1px] bg-white/20 pointer-events-none"
            style={{ top: '62%' }}
          />

          {/* Hero text — anchored to lower-left */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[100svh] px-6 md:px-14 pb-14 md:pb-16 max-w-screen-xl mx-auto">

            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.3em] uppercase text-white/60 mb-5"
              style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              Portfolio · Fashion Design
            </p>

            {/* Main display headline — spans columns */}
            <h1
              className="font-light text-white leading-[0.88] tracking-tight mb-8"
              style={{
                fontSize: 'clamp(3.2rem, 10vw, 9rem)',
                fontFamily: 'var(--font-geist-sans, Georgia, serif)',
              }}
            >
              Fashion
              <br />
              <span className="italic" style={{ letterSpacing: '-0.02em' }}>Portfolio</span>
              <br />
            </h1>

            {/* Sub copy + CTAs side by side */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
              <p className="text-[#D4C9B8] font-light text-base leading-relaxed max-w-xs">
                Elevated collections and premium brand&nbsp;collaborations — crafted with intention.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/gallery"
                  className="px-7 py-3 bg-white text-[#0A0A0A] text-sm font-light tracking-wide hover:bg-[#D4C9B8] transition-colors duration-200"
                >
                  View Gallery
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3 border border-white/60 text-white text-sm font-light tracking-wide hover:border-white hover:bg-white/10 transition-colors duration-200"
                >
                  Collaborate
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white rotate-90 origin-center" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
            <div className="w-[1px] h-10 bg-white/60 mt-1" />
          </div>
        </section>

        {/* ── CATEGORY STRIP ── */}
        <section className="bg-[#0A0A0A] py-0">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 divide-x divide-white/10">
            {[
              { label: 'Collections', sub: 'Seasonal & editorial work', href: '/gallery' },
              { label: 'Brands', sub: 'Collaborations & partnerships', href: '/gallery' },
              { label: 'Process', sub: 'Behind every piece', href: '/contact' },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group flex items-center justify-between px-10 py-8 hover:bg-white/5 transition-colors duration-200"
              >
                <div>
                  <p className="text-white font-light text-lg tracking-tight">{cat.label}</p>
                  <p className="text-white/40 text-xs tracking-wider mt-1">{cat.sub}</p>
                </div>
                <span className="text-white/30 group-hover:text-white/80 transition-colors text-xl">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SELECTED WORK TEASER ── */}
        <section className="py-24 px-6 md:px-14 max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-[#0A0A0A] font-light tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
            >
              Selected Work
            </h2>
            <Link href="/gallery" className="text-xs tracking-[0.2em] uppercase text-[#8A8278] hover:text-[#0A0A0A] transition-colors border-b border-[#8A8278]/40 pb-0.5">
              View All
            </Link>
          </div>

          {/* 3-col asymmetric preview grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div
              className="col-span-12 md:col-span-7 aspect-[4/3] bg-[#D4C9B8]"
              style={{ backgroundImage: "url('/images/krtn.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
              <div
                className="aspect-video bg-[#8A8278]"
                style={{ backgroundImage: "url('/images/line-breakers.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div
                className="aspect-video bg-[#0A0A0A]"
                style={{ backgroundImage: "url('/images/londons-last-summer.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
          </div>
        </section>

        {/* ── WHY COLLABORATE ── */}
        <section className="py-20 px-6 md:px-14 bg-[#F0EDE8]">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-10">Why Work Together</p>
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#D4C9B8]">
              {[
                { title: 'Creative Excellence', desc: 'Thoughtfully crafted designs with attention to every stitch and silhouette.' },
                { title: 'Professional Standards', desc: 'Reliable timelines, transparent communication, dedicated project management.' },
                { title: 'Brand Vision', desc: 'Designs aligned with your values, market, and the story you want to tell.' },
              ].map((f, i) => (
                <div key={i} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                  <h3 className="text-[#0A0A0A] font-light text-lg mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-[#8A8278] font-light text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 px-6 text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-6">Next Steps</p>
          <h2
            className="text-[#0A0A0A] font-light tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Let&apos;s Build<br />
            <span className="italic">Something Together</span>
          </h2>
          <p className="text-[#8A8278] font-light mb-10 max-w-sm mx-auto leading-relaxed">
            Discuss your next collection or brand collaboration — reach out and let&apos;s start.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#0A0A0A] text-white text-sm font-light tracking-widest uppercase hover:bg-[#8A8278] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </>
  );
}