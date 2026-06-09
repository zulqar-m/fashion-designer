'use client';

import { motion } from 'framer-motion';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white border border-gray-200 p-8"
    >
      <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">{title}</h3>

      {/* PDF Embed Viewer */}
      <div className="w-full mb-6 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
        <embed
          src={pdfUrl}
          type="application/pdf"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
          }}
          title={title}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap">
        <a
          href={pdfUrl}
          download
          className="px-6 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200"
        >
          Download PDF
        </a>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-50 transition duration-200"
        >
          Open in New Tab
        </a>
      </div>
    </motion.div>
  );
}
