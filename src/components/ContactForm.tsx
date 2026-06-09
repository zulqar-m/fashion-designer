'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  brand: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you'd typically send to your backend or email service
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl bg-white border border-gray-200 p-8 hover:border-gray-400 transition duration-300 hover:shadow-md"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-gray-50 border border-gray-300 text-gray-800 font-light"
        >
          ✓ Thank you for your message. I&apos;ll respond shortly.
        </motion.div>
      )}

      <div className="mb-8">
        <label className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase">
          Name
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="Your name"
          className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition font-light"
        />
        {errors.name && (
          <span className="text-red-600 text-sm mt-1 font-light">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition font-light"
        />
        {errors.email && (
          <span className="text-red-600 text-sm mt-1 font-light">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase">
          Brand Name
        </label>
        <input
          {...register('brand')}
          type="text"
          placeholder="Your brand or company"
          className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition font-light"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase">
          Message
        </label>
        <textarea
          {...register('message')}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition resize-none font-light"
        />
        {errors.message && (
          <span className="text-red-600 text-sm mt-1 font-light">{errors.message.message}</span>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-gray-900 text-white font-light py-3 hover:bg-gray-800 transition duration-200 tracking-wider hover:shadow-md"
      >
        Send
      </motion.button>
    </motion.form>
  );
}
