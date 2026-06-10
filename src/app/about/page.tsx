'use client';

import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 px-4 relative min-h-[25vh] flex items-center" style={{backgroundImage: 'url(/homeImages/Screenshot%202026-06-11%20at%203.01.37%20AM.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="max-w-4xl mx-auto text-center w-full relative z-10">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">
              About
            </h1>
            <p className="text-base text-gray-100 font-light">
              The story behind the designs
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="border-b-4 border-amber-200 pb-24 mb-24">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="w-56 h-56 rounded-full object-cover mx-auto md:mx-0 shadow-lg overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/images/profile.png" 
                      alt="Suparna Sachan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
                    Suparna Sachan
                  </h2>
                  <p className="text-lg text-amber-600 font-light mb-6 tracking-wide">FASHION DESIGNER</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4 font-light">
                    A driven fashion enthusiast, ceaselessly dedicated to honing craft and acquiring new knowledge, committed to continual self-improvement and skill development within the dynamic realm of fashion.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    Specializing in menswear design and styling with expertise in traditional crafts and contemporary fashion. Passionate about creating innovative designs that blend cultural heritage with modern aesthetics.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-24">
              <h3 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
                Work Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    role: 'Menswear Assistant Designer',
                    company: 'HOUSE OF ALAMS, Delhi NCR',
                    period: 'January - June 2026',
                  },
                  {
                    role: 'Menswear Assistant Designer',
                    company: 'NAMUNJII, Ahmedabad, Gujarat',
                    period: 'August - December 2025',
                  },
                  {
                    role: 'Graduation Project Internship',
                    company: 'THE INDIAN GARAGE CO, Bangalore, Karnataka',
                    period: 'January - May 2025',
                  },
                  {
                    role: 'Fashion Designer',
                    company: 'UNITED COLOR OF BENETTON, Gurgaon, Haryana',
                    period: 'June - July 2024',
                  },
                  {
                    role: 'Fashion Styling Expert',
                    company: 'PANTALOONS STYLE-EXPERTS, Bangalore',
                    period: 'September 2023',
                  },
                  {
                    role: 'Craft Cluster Documentation',
                    company: 'PERIYAR NEGAMAM CRAFT CLUSTER, Pollachi, Tamil Nadu',
                    period: 'May 2023',
                  },
                  {
                    role: 'Fashion Stylist',
                    company: 'RAW MANGO, Festive Collection & SUZEGAD',
                    period: 'November 2023',
                  },
                ].map((exp, i) => (
                  <div key={i} className="bg-gradient-to-r from-white to-amber-50 border-l-4 border-amber-500 p-6 hover:shadow-lg transition duration-300">
                    <h4 className="text-lg font-light text-amber-700 mb-1">{exp.role}</h4>
                    <p className="text-gray-900 font-light mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 font-light">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Section */}
            <div className="mb-24 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 p-12 rounded-lg shadow-md">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">Download Full Resume</h3>
              <p className="text-gray-600 font-light mb-8">
                Get the complete details of my professional background, skills, and achievements.
              </p>
              <a
                href="pdfs/resume.pdf"
                download
                className="inline-block px-8 py-3 bg-amber-600 text-white font-light hover:bg-amber-700 transition duration-200 hover:shadow-lg"
              >
                Download Resume PDF
              </a>
            </div>

            {/* Education */}
            <div className="mb-24">
              <h3 className="text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
                Education
              </h3>
              <div className="bg-gradient-to-r from-white to-amber-50 border-l-4 border-amber-500 p-8 hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-light text-amber-700 mb-2">Bachelor of Design</h4>
                <p className="text-gray-900 font-light mb-1">National Institute of Fashion Technology, Bangalore</p>
                <p className="text-sm text-gray-500 font-light mb-6">2021 - 2025</p>
                
                <div className="border-t border-amber-200 pt-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-light mb-1">GPA</p>
                    <p className="text-lg text-gray-900 font-light">8.45</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-light mb-1">Minor</p>
                    <p className="text-gray-900 font-light">Fashion Communication Design</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-light mb-1">Thesis</p>
                    <p className="text-gray-900 font-light">Studied several technology companies and optimized their product design and user experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-24">
              <h3 className="text-2xl font-light text-gray-900 mb-12 text-center tracking-tight">
                Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    title: 'Specializations', 
                    items: ['Menswear Design', 'Kidswear', 'Evening Wear', 'Ready-to-Wear', 'Traditional Crafts'] 
                  },
                  { 
                    title: 'Skills', 
                    items: ['Pattern Making', 'Styling & Consultation', 'Craft Documentation', 'Design Illustration', 'Fashion Coordination'] 
                  },
                  { 
                    title: 'Brands Worked With', 
                    items: ['Raw Mango', 'Pantaloons', 'Benetton', 'Namunjii', 'House of Alams'] 
                  },
                  { 
                    title: 'Key Areas', 
                    items: ['Sustainable Fashion', 'Artisan Collaboration', 'Cultural Heritage', 'Contemporary Design', 'Team Leadership'] 
                  },
                ].map((section, i) => (
                  <div key={i} className="bg-white border-t-4 border-amber-500 p-8 hover:shadow-lg transition duration-300 shadow-sm">
                    <h4 className="text-lg font-light text-gray-900 mb-6 tracking-tight">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="text-gray-700 font-light flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Values */}
            <div className="border-t-4 border-amber-200 pt-24 mb-24">
              <h3 className="text-2xl font-light text-gray-900 mb-12 text-center tracking-tight">
                Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Quality',
                    desc: 'Meticulous attention to detail and craftsmanship in every design',
                  },
                  {
                    title: 'Heritage',
                    desc: 'Honoring traditional crafts and cultural authenticity',
                  },
                  {
                    title: 'Innovation',
                    desc: 'Blending contemporary design with artisan techniques',
                  },
                ].map((value, i) => (
                  <div key={i} className="text-center p-8 bg-gradient-to-b from-amber-50 to-transparent border-b-4 border-amber-500 hover:shadow-md transition duration-300">
                    <h4 className="text-lg font-light text-amber-700 mb-3 tracking-tight">{value.title}</h4>
                    <p className="text-gray-600 font-light">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-12 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Let&apos;s Collaborate
              </h3>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                Ready to discuss your next project
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-amber-600 text-white font-light hover:bg-amber-700 transition duration-200 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
