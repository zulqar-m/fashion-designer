'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function GalleryCard({ title, description, image, onClick }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer group relative overflow-hidden h-72 border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <motion.div 
          animate={{ opacity: isHovered ? 0.4 : 0.2 }}
          className="absolute inset-0 bg-black transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.h3 
          animate={{ y: isHovered ? 0 : 8 }}
          className="text-xl font-light mb-2 transition-transform duration-300"
        >
          {title}
        </motion.h3>
        <motion.p 
          animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0.7 }}
          className="text-sm font-light text-gray-100 transition-all duration-300"
        >
          {description}
        </motion.p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none transition-opacity duration-300"
      >
        <motion.span
          animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
          className="text-white font-light text-sm tracking-wider"
        >
          View Collection
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
