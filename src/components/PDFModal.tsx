'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface PDFModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export default function PDFModal({ isOpen, pdfUrl, title, onClose }: PDFModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/70 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
          >
            <div className="bg-[#F8F6F2] w-[98vw] h-[95vh] flex flex-col shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#D4C9B8] flex-shrink-0">
                <div className="flex items-center gap-5">
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase text-[#8A8278] hidden sm:block"
                    style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    Collection
                  </p>
                  <div className="hidden sm:block w-[1px] h-4 bg-[#D4C9B8]" />
                  <h2
                    className="font-light text-[#0A0A0A] tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
                  >
                    {title}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="flex items-center gap-2 text-[#8A8278] hover:text-[#0A0A0A] transition-colors duration-200 group"
                >
                  <span className="text-xs tracking-[0.2em] uppercase hidden sm:block" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
                    Close
                  </span>
                  {/* Animated × using two lines */}
                  <span className="relative w-5 h-5">
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1px] bg-current rotate-45" />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1px] bg-current -rotate-45" />
                    </span>
                  </span>
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-[#E8E4DE]">
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                  title={title}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 md:px-10 py-4 border-t border-[#D4C9B8] bg-[#F8F6F2] flex-shrink-0">
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-[#8A8278]"
                  style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}
                >
                  PDF · {title}
                </p>

                <div className="flex gap-3">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-[#D4C9B8] text-[#8A8278] text-xs font-light tracking-[0.15em] uppercase hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors duration-200"
                  >
                    Open In New Tab
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="px-5 py-2 bg-[#0A0A0A] text-white text-xs font-light tracking-[0.15em] uppercase hover:bg-[#8A8278] transition-colors duration-300"
                  >
                    Download
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