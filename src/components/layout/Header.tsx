// src/components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-glass-edge bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-heading text-2xl font-bold">
          Digi<span className="text-neon-cyan">Falx</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/services" className="transition-colors hover:text-neon-cyan">Services</Link>
          <Link href="/tools" className="transition-colors hover:text-neon-cyan">Tools</Link>
          <Link href="/portfolio" className="transition-colors hover:text-neon-cyan">Portfolio</Link>
          <Link href="/blog" className="transition-colors hover:text-neon-cyan">Blog</Link>
          <Link href="/contact" className="transition-colors hover:text-neon-cyan">Contact</Link>
        </nav>
        <div className="h-8 w-8 rounded-full bg-glass-surface border border-glass-edge"></div>
      </div>
    </header>
  );
}