"use client";

import { useState } from "react";

const collections = [
  { name: "Men's", desc: "Premium tees, hoodies, and joggers built for everyday confidence.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "Women's", desc: "Modern streetwear and essentials designed with intention and edge.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { name: "Fitness Wear", desc: "Performance gym wear — leggings, compression tops, and training gear that moves with you.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Modest Fashion", desc: "Thoughtfully designed modest pieces — full coverage, full style, zero compromise.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "Accessories", desc: "Caps, tote bags, and extras to complete the look.", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold text-accent">Wear</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">Coming Soon</span>
            <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-pink-400 transition-colors">sja.com</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-mono bg-pink-500/10 text-pink-400 px-4 py-1.5 rounded-full border border-pink-500/20 mb-6">Coming Soon</span>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Wear It.<br /><span className="text-pink-400">Mean It.</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-10">Premium streetwear, fitness gear, and modest fashion — printed on demand, designed with purpose. A fashion brand by SJA.</p>

          {/* Waitlist */}
          {submitted ? (
            <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 px-6 py-3 rounded-full border border-pink-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 bg-surface border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-pink-500/50 transition-colors"
              />
              <button type="submit" className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors text-sm whitespace-nowrap">Join Waitlist</button>
            </form>
          )}
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-pink-400 text-sm font-mono mb-3 tracking-wider uppercase">Collections</p>
            <h2 className="text-4xl sm:text-5xl font-bold">What We&apos;re <span className="text-pink-400">Building</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((s) => (
              <div key={s.name} className="rounded-xl bg-surface border border-border hover:border-pink-400/30 p-6 transition-all hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-pink-400/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Coming Soon */}
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-surface border border-border p-10 sm:p-14">
            <div className="w-14 h-14 rounded-2xl bg-pink-400/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Shop <span className="text-pink-400">Coming Soon</span></h2>
            <p className="text-foreground/60 leading-relaxed max-w-xl mx-auto mb-2">Our online store is being built on Shopify with print-on-demand fulfilment via Printful. Every piece made to order — no waste, no overstock.</p>
            <p className="text-foreground/40 text-sm">Join the waitlist above to get early access when we launch.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">The <span className="text-pink-400">Brand</span></h2>
          <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto">SJA Wear is a fashion brand under the SJA conglomerate. We make real clothing for real people — premium quality, clean designs, and collections that cover streetwear, gym, and modest fashion. No gimmicks. Just well-made apparel, printed on demand.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">SJA Wear — Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-pink-400 hover:underline">SJA</a> family.</p>
          <p className="text-foreground/30 text-xs mt-2">&copy; {new Date().getFullYear()} SJA Wear. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
