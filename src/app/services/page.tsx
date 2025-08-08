# This is a Python block to display the TSX code for the Services Hub page.
# The user will copy this into their `src/app/services/page.tsx` file.
services_hub_code = """
import Link from 'next/link';

// You can create a proper icon component later. For now, a simple placeholder.
const ProtocolIcon = () => (
    <div className="mb-4 h-12 w-12 rounded-lg bg-neon-cyan/20 text-neon-cyan flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-4 4 4 4 4-4Z"/><path d="M20 12h-8"/><path d="M12 2v4"/><path d="M12 18v4"/></svg>
    </div>
);

// A reusable card for each service protocol
const ProtocolCard = ({ href, title, children }: { href: string; title: string; children: React.ReactNode; }) => (
    <Link href={href} className="block rounded-lg border border-glass-edge bg-glass-surface p-8 backdrop-blur-lg transition-all hover:-translate-y-2 hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/10">
        <ProtocolIcon />
        <h3 className="font-heading text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-300">{children}</p>
        <div className="mt-6 font-semibold text-neon-cyan">
            Initiate Protocol &rarr;
        </div>
    </Link>
);


export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero Section for Services */}
      <section className="relative py-24 md:py-32 text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold md:text-6xl">Our Protocols</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            We don't offer services; we initiate growth protocols. Each is a fusion of human strategic foresight and autonomous AI execution.
          </p>
        </div>
      </section>

      {/* 2. Grid of Service Protocols */}
      <section className="py-16">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* We will create a page for this one in the next step */}
                <ProtocolCard href="/services/predictive-seo" title="Predictive SEO">
                    Go beyond keywords. We use predictive analytics and AI content automation to secure future rankings, today.
                </ProtocolCard>
                
                <ProtocolCard href="/services/generative-marketing" title="Generative Marketing">
                    Create hyper-personalized ad campaigns, social content, and email funnels at impossible scale with creative AI.
                </ProtocolCard>
                
                <ProtocolCard href="/services/data-intelligence" title="Data Intelligence">
                    Our systems process market data in real-time, converting noise into actionable growth strategies and quantifiable intelligence.
                </ProtocolCard>
              </div>
          </div>
      </section>
    </>
  );
}
"""
print(services_hub_code)
