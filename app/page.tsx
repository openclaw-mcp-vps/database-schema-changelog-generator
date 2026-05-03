export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">DBChangelog</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">For Engineering Teams</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Auto-generate human-readable<br />
          <span className="text-[#58a6ff]">database migration changelogs</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Paste your SQL migrations or connect your database. Get clear, plain-English changelogs your whole team can understand — instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-md font-semibold text-base hover:bg-[#79b8ff] transition-colors">Start for $25/mo</a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-md font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">Learn more</a>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Parse Any Migration', desc: 'Supports SQL, Flyway, Liquibase, Alembic, ActiveRecord, and raw DDL files.' },
            { title: 'AI-Powered Summaries', desc: 'Explains what changed, what was added or removed, and why it matters to your product.' },
            { title: 'Share With Your Team', desc: 'Export changelogs as Markdown, Notion pages, or Slack messages in one click.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, flat pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. No surprises.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited migration analyses',
              'AI-generated plain-English changelogs',
              'Supports 6+ migration frameworks',
              'Markdown, Notion & Slack export',
              'Team sharing & history',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-md font-semibold hover:bg-[#79b8ff] transition-colors text-center">Subscribe Now</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What migration formats are supported?',
              a: 'DBChangelog supports raw SQL DDL, Flyway, Liquibase, Alembic (Python), ActiveRecord (Rails), and TypeORM migrations. More formats are added regularly.'
            },
            {
              q: 'Does my database schema leave my machine?',
              a: 'You can paste migration files directly — no database connection required. If you choose to connect a database, only schema metadata (no row data) is transmitted over an encrypted connection.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} DBChangelog. Built for engineering teams.</p>
      </footer>
    </main>
  )
}
