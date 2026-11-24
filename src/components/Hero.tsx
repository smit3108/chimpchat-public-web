import chimpLogo from '../assets/chimpchat-logo.jpg';
import heroPhoto from '../assets/hero-founder.jpg';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Heart,
  TrendingUp,
  Clock,
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';
import InstagramBrandMark from './InstagramBrandMark';

type FlowType = 'reel-to-sale';

export default function Hero() {
  const activeFlow: FlowType = 'reel-to-sale';

  return (
    <section id="product" className="relative pt-8 pb-20 md:pt-14 md:pb-28 bg-[#f7f6f1] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mailchimp Signature Split Layout: Left Copy, Right Authentic Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Mailchimp Signature Editorial Serif Heading */}
            <h1 className="font-mc-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#171717] leading-[1.08] tracking-tight">
              Turn social conversations into<br className="hidden sm:inline" />
              {' '}revenue <em className="italic font-normal underline decoration-[#ffe01b] decoration-[6px] underline-offset-8">that connects</em>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-lg sm:text-xl text-[#55534b] max-w-xl leading-relaxed font-normal">
              Never lose another customer to a slow reply. ChimpChat automatically answers inquiries in seconds, turns post comments into instant checkouts, and scales your business 24/7.
            </p>

            {/* Instagram Platform Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#77756e] mr-1">
                Built For:
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff] border border-[#e7e5dc] text-xs font-bold text-[#171717] shadow-xs">
                <InstagramBrandMark className="h-4 w-4" iconClassName="h-3 w-3" />
                Instagram
              </span>
            </div>

            {/* Mailchimp Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto mc-btn-primary px-8 py-4 text-base shadow-mc-hard-sm hover:shadow-mc-hard font-bold"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solutions"
                className="w-full sm:w-auto mc-btn-outline px-8 py-4 text-base font-bold bg-[#ffffff]"
              >
                <span>Find the Right Plan</span>
              </a>
            </div>

            {/* Mailchimp Social Proof Rating Block */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#171717]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#ffe01b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffe01b] text-[#171717]" />
                  ))}
                </div>
                <span className="font-bold text-sm ml-1">4.9 / 5</span>
              </div>
              <span className="text-[#55534b]">Based on <b>12,000+</b> reviews across:</span>
              <div className="flex items-center gap-4 font-bold text-[#55534b]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#8d2924]" /> Capterra
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#55534b]" /> TrustRadius
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#8d2924]" /> G2
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Mailchimp Photo Card with Floating Stickers */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#171717] shadow-mc-hard-lg bg-[#ffffff] group">
              <img 
                src={heroPhoto} 
                alt="Joyful boutique founder Elena Vance checking social orders on ChimpChat" 
                className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#ffffff] backdrop-blur-md border border-[#e7e5dc] p-3 rounded-2xl shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={chimpLogo} alt="" className="w-7 h-7 rounded-full border border-[#171717]" />
                  <div>
                    <p className="text-xs font-bold text-[#171717]">Elena Vance • Founder, Studio Sol</p>
                    <p className="text-[10px] text-[#55534b]">Automating 4,500+ monthly Instagram inquiries & sales</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#ffe01b] text-[#171717] border border-[#171717] px-2 py-0.5 rounded-full">
                  +240% Sales
                </span>
              </div>
            </div>

            {/* Floating Mailchimp Sticker 1: Comment Trigger (Top Left) */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#ffffff] border-2 border-[#171717] rounded-2xl p-3 shadow-mc-hard animate-float hidden sm:flex items-center gap-2.5 max-w-[240px]">
              <InstagramBrandMark className="h-8 w-8 rounded-xl" iconClassName="h-4 w-4" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-[#77756e]">Reel Comment</p>
                <p className="text-xs font-bold text-[#171717] truncate">"Send me the link! 😍"</p>
              </div>
            </div>

            {/* Floating Mailchimp Sticker 2: Revenue Recorded (Right Bottom) */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#ffe01b] border-2 border-[#171717] rounded-2xl p-3 shadow-mc-hard hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#171717] text-[#ffe01b] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-[#171717]">+$79.20 Captured</p>
                <p className="text-[10px] font-bold text-[#55534b]">Auto-DM Checkout in 0.8s</p>
              </div>
            </div>

          </div>

        </div>

        {/* HUMAN-DESIGNED PRODUCT SHOWCASE: Visual Automation Journey & Live Smartphone Output */}
        <div className="mt-24 pt-16 border-t border-[#e7e5dc] max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f7f6f1] border border-[#e7e5dc] text-xs font-bold text-[#171717]">
              <Layers className="w-3.5 h-3.5 text-[#55534b]" />
              <span>VISUAL SOCIAL AUTOMATION</span>
            </div>

            <h2 className="font-mc-serif text-3xl sm:text-5xl font-normal text-[#171717] leading-tight">
              Automate customer journeys without losing the <em className="italic underline decoration-[#ffe01b] decoration-4 underline-offset-4">personal touch</em>
            </h2>

            <p className="text-base text-[#55534b] font-normal max-w-2xl mx-auto">
              Build no-code Instagram flows that turn comments and story mentions into instant conversions.
            </p>
          </div>

          {/* Interactive Flow Presets Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border flex items-center gap-2 bg-[#ffe01b] text-[#171717] border-[#171717] shadow-mc-hard-sm">
              <InstagramBrandMark className="h-5 w-5" iconClassName="h-3.5 w-3.5" />
              <span>Instagram: Reel & Post Comments</span>
            </div>
          </div>

          {/* Main Visual Showcase: Left Flow Builder Canvas, Right Mobile Phone Preview */}
          <div className="product-showcase-panel bg-[#ffffff] border-2 border-[#171717] rounded-3xl p-6 sm:p-10 shadow-mc-hard-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): The Visual Automation Journey Canvas */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#e7e5dc]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#315d3b]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#55534b]">
                      Visual Workflow Editor
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#77756e] bg-[#f7f6f1] px-2.5 py-0.5 rounded-full border border-[#e7e5dc]">
                    Auto-trigger: &lt; 2 seconds
                  </span>
                </div>

                {/* Step 1: Trigger Node */}
                <div className="product-workflow-node product-workflow-trigger bg-[#f7f6f1] p-4 sm:p-5 rounded-2xl border-2 border-[#171717] shadow-sm relative group hover:border-[#55534b] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#8d2924] uppercase tracking-wider flex items-center gap-1.5">
                      <InstagramBrandMark className="h-4 w-4" iconClassName="h-3 w-3" />
                      Step 1 • Audience Trigger
                    </span>
                    <span className="text-[10px] font-bold bg-[#ffe01b] text-[#171717] border border-[#171717] px-2 py-0.5 rounded-full">
                      Live Trigger
                    </span>
                  </div>

                  {activeFlow === 'reel-to-sale' && (
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#171717]">When someone comments on your Instagram Reel or post</p>
                      <p className="text-xs text-[#55534b] font-mono bg-[#ffffff] p-2 rounded-lg border border-[#e7e5dc]">
                        Condition: Comment contains <span className="font-bold text-[#171717]">"PRICE"</span>, <span className="font-bold text-[#171717]">"BUY"</span>, or <span className="font-bold text-[#171717]">"LINK"</span>
                      </p>
                    </div>
                  )}

                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-[#f7f6f1] relative flex items-center justify-center">
                    <span className="product-flow-dot absolute w-2 h-2 rounded-full bg-[#ffe01b] border border-[#171717]" />
                  </div>
                </div>

                {/* Step 2: Intelligent Action Node */}
                <div className="product-workflow-node product-workflow-action bg-[#ffffff] p-4 sm:p-5 rounded-2xl border-2 border-[#171717] shadow-mc-hard-sm relative hover:border-[#315d3b] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#55534b] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Step 2 • ChimpChat AI Response
                    </span>
                    <span className="text-[10px] font-bold bg-[#315d3b] text-white px-2 py-0.5 rounded-full">
                      Instant Delivery
                    </span>
                  </div>

                  {activeFlow === 'reel-to-sale' && (
                    <div className="space-y-1.5">
                      <p className="text-sm font-bold text-[#171717]">Send a direct Instagram message with a personalized checkout card</p>
                      <p className="text-xs text-[#55534b]">
                        Auto-applies 20% coupon code <span className="font-mono font-bold text-[#171717]">CHIMP20</span> and syncs live stock from your Shopify catalog.
                      </p>
                    </div>
                  )}

                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-[#f7f6f1] relative flex items-center justify-center">
                    <span className="product-flow-dot absolute w-2 h-2 rounded-full bg-[#ffe01b] border border-[#171717]" />
                  </div>
                </div>

                {/* Step 3: Business Outcome Node */}
                <div className="product-workflow-node product-workflow-outcome bg-[#f7f6f1] p-4 sm:p-5 rounded-2xl border-2 border-[#171717] shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#315d3b] uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" /> Step 3 • Tracked Growth Outcome
                    </span>
                    <span className="text-xs font-black font-mc-serif text-[#171717]">
                      "+$79.20 Revenue"
                    </span>
                  </div>

                  <p className="text-xs text-[#55534b] font-medium">
                    Customer completes 1-click checkout on your store. Order attribution recorded.
                  </p>
                </div>

              </div>

              {/* Right Column (5 cols): Photorealistic Mobile Screen */}
              <div className="lg:col-span-5 flex justify-center">
                
                {/* Modern Smartphone Frame */}
                <div className="product-phone-preview w-full max-w-[310px] sm:max-w-[330px] rounded-[36px] bg-[#ffffff] border-[3px] border-[#171717] shadow-mc-hard-lg p-3.5 relative overflow-hidden">
                  
                  {/* Smartphone Top Speaker & Camera Island */}
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-4 bg-[#171717] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#171717] ml-auto mr-2" />
                    </div>
                  </div>

                  {/* Channel Direct Message Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#e7e5dc] mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img src={chimpLogo} alt="" className="w-8 h-8 rounded-full border border-[#171717] object-cover" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#315d3b] border-2 border-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-bold text-[#171717]">yourbrand</p>
                          <span className="w-3 h-3 rounded-full bg-[#55534b] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                        </div>
                        <p className="text-[10px] text-[#77756e]">Active now</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-[#ffe01b] text-[#171717] border border-[#171717] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <InstagramBrandMark className="h-4 w-4" iconClassName="h-3 w-3" /> Instagram
                    </span>
                  </div>

                  {/* Conversation Feed */}
                  <div className="space-y-3 min-h-[280px] text-xs">
                    
                    {/* Context Tag */}
                    <div className="text-center">
                      <span className="text-[9px] font-semibold text-[#77756e] uppercase tracking-wider bg-[#f7f6f1] px-2 py-1 rounded-full">
                        In reply to your Reel
                      </span>
                    </div>

                    {/* Customer Message Bubble (Right) */}
                    <div className="flex justify-end">
                      <div className="bg-[#171717] text-white px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed font-medium">
                        Love this jacket! What is the price and how do I buy? 🔥
                      </div>
                    </div>

                    {/* Brand / ChimpChat Automated Reply (Left) */}
                    <div className="flex items-start gap-1.5">
                      <img src={chimpLogo} alt="" className="w-5 h-5 rounded-full border border-[#171717] flex-shrink-0 mt-1" />
                      <div className="bg-[#f7f6f1] text-[#171717] p-3 rounded-2xl rounded-tl-sm border border-[#e7e5dc] max-w-[88%] leading-relaxed space-y-2">
                        
                        {activeFlow === 'reel-to-sale' && (
                          <>
                            <p className="font-medium">
                              Hey Emma! 👋 Saw your comment on our new drop. Here is your private 20% discount code + direct checkout link:
                            </p>
                            
                            {/* Product Card Inside Instagram DM */}
                            <div className="bg-[#ffffff] border border-[#e7e5dc] rounded-xl p-2.5 space-y-1.5 shadow-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#171717] text-[11px]">Cyber Utility Jacket</span>
                                <span className="font-bold text-[#171717] text-xs">$79.20</span>
                              </div>
                              <p className="text-[10px] text-[#55534b]">
                                Coupon <span className="font-mono font-bold bg-[#ffe01b] px-1 rounded text-[#171717]">CHIMP20</span> applied
                              </p>
                              <a
                                href="#checkout"
                                className="w-full py-1.5 bg-[#171717] text-[#ffe01b] text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-[#171717] transition-colors"
                              >
                                <span>Shop Now on Store</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </>
                        )}

                      </div>
                    </div>

                    {/* Customer Reaction Confirmation (Right) */}
                    <div className="flex justify-end">
                      <div className="bg-[#ffe01b] border border-[#171717] text-[#171717] font-bold px-3 py-1.5 rounded-full text-[11px] flex items-center gap-1 shadow-sm">
                        {activeFlow === 'reel-to-sale' && (
                          <>
                            <span>Just ordered! Thank you 🙏</span>
                            <Heart className="w-3 h-3 fill-[#8d2924] text-[#8d2924]" />
                          </>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Smartphone Bottom Home Bar */}
                  <div className="flex justify-center pt-3 pb-1 border-t border-[#e7e5dc] mt-3">
                    <div className="w-28 h-1 bg-[#f7f6f1] rounded-full" />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Three Mailchimp-Style Bottom Value Pillars (Replaces Generic Isolated Number Boxes) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#ffffff] p-6 rounded-2xl border border-[#e7e5dc] shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#ffe01b] border border-[#171717] flex items-center justify-center text-[#171717] flex-shrink-0 shadow-mc-hard-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#171717] text-sm">2-Second Response Time</h4>
                <p className="text-xs text-[#55534b] mt-1 leading-relaxed">
                  Respond while customer intent is hot. Turn impulse comments into immediate checkouts before they leave your page.
                </p>
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl border border-[#e7e5dc] shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#55534b] border border-[#171717] flex items-center justify-center text-white flex-shrink-0 shadow-mc-hard-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#171717] text-sm">3.4x Higher Conversion</h4>
                <p className="text-xs text-[#55534b] mt-1 leading-relaxed">
                  Direct links and coupons sent in DMs generate up to 88% open rates and triple traditional website conversion.
                </p>
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl border border-[#e7e5dc] shadow-sm text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#315d3b] border border-[#171717] flex items-center justify-center text-white flex-shrink-0 shadow-mc-hard-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#171717] text-sm">Official Meta API Partner</h4>
                <p className="text-xs text-[#55534b] mt-1 leading-relaxed">
                  Built exclusively on the official Meta Graph API for Instagram. No scrapers, fully compliant with platform terms of service.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
