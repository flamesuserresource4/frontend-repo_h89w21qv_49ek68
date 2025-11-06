import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered chat with rooms, typing indicators, and message persistence.',
    tags: ['React', 'Node', 'Socket.io', 'MongoDB'],
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: 'E-commerce Platform',
    description: 'Headless storefront with payments, admin dashboard, and product search.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'Analytics Pipeline',
    description: 'Event ingestion service with dashboards and cohort analysis.',
    tags: ['FastAPI', 'Kafka', 'ClickHouse', 'Docker'],
    icon: <Database className="h-5 w-5" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-white/70">Production-grade builds that balance speed, quality, and DX.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-400">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                {p.icon}
              </span>
              <span className="text-sm font-medium">Case Study</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/15">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition-opacity group-hover:opacity-60" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
