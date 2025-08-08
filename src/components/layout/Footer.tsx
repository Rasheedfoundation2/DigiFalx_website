// src/components/layout/Footer.tsx
import TimeWidget from './TimeWidget';

export default function Footer() {
  return (
    <footer className="border-t border-glass-edge bg-background/30">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} DigiFalx. All rights reserved.
        </p>
        <TimeWidget />
      </div>
    </footer>
  );
}