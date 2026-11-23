import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { Menu, X, ArrowRight, ChevronDown, PhoneCall } from 'lucide-react';
import InstagramBrandMark from './InstagramBrandMark';

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { name: 'Product', href: '/products', hasDropdown: true },
    { name: 'Solutions', href: '#solutions', hasDropdown: true },
    { name: 'Agencies', href: '#agencies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#faq' },
  ];

  return (
    <>
      {/* Mailchimp Signature Top Announcement Banner */}
      <div className="bg-[#ffe01b] border-b border-[#e7e5dc] py-2 px-4 text-xs font-semibold text-[#171717] text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#171717] text-[#ffe01b] px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
            AI 2.0
          </span>
          <span>Save up to 50% on ChimpChat with annual billing. Turn every DM into revenue.</span>
          <a 
            href="#pricing" 
            className="hidden sm:inline-flex items-center gap-1 font-bold underline ml-1 hover:text-[#55534b] transition-colors"
          >
            Claim 14-Day Free Access <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Mailchimp-Style Navigation Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#f7f6f1] border-b ${
          scrolled ? 'border-[#e7e5dc] shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="h-20 flex items-center justify-between">
            
            {/* Left: Brand Mascot & Logo */}
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-3 group focus:outline-none">
                <img 
                  src={chimpLogo} 
                  alt="ChimpChat Mascot" 
                  className="w-10 h-10 rounded-xl object-cover border-2 border-[#171717] shadow-mc-hard-sm group-hover:scale-105 transition-transform" 
                />
                <div className="flex items-baseline">
                  <span className="font-mc-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
                    Chimp<span className="italic font-normal">Chat</span>
                  </span>
                </div>
              </a>

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  link.name === 'Product' ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductMenuOpen(true)}
                      onMouseLeave={(event) => {
                        if (!event.currentTarget.contains(document.activeElement)) {
                          setProductMenuOpen(false);
                        }
                      }}
                      onFocus={() => setProductMenuOpen(true)}
                      onBlur={(event) => {
                        if (
                          !(event.relatedTarget instanceof Node) ||
                          !event.currentTarget.contains(event.relatedTarget)
                        ) {
                          setProductMenuOpen(false);
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                          event.preventDefault();
                          event.currentTarget.querySelector<HTMLAnchorElement>('[aria-controls="product-menu"]')?.focus();
                          setProductMenuOpen(false);
                        }
                      }}
                    >
                      <a
                        href={link.href}
                        aria-expanded={productMenuOpen}
                        aria-controls="product-menu"
                        onClick={() => setProductMenuOpen(false)}
                        className="px-3.5 py-2 text-sm font-semibold text-[#171717] hover:text-[#55534b] rounded-lg transition-colors flex items-center gap-1"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#77756e] mt-0.5 transition-transform duration-200 ${productMenuOpen ? 'rotate-180' : ''}`} />
                      </a>

                      <div
                        id="product-menu"
                        aria-hidden={!productMenuOpen}
                        className={`absolute left-0 top-full z-50 w-[min(48rem,calc(100vw_-_2rem))] pt-3 transition-all duration-200 ease-out ${
                          productMenuOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-3 rounded-[28px] border border-[#e7e5dc] bg-white p-3 shadow-[0_24px_70px_rgba(23,23,23,0.18)]">
                          <a
                            href="/products"
                            onClick={() => setProductMenuOpen(false)}
                            className="group/instagram relative overflow-hidden rounded-[22px] bg-[#f7f6f1] p-5 transition-colors hover:bg-[#f7f6f1]"
                          >
                            <div className="mb-7 flex items-center justify-between">
                              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#77756e]">
                                Built for creators
                              </span>
                              <span className="rounded-full border border-[#e7e5dc] bg-white px-2.5 py-1 text-[10px] font-bold text-[#77756e]">
                                Instagram
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <InstagramBrandMark className="h-12 w-12 shadow-lg transition-transform duration-300 group-hover/instagram:-rotate-6 group-hover/instagram:scale-110" iconClassName="h-6 w-6" />
                              <span>
                                <span className="block text-lg font-bold tracking-tight text-[#171717]">
                                  Instagram automation
                                </span>
                                <span className="mt-1 block text-sm leading-relaxed text-[#55534b]">
                                  Turn Reels, comments and Stories into conversations that convert.
                                </span>
                              </span>
                            </div>
                            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#171717]">
                              Explore the product
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/instagram:translate-x-1" />
                            </span>
                            <span className="product-menu-orbit pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full border border-[#e7e5dc]" />
                          </a>

                          <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#171717] p-5 text-white">
                            <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#f7f6f1] blur-3xl" />
                            <div className="relative">
                              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ffffff]">
                                One smart flow
                              </span>
                              <p className="mt-2 text-xl font-bold leading-tight">
                                From comment<br />to checkout.
                              </p>
                            </div>
                            <div className="relative space-y-2">
                              <div className="flex items-center gap-2 rounded-xl border border-[#e7e5dc] bg-[#ffffff] px-3 py-2.5 text-xs">
                                <InstagramBrandMark className="h-6 w-6 rounded-lg" iconClassName="h-3.5 w-3.5" />
                                <span className="text-[#ffffff]">“Link please!” on your Reel</span>
                              </div>
                              <div className="ml-7 h-3 border-l border-dashed border-[#e7e5dc]" />
                              <div className="flex items-center justify-between rounded-xl bg-[#ffe01b] px-3 py-2.5 text-xs font-bold text-[#171717]">
                                <span>Product link sent in DM</span>
                                <span className="h-2 w-2 rounded-full bg-[#315d3b] animate-pulse" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-3.5 py-2 text-sm font-semibold text-[#171717] hover:text-[#55534b] rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 text-[#77756e] mt-0.5" />
                      )}
                      {link.badge && (
                        <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-[#ffe01b] border border-[#171717] text-[#171717] ml-1">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Right: Contact, Log In, and Signature Mailchimp Pill CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:18003155939"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#55534b] hover:text-[#171717] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#55534b]" />
                <span>Sales: +1 (800) 315-5939</span>
              </a>

              <a
                href="#login"
                className="text-sm font-bold text-[#171717] hover:text-[#55534b] transition-colors px-2 py-1"
              >
                Log In
              </a>

              <a
                href="#pricing"
                className="mc-btn-primary mc-btn-signup px-6 py-2.5 text-sm shadow-mc-hard-sm hover:shadow-mc-hard"
              >
                <span>Sign Up Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#pricing"
                className="mc-btn-primary mc-btn-signup px-4 py-1.5 text-xs shadow-mc-hard-sm"
              >
                Sign Up
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#171717] hover:bg-[#f7f6f1] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#e7e5dc] bg-[#ffffff] px-5 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-semibold text-[#171717] hover:text-[#55534b]"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#ffe01b] border border-[#171717] text-[#171717]">
                        {link.badge}
                      </span>
                    )}
                  </a>
                  {link.name === 'Product' && (
                    <a
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="ml-3 flex items-center gap-2 rounded-xl bg-[#f7f6f1] px-3 py-2.5 text-sm font-semibold text-[#171717]"
                    >
                      <InstagramBrandMark className="h-8 w-8 rounded-xl" iconClassName="h-4 w-4" />
                      Instagram automation
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e7e5dc] flex flex-col gap-3">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-[#171717] font-bold text-sm"
              >
                Log In
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mc-btn-primary py-3 text-sm shadow-mc-hard-sm"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
