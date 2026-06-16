'use client';

import Navigation from '@/components/Navigation';

const experiences = [
  { role: 'Menswear Assistant Designer', company: 'HOUSE OF ALAMS', location: 'Delhi NCR', period: 'Jan – Jun 2026' },
  { role: 'Menswear Assistant Designer', company: 'NAMUNJII', location: 'Ahmedabad, Gujarat', period: 'Aug – Dec 2025' },
  { role: 'Graduation Project Internship', company: 'THE INDIAN GARAGE CO', location: 'Bangalore, Karnataka', period: 'Jan – May 2025' },
  { role: 'Fashion Designer', company: 'UNITED COLORS OF BENETTON', location: 'Gurgaon, Haryana', period: 'Jun – Jul 2024' },
  { role: 'Fashion Styling Expert', company: 'PANTALOONS STYLE-EXPERTS', location: 'Bangalore', period: 'Sep 2023' },
  { role: 'Craft Cluster Documentation', company: 'PERIYAR NEGAMAM CRAFT CLUSTER', location: 'Pollachi, Tamil Nadu', period: 'May 2023' },
  { role: 'Fashion Stylist', company: 'RAW MANGO', location: 'Festive Collection & SUZEGAD', period: 'Nov 2023' },
];

const expertise = [
  { title: 'Specializations', items: ['Menswear Design', 'Kidswear', 'Evening Wear', 'Ready-to-Wear', 'Traditional Crafts'] },
  { title: 'Skills', items: ['Pattern Making', 'Styling & Consultation', 'Craft Documentation', 'Design Illustration', 'Fashion Coordination'] },
  { title: 'Brands Worked With', items: ['Raw Mango', 'Pantaloons', 'Benetton', 'Namunjii', 'House of Alams'] },
  { title: 'Key Areas', items: ['Sustainable Fashion', 'Artisan Collaboration', 'Cultural Heritage', 'Contemporary Design', 'Team Leadership'] },
];

export default function About() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F8F6F2]">

        {/* ── PAGE HEADER ── */}
        <section
          className="relative flex items-end"
          style={{
            minHeight: '38vh',
            backgroundImage: 'url(/homeImages/Screenshot%202026-06-11%20at%203.01.37%20AM.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.10) 0%, rgba(10,10,10,0.20) 40%, rgba(10,10,10,0.75) 100%)',
            }}
          />
          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-14 pb-12 md:pb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Portfolio · About
            </p>
            <h1 className="font-light text-white tracking-tight leading-[0.9]" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              About
            </h1>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── PROFILE ── */}
        <section className="py-20 md:py-28 px-6 md:px-14 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

            {/* Photo */}
            <div className="md:col-span-4">
              <div className="aspect-[3/4] overflow-hidden bg-[#D4C9B8]">
                <img
                  src="/images/profile.png"
                  alt="Suparna Sachan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-5" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                Designer
              </p>
              <h2
                className="font-light text-[#0A0A0A] tracking-tight leading-[0.9] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              >
                Suparna<br />
                <span className="italic">Sachan</span>
              </h2>
              <div className="w-12 h-[1px] bg-[#D4C9B8] mb-8" />
              <p className="text-[#8A8278] font-light text-base leading-relaxed mb-5 max-w-lg">
                A driven fashion enthusiast, ceaselessly dedicated to honing craft and acquiring new knowledge — committed to continual self-improvement within the dynamic realm of fashion.
              </p>
              <p className="text-[#8A8278] font-light text-base leading-relaxed max-w-lg">
                Specializing in menswear design and styling with expertise in traditional crafts and contemporary fashion. Passionate about creating innovative designs that blend cultural heritage with modern aesthetics.
              </p>

              {/* Resume download */}
              <a
                href="pdfs/resume.pdf"
                download
                className="mt-10 self-start inline-block px-8 py-3 bg-[#0A0A0A] text-white text-xs font-light tracking-widest uppercase hover:bg-[#8A8278] transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── WORK EXPERIENCE ── */}
        <section className="py-20 md:py-24 px-6 md:px-14 max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
            Experience
          </p>
          <h2
            className="font-light text-[#0A0A0A] tracking-tight mb-14"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
          >
            Work History
          </h2>

          {/* Table-style rows */}
          <div className="divide-y divide-[#D4C9B8]">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-4 py-6 hover:bg-[#F0EDE8] transition-colors duration-200 -mx-4 px-4"
              >
                {/* Index */}
                <span
                  className="col-span-1 text-[10px] text-[#8A8278] pt-1"
                  style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Role */}
                <div className="col-span-11 md:col-span-5">
                  <p className="text-[#0A0A0A] font-light text-sm md:text-base leading-snug">{exp.role}</p>
                </div>

                {/* Company */}
                <div className="col-span-11 md:col-span-4 md:col-start-7 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <div>
                    <p className="text-[#0A0A0A] font-light text-sm">{exp.company}</p>
                    <p className="text-[#8A8278] text-xs font-light">{exp.location}</p>
                  </div>
                  <p
                    className="text-[#8A8278] text-xs whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {exp.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── EDUCATION ── */}
        <section className="py-20 md:py-24 px-6 md:px-14 bg-[#F0EDE8]">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                Education
              </p>
              <h2 className="font-light text-[#0A0A0A] tracking-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                Academic<br /><span className="italic">Background</span>
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="border-t border-[#D4C9B8] pt-8">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A8278] mb-1" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                  2021 – 2025
                </p>
                <h3 className="text-[#0A0A0A] font-light text-xl mb-1">Bachelor of Design</h3>
                <p className="text-[#8A8278] font-light mb-8">National Institute of Fashion Technology, Bangalore</p>

                <div className="grid sm:grid-cols-3 gap-8 border-t border-[#D4C9B8] pt-8">
                  {[
                    { label: 'GPA', value: '8.45' },
                    { label: 'Minor', value: 'Fashion Communication Design' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A8278] mb-2" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                        {item.label}
                      </p>
                      <p className="text-[#0A0A0A] font-light text-sm leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── EXPERTISE ── */}
        <section className="py-20 md:py-24 px-6 md:px-14 max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
            Skills
          </p>
          <h2 className="font-light text-[#0A0A0A] tracking-tight mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#D4C9B8]">
            {expertise.map((section) => (
              <div key={section.title} className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A8278] mb-6" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="text-[#0A0A0A] font-light text-sm flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 shrink-0 bg-[#8A8278] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── CORE VALUES ── */}
        <section className="py-20 md:py-24 px-6 md:px-14 bg-[#0A0A0A]">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
              Philosophy
            </p>
            <h2 className="font-light text-white tracking-tight mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { title: 'Quality', desc: 'Meticulous attention to detail and craftsmanship in every design.' },
                { title: 'Heritage', desc: 'Honoring traditional crafts and cultural authenticity.' },
                { title: 'Innovation', desc: 'Blending contemporary design with artisan techniques.' },
              ].map((v) => (
                <div key={v.title} className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                  <h3 className="text-white font-light text-lg mb-3 tracking-tight italic">{v.title}</h3>
                  <p className="text-white/40 font-light text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 text-center bg-[#F0EDE8]">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-6" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
            Get Involved
          </p>
          <h2 className="text-[#0A0A0A] font-light tracking-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
            Let&apos;s build<br />
            <span className="italic">something together</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#0A0A0A] text-white text-xs font-light tracking-widest uppercase hover:bg-[#8A8278] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}