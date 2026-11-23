import reelMedia from '../assets/feature-reel-fashion.jpg';
import reelAvatar from '../assets/avatar-fashion.jpg';
import postMedia from '../assets/feature-post-ceramics.jpg';
import postAvatar from '../assets/avatar-potter.jpg';
import storyMedia from '../assets/feature-story-cafe.jpg';
import storyAvatar from '../assets/avatar-cafe.jpg';
import mentionMedia from '../assets/feature-mention-ugc.jpg';
import mentionAvatar from '../assets/avatar-customer.jpg';
import chimpLogo from '../assets/chimpchat-logo.jpg';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FeatureItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  phoneType: 'reel' | 'post' | 'story' | 'mention';
  phoneContent: {
    author: string;
    avatar: string;
    image: string;
    caption: string;
    commentTrigger: string;
    overlayBadge?: string;
  };
  dmCard: {
    avatar: string;
    title: string;
    subtitle: string;
    image?: string;
    message: string;
    btnText: string;
    btnLink?: string;
  };
}

export default function FeatureBreakdown() {
  const features: FeatureItem[] = [
    // 1. Reel Comments (Fashion & Apparel)
    {
      id: 'reel-comments',
      eyebrow: 'REEL AUTOMATION',
      title: 'Auto-Reply to Instagram Reel Comments',
      description: 'Reply to Instagram reel comments automatically with a DM sent straight to the user\'s inbox. Add trigger keywords or respond to all comments in under 2 seconds.',
      phoneType: 'reel',
      phoneContent: {
        author: 'myvoguishdiaries',
        avatar: reelAvatar,
        image: reelMedia,
        caption: 'RECENT & FAVOURITE Autumn collection purchases ✨ Trench & boots linked!',
        commentTrigger: 'Links please 😍😍😍',
        overlayBadge: 'Reels'
      },
      dmCard: {
        avatar: reelAvatar,
        title: 'myvoguishdiaries',
        subtitle: '130k followers • Official Store',
        image: reelMedia,
        message: 'Hey babe! Tap below to shop the exact camel trench coat from my Reel with 20% off:',
        btnText: 'Shop Autumn Look'
      }
    },

    // 2. Post Comments (Artisan Ceramics & Home)
    {
      id: 'post-comments',
      eyebrow: 'FEED POST & AD AUTOMATION',
      title: 'Auto-Reply to Instagram Post Comments',
      description: 'Reply to Instagram post comments automatically with a DM sent straight to the user\'s inbox. Add trigger keywords or respond to all comments without lifting a finger.',
      phoneType: 'post',
      phoneContent: {
        author: 'atelier.earthware',
        avatar: postAvatar,
        image: postMedia,
        caption: 'Speckled oat stoneware batch is finally live! Comment LINK to claim yours ☕',
        commentTrigger: 'Link please!',
        overlayBadge: 'Post Drop'
      },
      dmCard: {
        avatar: postAvatar,
        title: 'Atelier Earthware',
        subtitle: 'Artisan Pottery Studio',
        image: postMedia,
        message: 'Here is your direct VIP access link to the speckled stoneware batch + free shipping:',
        btnText: 'Claim Fresh Pottery'
      }
    },

    // 3. Story Replies (Daily Brew Cafe & Bakery)
    {
      id: 'story-replies',
      eyebrow: 'STORY CONVERSIONS',
      title: 'Auto-Respond to Instagram Story Replies',
      description: 'Automatically respond to story replies with a DM sent directly to the user\'s inbox. Add trigger keywords or respond to all comments with custom product cards.',
      phoneType: 'story',
      phoneContent: {
        author: 'dailybrew.cafe',
        avatar: storyAvatar,
        image: storyMedia,
        caption: 'Fresh morning bakes & iced brew! Reply MENU for today\'s secret specials 🥐',
        commentTrigger: 'Menu',
        overlayBadge: 'Stories'
      },
      dmCard: {
        avatar: storyAvatar,
        title: 'Daily Brew Cafe',
        subtitle: 'Specialty Roastery • Open Now',
        image: storyMedia,
        message: 'Good morning! Here is today\'s secret weekend brunch menu & your 10% coupon:',
        btnText: 'View Brunch Specials'
      }
    },

    // 4. Story Mentions (UGC Customer Delight)
    {
      id: 'story-mentions',
      eyebrow: 'VIRAL ADVOCACY',
      title: 'Auto-Reply to Instagram Story Mentions',
      description: 'Automatically respond to story @mentions with a message sent directly to the user\'s inbox. Reward your biggest fans the instant they tag your brand.',
      phoneType: 'mention',
      phoneContent: {
        author: 'claire.living',
        avatar: mentionAvatar,
        image: mentionMedia,
        caption: 'Obsessed with my fresh order from @everglow.botanicals! The packaging is divine ✨',
        commentTrigger: 'Tagged you in their Story',
        overlayBadge: 'Story Tag'
      },
      dmCard: {
        avatar: chimpLogo,
        title: 'Everglow Botanicals',
        subtitle: 'Automated VIP Rewards',
        image: mentionMedia,
        message: 'Claire, thank you so much for tagging us! As a token of our love, here is a 20% VIP gift code:',
        btnText: 'Claim 20% VIP Gift'
      }
    }
  ];

  return (
    <section id="features" className="relative py-20 sm:py-28 bg-[#ffffff] border-t border-b border-[#e7e5dc] overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Match to User Photo) */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28 space-y-3">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#55534b]">
            FEATURE FOCUS
          </p>

          <h2 className="font-mc-serif text-4xl sm:text-6xl font-normal text-[#171717] tracking-tight">
            Feature Breakdown
          </h2>

          <p className="text-base sm:text-lg text-[#55534b] font-normal max-w-2xl mx-auto leading-relaxed">
            Dive into the specifics of each feature, understanding its functionality and how it can elevate your Instagram strategy.
          </p>
        </div>

        {/* Alternating Zig-Zag Feature Rows */}
        <div className="space-y-24 sm:space-y-32">
          {features.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Phone Column (Takes 6 cols) */}
                <div className={`lg:col-span-6 flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Outer Wrapper for Relative Positioning with Floating Card & SVG Arrow */}
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px] py-4">
                    
                    {/* Ambient Glow / Warm Backing Shadow */}
                    <div className="absolute -inset-2 bg-[#f7f6f1] rounded-[48px] filter blur-xl opacity-70 -z-10" />

                    {/* Smartphone Mockup */}
                    <div className="relative w-[230px] sm:w-[250px] rounded-[38px] border-[3px] border-[#171717] bg-[#171717] shadow-mc-hard-lg overflow-hidden z-10 text-white">
                      
                      {/* Top Island / Camera Notch */}
                      <div className="pt-2.5 pb-1 flex justify-center bg-[#171717]">
                        <div className="w-16 h-3.5 bg-[#171717] rounded-full flex items-center justify-end pr-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                        </div>
                      </div>

                      {/* Phone Screen Container */}
                      <div className="relative h-[430px] sm:h-[460px] overflow-hidden flex flex-col justify-between bg-[#171717]">
                        
                        {/* Background Media Image */}
                        <img 
                          src={item.phoneContent.image} 
                          alt="" 
                          className="absolute inset-0 w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/50 via-transparent to-[#171717]/90 pointer-events-none" />

                        {/* Top Screen Bar */}
                        <div className="relative z-10 p-3 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 bg-[#171717] backdrop-blur-md px-2.5 py-1 rounded-full border border-[#e7e5dc]">
                            <span className="text-[10px] font-bold text-white tracking-wider">
                              {item.phoneContent.overlayBadge}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-[#ffffff]">•••</span>
                        </div>

                        {/* Middle Content Details */}
                        <div className="relative z-10 px-3.5 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <img src={item.phoneContent.avatar} alt="" className="w-5 h-5 rounded-full border border-[#e7e5dc] object-cover" />
                            <span className="text-xs font-bold text-white drop-shadow-sm">
                              {item.phoneContent.author}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#ffffff] leading-tight font-medium drop-shadow-sm line-clamp-2">
                            {item.phoneContent.caption}
                          </p>
                        </div>

                        {/* Bottom Comment Input Bar (Origin of Dotted Arrow) */}
                        <div className="relative z-10 p-3 pt-0">
                          
                          {/* Right Reel Action Icons (Heart, Comment, Share) */}
                          <div className="absolute -top-24 right-3 space-y-3 flex flex-col items-center">
                            <button className="w-7 h-7 rounded-full bg-[#171717] backdrop-blur-md flex items-center justify-center text-white border border-[#e7e5dc]">
                              <Heart className="w-3.5 h-3.5 fill-[#8d2924] text-[#8d2924]" />
                            </button>
                            <button className="w-7 h-7 rounded-full bg-[#171717] backdrop-blur-md flex items-center justify-center text-white border border-[#e7e5dc]">
                              <MessageCircle className="w-3.5 h-3.5" />
                            </button>
                            <button className="w-7 h-7 rounded-full bg-[#171717] backdrop-blur-md flex items-center justify-center text-white border border-[#e7e5dc]">
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Comment Pill */}
                          <div className="bg-[#ffffff] text-[#171717] rounded-full p-2 px-3 border border-[#e7e5dc] flex items-center justify-between shadow-md">
                            <span className="text-[10px] font-bold truncate pr-1">
                              {item.phoneContent.commentTrigger}
                            </span>
                            <span className="w-4 h-4 rounded-full bg-[#ffe01b] border border-[#171717] flex items-center justify-center text-[8px] font-bold text-[#171717] flex-shrink-0">
                              ➔
                            </span>
                          </div>

                          {/* Home Bar Indicator */}
                          <div className="flex justify-center pt-2">
                            <div className="w-20 h-1 bg-[#ffffff] rounded-full" />
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Dotted Connector Arrow from Phone to DM Card (Exact Match to User Photo) */}
                    <svg 
                      className="absolute bottom-10 left-[180px] sm:left-[190px] w-28 sm:w-36 h-28 pointer-events-none z-20"
                      viewBox="0 0 120 100"
                      fill="none"
                    >
                      <path 
                        d="M 10 90 C 70 90, 80 50, 95 10" 
                        stroke="#171717" 
                        strokeWidth="2.5" 
                        strokeDasharray="4 4" 
                        strokeLinecap="round"
                      />
                      {/* Arrowhead / Circle */}
                      <circle cx="10" cy="90" r="3.5" fill="#171717" />
                      <polygon points="90,12 98,6 100,16" fill="#171717" />
                    </svg>

                    {/* Overlapping Floating DM Card (Right Offset of Phone) */}
                    <div className="absolute top-12 sm:top-14 right-0 sm:-right-4 w-[190px] sm:w-[210px] bg-white rounded-2xl border-2 border-[#171717] shadow-mc-hard-lg p-3.5 z-30 space-y-2.5">
                      
                      {/* Red Notification Badge "1" at top right */}
                      <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#8d2924] text-white font-black text-[11px] flex items-center justify-center border-2 border-white shadow-sm">
                        1
                      </div>

                      {/* DM Card Profile Header */}
                      <div className="flex items-center gap-2 pb-2 border-b border-[#e7e5dc]">
                        <img 
                          src={item.dmCard.avatar} 
                          alt="" 
                          className="w-7 h-7 rounded-full border border-[#171717] object-cover flex-shrink-0" 
                        />
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold text-[#171717] truncate">
                            {item.dmCard.title}
                          </p>
                          <p className="text-[9px] text-[#77756e] truncate">
                            {item.dmCard.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Optional Media Preview Thumbnail */}
                      {item.dmCard.image && (
                        <div className="h-20 rounded-xl overflow-hidden border border-[#e7e5dc]">
                          <img src={item.dmCard.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* DM Message Text */}
                      <p className="text-[10px] text-[#55534b] leading-relaxed font-medium">
                        {item.dmCard.message}
                      </p>

                      {/* Action CTA Button */}
                      <button className="w-full py-2 bg-[#171717] hover:bg-[#171717] text-[#ffe01b] font-black text-[11px] rounded-xl border border-[#171717] shadow-xs flex items-center justify-center gap-1 transition-all">
                        <span>{item.dmCard.btnText}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>

                    </div>

                  </div>

                </div>

                {/* Text Description Column (Takes 6 cols) */}
                <div className={`lg:col-span-6 space-y-4 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Eyebrow Chip */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f7f6f1] border border-[#e7e5dc] text-[11px] font-bold text-[#171717]">
                    <Sparkles className="w-3.5 h-3.5 text-[#55534b]" />
                    <span>{item.eyebrow}</span>
                  </div>

                  {/* Main Feature Title (Bold and Clean from Photo) */}
                  <h3 className="font-mc-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171717] leading-[1.15] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-base sm:text-lg text-[#55534b] font-normal leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-bold text-[#171717]">
                    <span className="inline-flex items-center gap-1 bg-[#f7f6f1] border border-[#e7e5dc] px-3 py-1.5 rounded-full shadow-2xs">
                      ⚡ Instant &lt; 2s Delivery
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#f7f6f1] border border-[#e7e5dc] px-3 py-1.5 rounded-full shadow-2xs">
                      🛡️ 100% Meta Compliant
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#f7f6f1] border border-[#e7e5dc] px-3 py-1.5 rounded-full shadow-2xs">
                      📈 3.4x Higher Conversion
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
