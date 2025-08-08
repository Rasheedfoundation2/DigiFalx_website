
import Link from 'next/link';

// Reusable component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-3xl font-bold text-neon-cyan md:text-4xl">
    {children}
  </h2>
);

export default function PredictiveSEOPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      {/* 1. Page Header */}
      <div className="text-center mb-16">
        <p className="font-semibold text-neon-cyan">Growth Protocol</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">Predictive SEO</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Standard SEO reacts to the market. Our Predictive SEO protocol architects it. We position your brand where your audience will be, not just where they are now.
        </p>
      </div>

      {/* 2. What Is It Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <SectionTitle>Beyond Keywords</SectionTitle>
          <p className="mt-4 text-gray-300">
            Predictive SEO is an AI-driven methodology that analyzes market trends, competitor strategies, and user behavior data to forecast future search landscapes. Instead of optimizing for yesterday's keywords, we optimize for tomorrow's intent, ensuring long-term digital dominance.
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-start"><span className="text-neon-cyan mr-3 mt-1">&#10140;</span><span>AI-driven trend forecasting to capture emerging opportunities.</span></li>
              <li className="flex items-start"><span className="text-neon-cyan mr-3 mt-1">&#10140;</span><span>Automated content generation that aligns with future user needs.</span></li>
              <li className="flex items-start"><span className="text-neon-cyan mr-3 mt-1">&#10140;</span><span>Proactive backlink acquisition in rising digital ecosystems.</span></li>
          </ul>
        </div>
        <div className="h-64 rounded-lg bg-glass-surface border border-glass-edge flex items-center justify-center">
            <p className="text-gray-500 italic">[Placeholder for a data visualization graph]</p>
        </div>
      </div>
      
      {/* 3. Our Process Section */}
      <div className="mb-24">
          <SectionTitle>Our Execution Protocol</SectionTitle>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-2 border-hyper-magenta pl-6">
                  <h4 className="font-heading font-bold text-xl">1. Quantum Analysis</h4>
                  <p className="text-gray-400 mt-1">Our AI ingests petabytes of data to model market trajectories.</p>
              </div>
              <div className="border-l-2 border-hyper-magenta pl-6">
                  <h4 className="font-heading font-bold text-xl">2. Content Synthesis</h4>
                  <p className="text-gray-400 mt-1">We generate high-authority, SEO-optimized content before it's in demand.</p>
              </div>
              <div className="border-l-2 border-hyper-magenta pl-6">
                  <h4 className="font-heading font-bold text-xl">3. Autonomous Ranking</h4>
                  <p className="text-gray-400 mt-1">The system continuously adapts your digital assets to maintain peak visibility.</p>
              </div>
          </div>
      </div>

      {/* 4. CTA Section */}
      <div className="text-center rounded-lg bg-glass-surface border border-glass-edge p-12">
          <h2 className="font-heading text-3xl font-bold">Ready to Own the Future?</h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-300">Stop competing for keywords. Start owning entire conversations. Let's architect your future search dominance.</p>
          <div className="mt-8">
              <Link href="/contact" className="rounded-md bg-neon-cyan px-8 py-4 font-semibold text-background shadow-lg shadow-neon-cyan/30 transition-transform hover:scale-105">
                  Discuss Your Project
              </Link>
          </div>
      </div>
    </div>
  );
}

