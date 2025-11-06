import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, GitBranch, ShieldCheck, Rocket } from 'lucide-react';

const stack = [
  { name: 'React', desc: 'Hooks, Context, performance tuning', icon: <Rocket className="h-5 w-5" /> },
  { name: 'TypeScript', desc: 'Typesafe DX across the stack', icon: <ShieldCheck className="h-5 w-5" /> },
  { name: 'Node & FastAPI', desc: 'APIs, workers, auth, caching', icon: <Server className="h-5 w-5" /> },
  { name: 'Cloud & CI/CD', desc: 'Docker, Vercel, AWS, pipelines', icon: <Cloud className="h-5 w-5" /> },
  { name: 'Git & Testing', desc: 'PR flows, unit/e2e tests', icon: <GitBranch className="h-5 w-5" /> },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What I Use</h2>
        <p className="mt-2 text-white/70">A pragmatic toolkit focused on velocity and reliability.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-400">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                {item.icon}
              </span>
              <span className="text-sm font-medium">Capability</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-white/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
