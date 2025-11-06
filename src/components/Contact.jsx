import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something great</h2>
        <p className="mt-2 text-white/70">Tell me about your project or say hello.</p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            placeholder="Your name"
            className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <textarea
          required
          rows="5"
          placeholder="What are you building?"
          className="mt-4 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm text-white/60">
            <Mail className="mr-1 inline-block h-4 w-4" /> alex@yourdomain.com
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-emerald-500/30 transition hover:bg-emerald-600"
          >
            <Send size={18} /> Send message
          </button>
        </div>
        {status && <p className="mt-3 text-center text-sm text-emerald-300">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
