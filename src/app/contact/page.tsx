'use client';

import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 px-4 relative min-h-[25vh] flex items-center" style={{backgroundImage: 'url(/homeImages/Screenshot%202026-06-11%20at%203.01.53%20AM.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="max-w-4xl mx-auto text-center w-full relative z-10">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">
              Collaboration
            </h1>
            <p className="text-base text-gray-100 font-light">
              Let&apos;s discuss your next project
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
                  Send Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: 'Email',
                      value: 'sachan.suparna2350@gmail.com',
                      details: 'Response within 24 hours',
                    },
                    {
                      title: 'Phone',
                      value: '+91 8299791464',
                      // details: 'Mon-Fri, 9am-5pm',
                    },
                    // {
                    //   title: 'Location',
                    //   value: 'New York, USA',
                    //   details: 'Available for meetings',
                    // },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-gray-200 pb-8">
                      <h3 className="text-sm font-light text-gray-600 uppercase tracking-wider mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-900 font-light mb-1">{item.value}</p>
                      <p className="text-sm text-gray-600 font-light">{item.details}</p>
                    </div>
                  ))}

                  {/* Social Links */}
                  <div className="pt-8">
                    <h3 className="text-sm font-light text-gray-600 uppercase tracking-wider mb-4">
                      Follow
                    </h3>
                    <div className="flex gap-4">
                      {['Behance'].map((platform, i) => (
                        <a
                          key={i}
                          href="https://www.behance.net/suparnasachan1"
                          className="text-gray-400 font-light transition duration-300 hover:text-cyan-300 relative group"
                          style={{
                            textShadow: '0 0 1px #212c2e, 0 0 20px #000000, 0 0 30px #06b6d4',
                          }}
                        >
                          {platform}
                          <span 
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"
                            style={{
                              boxShadow: '0 0 1px #06b6d4, 0 0 20px #000000',
                            }}
                          ></span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center text-gray-900 mb-16 tracking-tight">
              Frequently Asked
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is your design process?',
                  a: 'I start by understanding your vision, develop initial concepts, create detailed designs, and iterate based on your feedback.',
                },
                {
                  q: 'How long does a project take?',
                  a: 'Timeline varies based on scope. Simple designs: 2-4 weeks. Complex collections: 2-3 months. We can discuss rush options if needed.',
                },
                {
                  q: 'Do you work internationally?',
                  a: 'Yes, I work with brands worldwide and have experience with international collaborations and shipping.',
                },
                {
                  q: 'What is your pricing?',
                  a: "Pricing is customized based on project scope and requirements. Let's discuss your specific needs for an accurate quote.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 p-6 hover:border-gray-400 transition duration-300 hover:shadow-md">
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-tight">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
