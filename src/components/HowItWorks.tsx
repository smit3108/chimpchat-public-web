import { useState, useEffect } from 'react';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import merchantAvatar from '../assets/avatar-step2-merchant.jpg';
import { 
  Instagram, 
  ArrowRight, 
  Zap, 
  Sparkles,
  MousePointer,
  Link2
} from 'lucide-react';

export default function HowItWorks() {
  // Step 1: Click Animation State
  const [btnClicked, setBtnClicked] = useState(false);

  // Step 2: Channel Switching State
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);
  const channels = [
    { name: 'Instagram', icon: Instagram, color: 'text-[#DD2A7B]', bg: 'bg-[#DD2A7B]/10', handle: '@yourbrand.official' },
  ];

  // Step 3: Automation View Toggle (Menu vs Live Chat)
  const [step3View, setStep3View] = useState<'menu' | 'chat'>('menu');
  const [activeRecipe, setActiveRecipe] = useState<'comment' | 'story' | 'faq' | 'catalog'>('comment');

  // Loop Step 1 Button Click Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setBtnClicked(true);
      setTimeout(() => setBtnClicked(false), 800);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Loop Step 2 Channel Connect Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChannelIdx((prev) => (prev + 1) % channels.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [channels.length]);

  // Loop Step 3 View Toggle (Menu <-> Chat)
  useEffect(() => {
    const timer = setInterval(() => {
      setStep3View((prev) => (prev === 'menu' ? 'chat' : 'menu'));
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const activeChannel = channels[activeChannelIdx];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#FFFFFF] border-t border-b border-[#241C15]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Mailchimp / ManyChat Signature Headline) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE01B] border border-[#241C15] text-xs font-bold text-[#241C15] shadow-mc-hard-sm">
            <Zap className="w-3.5 h-3.5 fill-[#241C15]" />
            <span>3-MINUTE ONBOARDING</span>
          </div>

          <h2 className="font-mc-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#241C15] leading-[1.12]">
            Get up and running in <em className="italic underline decoration-[#FFE01B] decoration-4 underline-offset-4">3 simple steps</em>
          </h2>

          <p className="text-base sm:text-lg text-[#241C15]/80 font-normal leading-relaxed max-w-xl mx-auto">
            We make it easy to make it easy. No degree in computer science required.
          </p>
        </div>

        {/* 3 Step Interactive Cards Grid (Strictly Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ===================== STEP 1 ===================== */}
          <div className="flex flex-col space-y-5">
            
            {/* Step 1 Visual Box: Yellow Grid Pattern with Animated Clickable Button */}
            <div className="relative h-64 sm:h-72 rounded-3xl border-2 border-[#241C15] bg-[#FFE01B] shadow-mc-hard overflow-hidden flex items-center justify-center p-6 group">
              
              {/* Tile Grid Lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#241C15 1px, transparent 1px), linear-gradient(90deg, #241C15 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* The "GET STARTED FREE" Button */}
              <div className="relative z-10">
                <button
                  onClick={() => {
                    setBtnClicked(true);
                    setTimeout(() => setBtnClicked(false), 500);
                  }}
                  className={`px-6 py-3.5 rounded-full bg-[#E04838] text-white border-2 border-[#241C15] font-black text-xs uppercase tracking-wider shadow-mc-hard transition-all duration-150 flex items-center gap-2 select-none ${
                    btnClicked ? 'scale-90 translate-x-1 translate-y-1 shadow-none bg-[#c73426]' : 'hover:scale-105'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-[#FFE01B]" />
                  <span>GET STARTED FREE</span>
                </button>

                {/* Simulated Mouse Cursor Pointer */}
                <div 
                  className={`absolute -bottom-8 -right-4 transition-all duration-300 pointer-events-none ${
                    btnClicked ? 'translate-x-1 translate-y-1 scale-90' : 'animate-bounce'
                  }`}
                >
                  <div className="relative">
                    <MousePointer className="w-8 h-8 text-[#241C15] fill-[#241C15] drop-shadow-md" />
                    {btnClicked && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFE01B] border-2 border-[#241C15] animate-ping" />
                    )}
                  </div>
                </div>
              </div>

              {/* Step 1 Top Pill */}
              <div className="absolute top-4 left-4 bg-white border border-[#241C15] px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#241C15] shadow-xs">
                Step 1
              </div>

            </div>

            {/* Step 1 Copy */}
            <div className="text-left space-y-1.5 px-1 min-h-[72px]">
              <h3 className="font-mc-serif text-xl sm:text-[22px] lg:text-[20px] xl:text-[22px] font-bold text-[#241C15] tracking-tight whitespace-nowrap">
                Step 1: Sign up for free
              </h3>
              <p className="text-xs sm:text-sm text-[#241C15]/75 font-normal leading-relaxed">
                Start your free trial — no credit card required
              </p>
            </div>

          </div>

          {/* ===================== STEP 2 ===================== */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* Step 2 Visual Box: Checkerboard Grid with Connecting Brand Avatars */}
            <div className="relative h-64 sm:h-72 rounded-3xl border-2 border-[#241C15] bg-[#FBEEDB] shadow-mc-hard overflow-hidden flex items-center justify-center p-6">
              
              {/* Checkerboard Pattern */}
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #E6D0BA 25%, transparent 25%), linear-gradient(-45deg, #E6D0BA 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E6D0BA 75%), linear-gradient(-45deg, transparent 75%, #E6D0BA 75%)`,
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                }}
              />

              {/* Connected Avatars in Center */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                
                {/* Left: ChimpChat Mascot Tile */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-[#241C15] p-2 shadow-mc-hard-sm flex items-center justify-center">
                  <img 
                    src={chimpLogo} 
                    alt="ChimpChat Mascot" 
                    className="w-full h-full object-cover rounded-xl border border-[#241C15]/20" 
                  />
                </div>

                {/* Center: Glowing Connection Link Pill */}
                <div className="w-9 h-9 rounded-full bg-[#FFE01B] border-2 border-[#241C15] flex items-center justify-center shadow-mc-hard-sm animate-pulse">
                  <Link2 className="w-4 h-4 text-[#241C15] stroke-[2.5]" />
                </div>

                {/* Right: Connected Channel Avatar with Dynamic Platform Icon */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-[#241C15] p-1.5 shadow-mc-hard-sm flex items-center justify-center">
                  <img 
                    src={merchantAvatar} 
                    alt="Connected Channel" 
                    className="w-full h-full object-cover rounded-xl" 
                  />
                  
                  {/* Floating Active Channel Badge */}
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#241C15] flex items-center justify-center shadow-xs">
                    <activeChannel.icon className={`w-4 h-4 ${activeChannel.color}`} />
                  </div>
                </div>

              </div>

              {/* Channel Live Indicator Bottom Bar */}
              <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm border border-[#241C15] py-1.5 px-3 rounded-full flex items-center justify-between text-[11px] font-bold text-[#241C15]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#008444] animate-pulse" />
                  <span>{activeChannel.name} Linked</span>
                </div>
                <span className="text-[#008444] font-black">Connected 🟢</span>
              </div>

              {/* Step 2 Top Pill */}
              <div className="absolute top-4 left-4 bg-white border border-[#241C15] px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#241C15] shadow-xs">
                Step 2
              </div>

            </div>

            {/* Step 2 Copy */}
            <div className="text-left space-y-1.5 px-1 min-h-[72px]">
              <h3 className="font-mc-serif text-xl sm:text-[22px] lg:text-[20px] xl:text-[22px] font-bold text-[#241C15] tracking-tight whitespace-nowrap">
                Step 2: Connect your Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#241C15]/75 font-normal leading-relaxed">
                Link your Instagram account
              </p>
            </div>

          </div>

          {/* ===================== STEP 3 ===================== */}
          <div className="flex flex-col space-y-5">
            
            {/* Step 3 Visual Box: Flip between Flow Setup Menu and Live Message Bubble */}
            <div className="relative h-64 sm:h-72 rounded-3xl border-2 border-[#241C15] bg-[#F6F6F4] shadow-mc-hard overflow-hidden flex flex-col justify-center p-4 sm:p-5">
              
              {/* View 1: Workflow Setup Menu (Like Video) */}
              {step3View === 'menu' && (
                <div className="space-y-2 animate-fadeIn w-full">
                  
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#241C15]/60">
                      Automation Menu
                    </span>
                    <button
                      onClick={() => setStep3View('chat')}
                      className="text-[10px] font-bold text-[#007C89] underline hover:text-[#241C15]"
                    >
                      View Live Chat →
                    </button>
                  </div>

                  <div className="bg-white border border-[#241C15]/20 p-2 rounded-xl flex items-center justify-between shadow-2xs hover:border-[#241C15] transition-all">
                    <span className="text-xs font-bold text-[#241C15]">Conversation Starters</span>
                    <button 
                      onClick={() => { setActiveRecipe('comment'); setStep3View('chat'); }}
                      className="px-2.5 py-1 rounded-md bg-[#241C15] text-[#FFE01B] text-[10px] font-black uppercase hover:bg-[#382C22]"
                    >
                      SET UP
                    </button>
                  </div>

                  <div className="bg-white border-2 border-[#241C15] p-2 rounded-xl flex items-center justify-between shadow-xs ring-2 ring-[#FFE01B]/50">
                    <span className="text-xs font-bold text-[#241C15]">Story Mention Reply</span>
                    <button 
                      onClick={() => { setActiveRecipe('story'); setStep3View('chat'); }}
                      className="px-2.5 py-1 rounded-md bg-[#008444] text-white text-[10px] font-black uppercase"
                    >
                      ACTIVE ✓
                    </button>
                  </div>

                  <div className="bg-white border border-[#241C15]/20 p-2 rounded-xl flex items-center justify-between shadow-2xs hover:border-[#241C15] transition-all">
                    <span className="text-xs font-bold text-[#241C15]">Comment-to-DM Reply</span>
                    <button 
                      onClick={() => { setActiveRecipe('comment'); setStep3View('chat'); }}
                      className="px-2.5 py-1 rounded-md bg-[#241C15] text-[#FFE01B] text-[10px] font-black uppercase hover:bg-[#382C22]"
                    >
                      SET UP
                    </button>
                  </div>

                  <div className="bg-white border border-[#241C15]/20 p-2 rounded-xl flex items-center justify-between shadow-2xs hover:border-[#241C15] transition-all">
                    <span className="text-xs font-bold text-[#241C15]">Default AI Response</span>
                    <button 
                      onClick={() => { setActiveRecipe('faq'); setStep3View('chat'); }}
                      className="px-2.5 py-1 rounded-md bg-[#241C15] text-[#FFE01B] text-[10px] font-black uppercase hover:bg-[#382C22]"
                    >
                      SET UP
                    </button>
                  </div>

                </div>
              )}

              {/* View 2: Live Message Simulation (Like Video) */}
              {step3View === 'chat' && (
                <div className="space-y-3 animate-fadeIn w-full">
                  
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-bold text-[#008444] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008444] animate-ping" />
                      Live Automation Active
                    </span>
                    <button
                      onClick={() => setStep3View('menu')}
                      className="text-[10px] font-bold text-[#241C15]/60 hover:text-[#241C15] underline"
                    >
                      ← Back to Setup
                    </button>
                  </div>

                  {/* Customer Message Bubble (Right) */}
                  <div className="flex justify-end">
                    <div className="bg-[#241C15] text-white px-3.5 py-2 rounded-2xl rounded-tr-sm text-xs font-medium shadow-sm max-w-[85%] text-left">
                      {activeRecipe === 'comment' && 'Awesome! Need this link! 😍'}
                      {activeRecipe === 'story' && 'Loved your story! Send the coupon 🙌'}
                      {activeRecipe === 'faq' && 'Hey! Do you ship to Canada?'}
                      {activeRecipe === 'catalog' && 'Can I see the new catalog?'}
                    </div>
                  </div>

                  {/* ChimpChat Bot Reply Bubble (Left - Like Video Purple Card) */}
                  <div className="flex items-start gap-1.5">
                    <img src={chimpLogo} alt="" className="w-6 h-6 rounded-full border border-[#241C15] mt-1 flex-shrink-0" />
                    <div className="bg-[#635BFF] text-white p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed space-y-2 shadow-sm text-left max-w-[88%]">
                      <p className="font-medium text-white/95">
                        Hi there! 🚀 Thanks for your interest! Here's the direct link you requested:
                      </p>
                      
                      {/* In-Chat Button */}
                      <button className="w-full py-1.5 bg-[#FFE01B] hover:bg-[#ffe63b] text-[#241C15] border border-[#241C15] font-black text-[11px] rounded-lg shadow-xs transition-transform active:scale-95 flex items-center justify-center gap-1">
                        <span>GET THE LINK</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* Step 3 Top Pill */}
              <div className="absolute top-4 left-4 bg-white border border-[#241C15] px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#241C15] shadow-xs">
                Step 3
              </div>

            </div>

            {/* Step 3 Copy */}
            <div className="text-left space-y-1.5 px-1 min-h-[72px]">
              <h3 className="font-mc-serif text-xl sm:text-[22px] lg:text-[20px] xl:text-[22px] font-bold text-[#241C15] tracking-tight whitespace-nowrap">
                Step 3: Go live in minutes
              </h3>
              <p className="text-xs sm:text-sm text-[#241C15]/75 font-normal leading-relaxed">
                Automate your selling, replying, and so much more!
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Centered CTAs (Exact match to Video) */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto mc-btn-primary px-8 py-4 text-sm font-bold shadow-mc-hard hover:shadow-mc-hard-lg"
          >
            <span>GET STARTED FREE</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto mc-btn-outline px-8 py-4 text-sm font-bold bg-[#FFFFFF] hover:bg-[#F6F6F4]"
          >
            <span>SEE PLANS</span>
          </a>
        </div>

      </div>

    </section>
  );
}
