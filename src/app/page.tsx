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
      <main className="bg-white">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">
              Fashion Design Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 font-light leading-relaxed">
              Elegant collections and premium brand collaborations
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/gallery"
                className="px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200 border border-gray-900 hover:shadow-lg"
              >
                View Gallery
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-50 transition duration-200 hover:shadow-md"
              >
                Collaborate
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="px-4">
          <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
        </div>

        {/* Features Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900 tracking-tight">Why Collaborate</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Creative Excellence', desc: 'Thoughtfully crafted designs with attention to detail' },
                { title: 'Professional Standards', desc: 'Reliable timelines and dedicated project management' },
                { title: 'Brand Vision', desc: 'Aligned with your brand values and market positioning' },
              ].map((feature, i) => (
                <div key={i} className="text-center p-8 bg-white border border-gray-200 hover:border-gray-400 transition duration-300 hover:shadow-md">
                  <h3 className="text-lg font-light text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="px-4">
          <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
        </div>

        {/* Call to Action */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 border border-gray-200 p-12 hover:border-gray-400 transition duration-300 hover:shadow-md">
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Discuss your next collection or brand collaboration
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200 border border-gray-900 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
