'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  const designerEmail = 'sachan.suparna2350@gmail.com';
  const designerPhone = '918299791464'; // WhatsApp format: country code + number without spaces
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${designerEmail}&su=Design%20Collaboration%20Inquiry`;
  const whatsappUrl = `https://wa.me/${designerPhone}?text=Hi%20Suparna%2C%20I%27m%20interested%20in%20collaborating%20on%20a%20design%20project.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl bg-white border border-gray-200 p-8 hover:border-gray-400 transition duration-300 hover:shadow-md"
    >
      <div className="text-center space-y-6">
        <p className="text-gray-600 font-light text-lg leading-relaxed">
          Ready to start your collaboration? Reach out through your preferred platform.
        </p>
        
        <div className="flex flex-col gap-4">
          {/* Gmail */}
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition duration-200 border border-gray-900 hover:shadow-lg text-center flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Send Message via Gmail
          </a>
          
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 bg-green-600 text-white font-light hover:bg-green-700 transition duration-200 border border-green-600 hover:shadow-lg text-center flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.88 9.88 0 002.605 10.1a9.88 9.88 0 001.523 4.991 9.88 9.88 0 004.99 1.523h.005a9.885 9.885 0 004.991-1.523 9.88 9.88 0 001.523-4.991 9.88 9.88 0 00-1.523-4.99 9.88 9.88 0 00-4.991-1.523zm0-2.04a11.93 11.93 0 015.992 1.83 11.93 11.93 0 011.83 5.992c0 6.6-5.373 11.972-11.972 11.972a11.93 11.93 0 01-5.992-1.83 11.93 11.93 0 01-1.83-5.992c0-6.6 5.373-11.972 11.972-11.972z" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-500 font-light">
          Both options will open your preferred app with the designer&apos;s contact details pre-filled
        </p>
      </div>
    </motion.div>
  );
}
