'use client';

import Navigation from '@/components/Navigation';
import PDFModal from '@/components/PDFModal';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Collections with your PDFs
const collections = [
    {
    id: 1,
    title: 'KRTN',
    description: 'Sophisticated autumn collection',
    pdfUrl: '/pdfs/KTRN - PROJECT 1.pdf',
    imageUrl: '/images/krtn.png',
  },
    {
    id: 2,
    title: 'Line Breakers',
    description: 'Sophisticated autumn collection',
    pdfUrl: '/pdfs/line-breakers.pdf',
    imageUrl: '/images/line-breakers.png',
  },
    {
    id: 3,
    title: 'Londons Last Summer',
    description: 'Sophisticated autumn collection',
    pdfUrl: '/pdfs/LONDONS LAST SUMMER-PROJECT 3.pdf',
    imageUrl: '/images/londons-last-summer.png',
  },{
    id: 4,
    title: 'Red One',
    description: 'Stunning red collection designs',
    pdfUrl: '/pdfs/project 4 red one .pdf',
    imageUrl: '/images/red-one.png',
  },
  {
    id: 5,
    title: 'Taj Mahal',
    description: 'Light and refined summer styles',
    pdfUrl: '/pdfs/PROJECT 5 TAJ MAHAL.pdf',
    imageUrl: '/images/taj-mahal.png',
  },
  {
    id: 6,
    title: 'Celestial Boom',
    description: 'Sophisticated autumn collection',
    pdfUrl: '/pdfs/PROJECT6 CELESTIAL BLOOM.pdf',
    imageUrl: '/images/celestial_boom.png',
  },
];

export default function Gallery() {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const handleViewPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ url: pdfUrl, title });
  };

  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Collections
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Explore carefully curated fashion collections
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <motion.div
                  key={collection.id}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg overflow-hidden h-full flex flex-col">
                    {/* Collection Preview Image */}
                    <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden flex items-center justify-center group">
                      {collection.imageUrl ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={collection.imageUrl}
                            alt={collection.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                        </>
                      ) : (
                        <div className="text-center">
                          <div className="text-5xl mb-3 text-gray-400">🎨</div>
                          <p className="text-sm font-light text-gray-500 tracking-wider">NO IMAGE</p>
                        </div>
                      )}
                    </div>

                    {/* Collection Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-light text-gray-900 mb-2 tracking-tight">{collection.title}</h3>
                      <p className="text-gray-600 font-light text-sm mb-6 flex-1">{collection.description}</p>

                      {/* Action Button */}
                      {collection.pdfUrl ? (
                        <button
                          onClick={() => handleViewPdf(collection.pdfUrl!, collection.title)}
                          className="w-full px-4 py-2 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200 text-sm"
                        >
                          View Collection
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full px-4 py-2 border border-gray-300 text-gray-400 font-light bg-gray-50 cursor-not-allowed text-sm"
                        >
                          Not Available
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Section */}
            {/* <div className="mt-16 bg-white border border-gray-200 p-8 hover:border-gray-400 transition duration-300 hover:shadow-md">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-tight">About Your Collections</h3>
              <ol className="space-y-3 text-gray-600 font-light">
                <li>• Save collection preview images to <code className="bg-gray-50 border border-gray-200 px-2 py-1 rounded text-sm">/public/images/</code></li>
                <li>• Add <code className="bg-gray-50 border border-gray-200 px-2 py-1 rounded text-sm">imageUrl</code> property to each collection (e.g., '/images/red-one.jpg')</li>
                <li>• Place PDF files in <code className="bg-gray-50 border border-gray-200 px-2 py-1 rounded text-sm">/public/pdfs/</code></li>
                <li>• PDFs open in a beautiful modal viewer for full-screen viewing</li>
                <li>• Users can download or open PDFs in a new tab</li>
              </ol>
            </div> */}
          </div>
        </section>
      </main>

      {/* PDF Modal */}
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
