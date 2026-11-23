import artisanPhoto from '../assets/story-artisan.jpg';
import { 
  Instagram, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';

export default function SocialProof() {
  const supportedChannels = [
    {
      id: 'instagram',
      name: 'Instagram',
      subtitle: 'Reels, Stories & DMs',
      icon: Instagram,
      iconColor: 'text-white',
      iconBg: 'instagram-brand-mark',
      topAccent: 'bg-[#ffe01b]',
      badge: 'Meta Official API',
      badgeColor: 'bg-[#ffe01b] text-[#171717] border-[#171717]',
      metric: '3.4x Higher Conversion',
      microMockup: {
        trigger: 'Reel Comment: "LINK & PRICE"',
        action: 'Sent in 0.8s: Product Card + 20% Off'
      },
      features: [
        'Turn Reel & Post comments into direct checkout links',
        'Auto-reply to Story mentions with VIP discount codes',
        'Live in-DM catalog browsing synced with Shopify',
        'Official Meta Graph API (100% zero shadowbans)'
      ]
    }
  ];

  return (
    <section id="solutions" className="relative py-20 bg-[#ffffff] border-t border-b border-[#e7e5dc] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Partner Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-[#e7e5dc] text-center sm:text-left">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <div className="w-10 h-10 rounded-xl bg-[#ffe01b] border-2 border-[#171717] flex items-center justify-center text-[#171717] shadow-mc-hard-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#171717]">Official Meta Graph API Partner</p>
              <p className="text-[11px] text-[#55534b]">Zero shadowbans • Built for Instagram developer terms of service</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#55534b] mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#315d3b]" /> 12,000+ Active Brands
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#315d3b]" /> 150M+ Social DMs Automated
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#315d3b]" /> 99.98% Uptime SLA
            </span>
          </div>
        </div>

        {/* Dedicated Instagram Spotlight Grid */}
        <div className="mt-14 pt-2">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="font-mc-serif text-2xl sm:text-3xl font-normal text-[#171717]">
              Built exclusively for <em className="italic underline decoration-[#ffe01b] decoration-4 underline-offset-4">Instagram</em>
            </h3>
            <p className="text-sm text-[#55534b]">
              100% official Instagram API integration. We focus deeply on Reels, Stories, posts, comments, and DMs.
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-md mx-auto gap-6">
            {supportedChannels.map((channel, idx) => {
              const ChannelIcon = channel.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#ffffff] rounded-3xl border-2 border-[#171717] shadow-mc-hard-sm hover:shadow-mc-hard hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Top Colored Brand Bar */}
                  <div className={`h-2.5 w-full ${channel.topAccent}`} />

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Brand Icon & Official API Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${channel.iconBg} border border-[#171717] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                          <ChannelIcon className={`w-6 h-6 ${channel.iconColor}`} />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${channel.badgeColor}`}>
                          {channel.badge}
                        </span>
                      </div>

                      {/* Channel Titles */}
                      <div>
                        <h4 className="font-mc-serif text-2xl font-bold text-[#171717]">
                          {channel.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#77756e] mt-0.5 mb-3">
                          {channel.subtitle}
                        </p>
                      </div>

                      {/* Performance Metric Pill */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f7f6f1] border border-[#e7e5dc] text-xs font-black text-[#171717] mb-4">
                        <Sparkles className="w-3 h-3 text-[#55534b]" />
                        <span>{channel.metric}</span>
                      </div>

                      {/* Simulated In-Chat Live Trigger Micro-Box */}
                      <div className="p-3 rounded-2xl bg-[#f7f6f1] border border-[#e7e5dc] space-y-1.5 mb-4 text-left">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#77756e]">
                          <span>Real Flow Preview</span>
                          <span className="text-[#315d3b] font-black flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#315d3b] animate-pulse" />
                            Live
                          </span>
                        </div>
                        <div className="bg-[#ffffff] p-2 rounded-xl border border-[#e7e5dc] shadow-2xs">
                          <p className="text-[10px] font-bold text-[#77756e] uppercase">Trigger Event:</p>
                          <p className="text-[11px] font-bold text-[#171717] truncate">
                            {channel.microMockup.trigger}
                          </p>
                        </div>
                        <div className="bg-[#edf5eb] p-2 rounded-xl border border-[#e7e5dc]">
                          <p className="text-[10px] font-bold text-[#315d3b] uppercase">ChimpChat Auto-Reply:</p>
                          <p className="text-[11px] font-semibold text-[#315d3b] truncate">
                            {channel.microMockup.action}
                          </p>
                        </div>
                      </div>

                      {/* Feature Bullet List */}
                      <ul className="space-y-2 text-xs text-[#55534b]">
                        {channel.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#edf5eb] border border-[#e7e5dc] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#315d3b] stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer: Active Status and Action Link */}
                    <div className="mt-6 pt-4 border-t border-[#e7e5dc] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#55534b]">
                        <span className="w-2 h-2 rounded-full bg-[#315d3b] animate-pulse" />
                        <span>Active 24/7</span>
                      </div>
                      <a
                        href="#product"
                        className="text-xs font-bold text-[#171717] group-hover:text-[#55534b] group-hover:underline flex items-center gap-1 transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Customer Spotlight Story (Marcus Archer) */}
        <div className="mt-16 bg-[#f7f6f1] rounded-3xl p-6 sm:p-10 border-2 border-[#171717] shadow-mc-hard-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Authentic Merchant Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#171717] shadow-mc-hard">
                <img 
                  src={artisanPhoto} 
                  alt="Marcus Archer in his coffee roastery checking ChimpChat orders" 
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#ffe01b] border-2 border-[#171717] px-3.5 py-1 rounded-full text-xs font-black text-[#171717] shadow-mc-hard-sm flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Verified Brand Story</span>
              </div>
            </div>

            {/* Right: Big Editorial Quote & Metric */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#171717] px-3 py-1 rounded-full text-xs font-bold text-[#171717]">
                <Quote className="w-3.5 h-3.5 text-[#55534b]" />
                <span>Customer Success Spotlight</span>
              </div>

              <blockquote className="font-mc-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                "With ChimpChat, our Instagram DMs get answered in <em className="italic underline decoration-[#ffe01b] decoration-4 font-normal">under 2 seconds</em>. Our weekend coffee bean drops now sell out in minutes without answering the same question 50 times."
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#e7e5dc]">
                <div>
                  <p className="font-bold text-[#171717] text-sm">Marcus Archer</p>
                  <p className="text-xs text-[#55534b]">Founder, Archer Artisanal Roasters</p>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="font-mc-serif text-2xl font-bold text-[#171717]">3.8x</p>
                    <p className="text-[10px] uppercase font-bold text-[#77756e]">Drop Conversion</p>
                  </div>
                  <div>
                    <p className="font-mc-serif text-2xl font-bold text-[#315d3b]">12 hrs</p>
                    <p className="text-[10px] uppercase font-bold text-[#77756e]">Saved / Week</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
