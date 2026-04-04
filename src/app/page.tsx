const collections = [
  { name: "Men's Collection", desc: "Modern menswear combining premium fabrics with smart technology — from formal suits to casual tech-wear.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "Women's Collection", desc: "Elegant and innovative womenswear featuring tech-integrated designs, sustainable materials, and timeless style.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { name: "Smart Wearables", desc: "Tech-integrated clothing with built-in health monitoring, temperature control, and connectivity features.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Accessories", desc: "Premium bags, smart watches, jewelry, and eyewear that blend fashion-forward design with cutting-edge technology.", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" },
  { name: "Sportswear", desc: "Performance athletic wear with moisture-wicking fabrics, smart compression technology, and adaptive fit systems.", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Kids Collection", desc: "Fun, durable, and safe children's clothing with playful designs and parent-friendly smart features.", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold text-accent">Wear</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-pink-400 transition-colors">sja.com</a>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-pink-400 text-sm font-mono mb-4 tracking-wider uppercase">Fashion × Technology</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Fashion Meets<br /><span className="text-pink-400">Technology</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">Smart wearables, tech-integrated clothing, and a fashion line that blends timeless style with cutting-edge innovation.</p>
          <a href="#collections" className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Explore Collections</a>
        </div>
      </section>
      <section id="collections" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-pink-400 text-sm font-mono mb-3 tracking-wider uppercase">Our Collections</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Style <span className="text-pink-400">Redefined</span></h2>
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
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-pink-400">Vision</span></h2>
          <p className="text-foreground/60 leading-relaxed">SJA Wear is where fashion meets the future. We believe clothing should be more than fabric — it should be intelligent, sustainable, and expressive. From smart wearables to premium accessories, we are crafting the wardrobe of tomorrow.</p>
        </div>
      </section>
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-pink-400 hover:underline">SJA Ecosystem</a></p>
          <p className="text-foreground/30 text-xs mt-2">&copy; 2025 SJA Wear. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
