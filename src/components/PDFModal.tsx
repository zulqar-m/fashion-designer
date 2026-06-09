'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PDFModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export default function PDFModal({ isOpen, pdfUrl, title, onClose }: PDFModalProps) {
  const [scale, setScale] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2"
          >
            <div className="bg-white shadow-2xl w-[98vw] h-[95vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 flex-shrink-0">
                <h2 className="text-3xl font-light text-gray-900 tracking-tight">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-900 text-4xl font-light transition w-10 h-10 flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-50">
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                  title={title}
                />
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between px-8 py-5 border-t border-gray-200 bg-white flex-shrink-0">
                <div className="text-sm text-gray-600 font-light">
                  PDF Collection
                </div>
                <div className="flex gap-3">
                  <a
                    href={pdfUrl}
                    download
                    className="px-6 py-2 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200 text-sm"
                  >
                    Download
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-900 text-gray-900 font-light hover:bg-gray-50 transition duration-200 text-sm"
                  >
                    Open in New Tab
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
