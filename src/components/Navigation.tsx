'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#D4C9B8]"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 py-5 flex justify-between items-center">

        {/* Wordmark */}
        <Link
          href="/"
          className="text-[#0A0A0A] font-light tracking-[0.12em] text-base uppercase hover:text-[#8A8278] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-geist-sans, Georgia, serif)' }}
        >
          Suparna Sachan
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xs tracking-[0.2em] uppercase font-light transition-colors duration-200 pb-0.5 ${
                  active ? 'text-[#0A0A0A]' : 'text-[#8A8278] hover:text-[#0A0A0A]'
                }`}
              >
                {item.name}
                {/* Active underline */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-[1px] h-[1px] bg-[#0A0A0A]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-full h-[1px] bg-[#0A0A0A] origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-full h-[1px] bg-[#0A0A0A] origin-center"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-full h-[1px] bg-[#0A0A0A] origin-center"
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-[#D4C9B8] bg-[#F8F6F2]"
          >
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 text-xs tracking-[0.25em] uppercase font-light border-b border-[#D4C9B8] transition-colors duration-200 ${
                      active
                        ? 'text-[#0A0A0A] bg-[#F0EDE8]'
                        : 'text-[#8A8278] hover:text-[#0A0A0A] hover:bg-[#F0EDE8]'
                    }`}
                  >
                    {item.name}
                    {active && <span className="text-[#0A0A0A] text-base leading-none">→</span>}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}