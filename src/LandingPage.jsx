import { useState } from 'react'
import vrHero from './assets/vr-hero.webp'
import GlareHover from './GlareHover'
import LiquidEther from './LiquidEther'

export default function LandingPage() {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <div
      className="min-h-[100dvh] md:h-[100dvh] w-full overflow-x-hidden md:overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--c-bg) 0%, oklch(13% 0.025 232) 60%, oklch(12% 0.03 240) 100%)' }}
    >
      {/* Liquid fluid background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#3B82F6', '#06B6D4', '#22D3EE']}
          mouseForce={20}
          cursorSize={65}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.5}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
          style={{ opacity: 0.55 }}
        />
      </div>
      {/* All page content sits above the fluid bg */}
      <div style={{ position: 'relative', zIndex: 1 }} className="md:h-full md:flex md:flex-col">
      {/* Skip-to-content — visible on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:text-black"
        style={{ background: 'var(--c-brand)' }}
      >
        Skip to content
      </a>

      {/* ── Main content ──────────────────────────────────── */}
      <main id="main-content" className="md:flex-1 md:flex md:flex-col md:justify-center md:min-h-0 md:overflow-hidden">

        {/* ── Hero ──────────────────────────────────────── */}
        <section
          id="home"
          className="relative w-full px-6 md:px-10 overflow-hidden"
          aria-label="Hero"
        >
          {/* Atmospheric glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 55% 65% at 82% 40%, rgba(168,85,247,0.18) 0%, rgba(6,182,212,0.12) 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%]">

            {/* Left column — text */}
            <div
              className="hero-text-col flex flex-col justify-center py-14 md:py-8 md:pr-8"
              style={{ background: 'radial-gradient(ellipse 80% 120% at 30% 50%, rgba(7,12,20,0.6) 0%, transparent 100%)' }}
            >

              {/* Eyebrow */}
              <p
                className="hero-eyebrow text-xs font-semibold tracking-[0.18em] uppercase mb-6 fade-in fade-in-d1"
                style={{ color: 'var(--c-brand)' }}
              >
                Financing &amp; Consulting for Entrepreneurs since 2018
              </p>

              {/* H1 — logo image */}
              <h1 className="hero-title m-0 mb-8 fade-in fade-in-d2" style={{ maxWidth: '560px' }}>
                <img
                  src="/project-blue-adopters.webp"
                  alt="Project Blue Adopters"
                  fetchpriority="high"
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 18px rgba(59,130,246,0.45))',
                  }}
                />
              </h1>

              {/* Tech-mono blurb */}
              <p
                className="hero-blurb font-tech neon-blurb leading-relaxed mb-6 fade-in fade-in-d3"
                style={{
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                  letterSpacing: '0.02em',
                  maxWidth: '52ch',
                }}
              >
                Project Blue is your{' '}
                <span className="neon-highlight">#1 Source</span> for Startups,
                Entrepreneurs, Tech Enthusiasts and Investors to Connect for
                Networking &amp; Funding!
              </p>

              {/* Bullet */}
              <div className="hero-bullet flex items-start gap-3 mb-10 fade-in fade-in-d4">
                <span
                  className="w-2 h-2 rounded-sm flex-shrink-0 mt-1.5"
                  style={{ background: 'linear-gradient(135deg, var(--c-blue), var(--c-brand))' }}
                  aria-hidden="true"
                />
                <span
                  className="text-base font-medium leading-relaxed"
                  style={{ color: 'var(--c-muted)', maxWidth: '46ch' }}
                >
                  We Support Crypto, NFTs, &amp; Web 3.0 Projects, Emerging Tech,
                  Stocks, Real Estate, Startups &amp; IPOs, Crowdfunding, and More!
                </span>
              </div>

              {/* CTA */}
              <div className="fade-in fade-in-d5">
                <GlareHover
                  width="auto"
                  height="auto"
                  background="transparent"
                  borderRadius="9999px"
                  borderColor="transparent"
                  glareColor="#ffffff"
                  glareOpacity={0.45}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={500}
                  style={{ border: 'none', display: 'inline-block' }}
                >
                  <a
                    href="https://tally.so/r/449lXk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full text-white font-bold text-base inline-block no-underline cta-link"
                    style={{
                      background: 'linear-gradient(to right, var(--c-blue), var(--c-brand))',
                      boxShadow: '0 4px 30px rgba(6,182,212,0.45)',
                      transition: 'box-shadow 160ms cubic-bezier(0.23,1,0.32,1), transform 160ms cubic-bezier(0.23,1,0.32,1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 0 8px rgba(59,130,246,0.8), 0 0 24px rgba(59,130,246,0.4)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(6,182,212,0.45)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    onMouseDown={e => {
                      e.currentTarget.style.transform = 'scale(0.97)'
                    }}
                    onMouseUp={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                  >
                    Secure your spot now!
                  </a>
                </GlareHover>
              </div>

              {/* Community proof */}
              <div
                className="hero-proof flex flex-wrap items-center gap-x-5 gap-y-2 mt-12 pt-6 fade-in fade-in-d6"
                style={{ borderTop: '1px solid var(--c-border)' }}
              >
                <span className="text-sm" style={{ color: 'var(--c-muted)' }}>
                  <strong className="text-white font-bold">5,000+</strong> Members
                </span>
                <span className="text-sm" style={{ color: 'var(--c-ink-subtle)' }} aria-hidden="true">·</span>
                <span className="text-sm" style={{ color: 'var(--c-muted)' }}>
                  <strong className="text-white font-bold">300+</strong> Startups
                </span>
                <span className="text-sm" style={{ color: 'var(--c-ink-subtle)' }} aria-hidden="true">·</span>
                <span className="text-sm" style={{ color: 'var(--c-muted)' }}>
                  <strong className="text-white font-bold">$500M+</strong> in Funding Connections
                </span>
              </div>
            </div>

            {/* Right column — hero image */}
            <div
              className="relative overflow-hidden flex items-end justify-center h-64 md:h-[431px] fade-in-right"
              aria-hidden="true"
            >
              {/* Intro video — plays on first load */}
              <video
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnded(true)}
                onError={() => setVideoEnded(true)}
                onStalled={() => setVideoEnded(true)}
                className="absolute bottom-0 h-full w-auto select-none hero-image-fade"
                style={{
                  filter:
                    'drop-shadow(-20px 0 40px rgba(6,182,212,0.45)) drop-shadow(20px 0 40px rgba(236,72,153,0.45))',
                  marginBottom: '25px',
                  marginLeft: '30px',
                  transform: 'translate(-30px, 30px)',
                  opacity: videoEnded ? 0 : 1,
                  transition: 'opacity 0.75s ease-in-out',
                  pointerEvents: 'none',
                }}
              >
                <source src="/vr-hero-intro.webm" type="video/webm" />
                <source src="/vr-hero-intro.mp4" type="video/mp4" />
              </video>
              {/* Hero image — fades in after video ends */}
              <img
                src={vrHero}
                alt="VR headset representing the future of entrepreneurial networking"
                width="613"
                height="407"
                className="absolute bottom-0 h-full w-auto select-none hero-image-fade"
                style={{
                  filter:
                    'drop-shadow(-20px 0 40px rgba(6,182,212,0.45)) drop-shadow(20px 0 40px rgba(236,72,153,0.45))',
                  marginBottom: '25px',
                  marginLeft: '30px',
                  transform: 'translate(-30px, 30px)',
                  opacity: videoEnded ? 1 : 0,
                  transition: 'opacity 0.75s ease-in-out',
                }}
              />
            </div>

          </div>
        </section>

      </main>

      {/* ── Palestine Badge ──────────────────────────────── */}
      <div
        className="fixed top-5 right-5 z-50 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold shadow-lg fade-in fade-in-d6"
        style={{
          background: 'rgba(0,0,0,0.75)',
          border: '1px solid rgba(34,197,94,0.5)',
          color: 'var(--c-success)',
          backdropFilter: 'blur(8px)',
        }}
        aria-label="We Stand With Palestine"
      >
        <span aria-hidden="true">🇵🇸</span>
        <span>We Stand With Palestine</span>
      </div>

      {/* ── Partner Logos Bar ──────────────────────────── */}
      <footer
        className="w-full mt-4 py-5 overflow-hidden fade-in-footer"
        style={{ background: 'rgba(0,0,0,0.35)', borderTop: '1px solid var(--c-border)' }}
        aria-label="Partner organizations"
      >
        <div className="overflow-hidden">
          <div className="animate-marquee" role="list">
            {[0, 1].map((rep) => (
              <div
                key={rep}
                className="flex items-center gap-14 px-10"
                role="presentation"
                aria-hidden={rep === 1 ? 'true' : undefined}
              >
                {/* Transcend Life */}
                <div className="flex items-center gap-2.5 flex-shrink-0" role="listitem">
                  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <circle cx="32" cy="32" r="31" fill="#1a1a1a" stroke="#C9A84C" strokeWidth="0.6"/>
                    <circle cx="32" cy="32" r="27" fill="none" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="2 2"/>
                    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="700" fill="#C9A84C" fontFamily="sans-serif">TL</text>
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-xs" style={{ color: '#C9A84C', letterSpacing: '0.18em' }}>TRANSCEND</span>
                    <span className="font-bold text-xs" style={{ color: '#C9A84C', letterSpacing: '0.18em' }}>LIFE</span>
                  </div>
                </div>

                {/* Revinin */}
                <div className="flex items-center gap-2.5 flex-shrink-0" role="listitem">
                  <svg width="38" height="32" viewBox="0 0 64 54" fill="none" aria-hidden="true">
                    <defs>
                      <radialGradient id={`revGrad${rep}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FF7BAC"/>
                        <stop offset="100%" stopColor="#D84C7A"/>
                      </radialGradient>
                    </defs>
                    <circle cx="32" cy="24" r="20" fill={`url(#revGrad${rep})`}/>
                    <path d="M12 30 Q16 22 24 20 Q30 18 32 18 Q36 18 40 20 Q48 23 52 30 Z" fill="#fff"/>
                    <path d="M23 20 Q28 14 32 14 Q36 14 41 20 Z" fill="#fff" opacity="0.9"/>
                    <ellipse cx="32" cy="30" rx="22" ry="6" fill="#000" opacity="0.7"/>
                    <circle cx="20" cy="29" r="3.5" fill="#222"/>
                    <circle cx="44" cy="29" r="3.5" fill="#222"/>
                  </svg>
                  <span className="font-black text-xl" style={{ color: 'var(--c-white)', textShadow: '0 0 14px rgba(255,107,157,0.55)', letterSpacing: '0.1em' }}>REVININ</span>
                </div>

                {/* EE */}
                <div className="flex items-center flex-shrink-0" role="listitem">
                  <img
                    src="/ee-logo.png"
                    alt="EE"
                    width="40"
                    height="40"
                    loading="lazy"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Akimusalat */}
                <div className="flex items-center flex-shrink-0" role="listitem">
                  <svg width="38" height="38" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <circle cx="32" cy="32" r="31" fill="#D4C5A0"/>
                    <circle cx="32" cy="32" r="26" fill="#1B5E50"/>
                    <rect x="10" y="24" width="44" height="16" rx="1" fill="#1B5E50"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#D4C5A0" fontFamily="Georgia, serif">Akimusalat</text>
                  </svg>
                </div>

                {/* Essencia Capital Enterprises */}
                <div className="flex items-center gap-2.5 flex-shrink-0" role="listitem">
                  <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <text x="1" y="42" fontSize="32" fontWeight="800" fill="#1B5E20" fontFamily="Georgia, serif">E</text>
                    <text x="19" y="42" fontSize="32" fontWeight="800" fill="#1B5E20" fontFamily="Georgia, serif">C</text>
                    <text x="40" y="42" fontSize="32" fontWeight="800" fill="#1B5E20" fontFamily="Georgia, serif">E</text>
                    <path d="M8 18 Q32 6 56 14" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                    <path d="M52 10 L56 14 L52 18" stroke="#C9A84C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="29" y="18" width="6" height="9" fill="#C9A84C" opacity="0.75"/>
                    <rect x="30.5" y="19.5" width="1.2" height="2" fill="#1B5E20"/>
                    <rect x="32.5" y="19.5" width="1.2" height="2" fill="#1B5E20"/>
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-sm" style={{ color: '#1B5E20' }}>Essencia</span>
                    <span className="text-xs italic" style={{ color: '#C9A84C' }}>Capital Enterprises</span>
                  </div>
                </div>

                {/* Luna Elite Designs */}
                <div className="flex items-center gap-2.5 flex-shrink-0" role="listitem">
                  <img
                    src="/luna-elite-new.png"
                    alt="Luna Elite Designs"
                    width="40"
                    height="40"
                    loading="lazy"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-sm tracking-wide" style={{ color: 'var(--c-muted)' }}>Luna Elite</span>
                    <span className="font-semibold text-xs tracking-wide" style={{ color: 'var(--c-ink-subtle)' }}>Designs</span>
                  </div>
                </div>

                {/* Separator */}
                <div
                  className="w-px h-6 flex-shrink-0"
                  style={{ background: 'var(--c-border)' }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
      </div>{/* end content z-index wrapper */}
    </div>
  )
}
