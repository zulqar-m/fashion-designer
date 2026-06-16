'use client';

import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F8F6F2]">

        {/* ── PAGE HEADER ── */}
        <section
          className="relative flex items-end"
          style={{
            minHeight: '38vh',
            backgroundImage: 'url(/homeImages/Screenshot%202026-06-11%20at%203.01.53%20AM.png)',
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
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4"
              style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              Portfolio · Contact
            </p>
            <h1
              className="font-light text-white tracking-tight leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              Collaboration
            </h1>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── CONTACT GRID ── */}
        <section className="py-20 md:py-28 px-6 md:px-14 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">

            {/* ── Form ── */}
            <div className="md:col-span-7">
              <p
                className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3"
                style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
              >
                Write
              </p>
              <h2
                className="font-light text-[#0A0A0A] tracking-tight mb-10"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* ── Info ── */}
            <div className="md:col-span-5">
              <p
                className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3"
                style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
              >
                Reach Out
              </p>
              <h2
                className="font-light text-[#0A0A0A] tracking-tight mb-10"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Get in Touch
              </h2>

              <div className="divide-y divide-[#D4C9B8]">
                {[
                  { title: 'Email', value: 'sachan.suparna2350@gmail.com', details: 'Response within 24 hours' },
                  { title: 'Phone', value: '+91 8299791464', details: null },
                ].map((item) => (
                  <div key={item.title} className="py-7 first:pt-0">
                    <p
                      className="text-[10px] tracking-[0.25em] uppercase text-[#8A8278] mb-2"
                      style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                    >
                      {item.title}
                    </p>
                    <p className="text-[#0A0A0A] font-light text-base mb-1">{item.value}</p>
                    {item.details && (
                      <p className="text-[#8A8278] font-light text-xs">{item.details}</p>
                    )}
                  </div>
                ))}

                {/* Behance */}
                <div className="py-7">
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#8A8278] mb-4"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    Follow
                  </p>
                  <a
                    href="https://www.behance.net/suparnasachan1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[#0A0A0A] font-light text-sm hover:text-[#8A8278] transition-colors duration-200"
                  >
                    <span className="tracking-wide">Behance</span>
                    <span className="text-[#8A8278] group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-[#D4C9B8]" />

        {/* ── FAQ ── */}
        <section className="py-20 md:py-24 px-6 md:px-14 bg-[#F0EDE8]">
          <div className="max-w-screen-xl mx-auto">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#8A8278] mb-3"
              style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
            >
              FAQ
            </p>
            <h2
              className="font-light text-[#0A0A0A] tracking-tight mb-14"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              Frequently Asked
            </h2>

            <div className="divide-y divide-[#D4C9B8]">
              {[
                {
                  q: 'What is your design process?',
                  a: 'I start by understanding your vision, develop initial concepts, create detailed designs, and iterate based on your feedback.',
                },
                {
                  q: 'How long does a project take?',
                  a: 'Timeline varies based on scope. Simple designs: 2–4 weeks. Complex collections: 2–3 months. Rush options available on request.',
                },
                {
                  q: 'Do you work internationally?',
                  a: 'Yes — I work with brands worldwide and have experience with international collaborations and shipping.',
                },
                {
                  q: 'What is your pricing?',
                  a: "Pricing is customized based on project scope and requirements. Let's discuss your specific needs for an accurate quote.",
                },
              ].map((faq, i) => (
                <div key={i} className="group py-8 grid md:grid-cols-12 gap-4 md:gap-8">
                  {/* Index */}
                  <span
                    className="md:col-span-1 text-[10px] text-[#8A8278] pt-1"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question */}
                  <h3 className="md:col-span-4 text-[#0A0A0A] font-light text-base leading-snug">
                    {faq.q}
                  </h3>

                  {/* Answer */}
                  <p className="md:col-span-7 text-[#8A8278] font-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 text-center bg-[#0A0A0A]">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6"
            style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
          >
            Next Steps
          </p>
          <h2
            className="font-light text-white tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
          >
            Ready to start<br />
            <span className="italic">something new?</span>
          </h2>
          <a
            href="mailto:sachan.suparna2350@gmail.com"
            className="inline-block px-10 py-4 border border-white/30 text-white text-xs font-light tracking-widest uppercase hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            sachan.suparna2350@gmail.com
          </a>
        </section>
      </main>
    </>
  );
}