import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react';
import reelImage from '../assets/feature-reel-fashion.jpg';
import reelAvatar from '../assets/avatar-fashion.jpg';
import storyImage from '../assets/feature-story-cafe.jpg';
import storyAvatar from '../assets/avatar-cafe.jpg';
import mentionImage from '../assets/feature-mention-ugc.jpg';
import mentionAvatar from '../assets/avatar-customer.jpg';
import InstagramBrandMark from './InstagramBrandMark';

const stories = [
  {
    id: 'comment',
    label: 'Reel comments',
    eyebrow: 'TURN CURIOSITY INTO A NEXT STEP',
    title: 'The right reply can turn a scroll into a sale.',
    description:
      'When someone asks about a product, send the details and a useful next step while they are still interested.',
    handle: 'wearwell.studio',
    avatar: reelAvatar,
    image: reelImage,
    imageAlt: 'A featured fashion look from a boutique Instagram Reel',
    trigger: 'Does this come in other colors?',
    reply: 'It does. Here are the shades and fit notes you asked for.',
    action: 'Explore the colors',
    metric: 'COMMENT → PRODUCT DETAILS',
  },
  {
    id: 'story',
    label: 'Story replies',
    eyebrow: 'MAKE EVERY STORY COUNT',
    title: 'Turn a quick reaction into a real conversation.',
    description:
      'Answer Story replies with the menu, offer or link people are looking for, without making them wait.',
    handle: 'dailybrew.cafe',
    avatar: storyAvatar,
    image: storyImage,
    imageAlt: 'A fresh drink from a cafe Instagram Story',
    trigger: 'Can I get the weekend menu?',
    reply: 'Of course. Here is the weekend menu, ready to browse.',
    action: 'Open the weekend menu',
    metric: 'STORY REPLY → MENU',
  },
  {
    id: 'faq',
    label: 'FAQs',
    eyebrow: 'GIVE YOUR TIME BACK',
    title: 'Let the everyday questions answer themselves.',
    description:
      'Share clear answers to common questions automatically, so you can focus on the conversations that need you.',
    handle: 'everglow.goods',
    avatar: mentionAvatar,
    image: mentionImage,
    imageAlt: 'A customer sharing a favorite product in an Instagram Story',
    trigger: 'How long does delivery take?',
    reply: 'Most orders arrive in 2–4 days. Here is the full delivery guide.',
    action: 'View delivery details',
    metric: 'FAQ → HELPFUL ANSWER',
  },
];

const ROTATION_MS = 6500;

export default function ProductAutomationStory() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const story = stories[activeStoryIndex];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActiveStoryIndex((current) => (current + 1) % stories.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="product-automation-title"
      className="product-story-section relative isolate overflow-hidden bg-[#171717] pb-20 pt-28 text-[#ffffff] sm:pb-28 sm:pt-36"
    >
      <div className="product-story-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="product-story-glow pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#55534b] bg-[#171717] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ffffff]">
              <Sparkles className="h-3.5 w-3.5 text-[#ffe01b]" />
              A better kind of auto-reply
            </div>

            <h2
              id="product-automation-title"
              className="mt-7 max-w-2xl font-mc-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Every interaction can go <span className="text-[#ffe01b]">somewhere.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#e7e5dc] sm:text-lg">
              Show people what to do next, right when they reach out. Explore a few ways
              ChimpChat turns Instagram activity into helpful, timely replies.
            </p>

            <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Automation examples">
              {stories.map((item, index) => {
                const isActive = index === activeStoryIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`automation-tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls="automation-story-preview"
                    onClick={() => setActiveStoryIndex(index)}
                    className={`rounded-full border px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe01b] ${
                      isActive
                        ? 'border-[#ffe01b] bg-[#ffe01b] text-[#171717]'
                        : 'border-[#55534b] bg-[#171717] text-[#ffffff] hover:border-[#e7e5dc]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#55534b] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe01b] text-[#171717]">
                <ArrowDownRight className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e7e5dc]">
                  The conversation keeps moving
                </p>
                <p className="mt-1 text-sm font-semibold text-[#ffffff]">
                  Useful answers. Less waiting. More momentum.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:col-span-6 lg:ml-auto">
            <div className="product-story-orbit pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#55534b] sm:-right-12 sm:-top-10 sm:h-56 sm:w-56" />

            <div
              key={story.id}
              id="automation-story-preview"
              role="tabpanel"
              aria-labelledby={`automation-tab-${story.id}`}
              aria-live="polite"
              className="product-story-preview relative z-10"
            >
              <div className="product-story-phone mx-auto max-w-[340px] overflow-hidden rounded-[34px] border-[3px] border-[#e7e5dc] bg-[#ffffff] p-2.5 text-[#171717] shadow-[0_28px_90px_rgba(23,23,23,0.35)]">
                <div className="mb-2 flex items-center justify-center py-1">
                  <span className="h-1.5 w-16 rounded-full bg-[#171717]" />
                </div>

                <div className="flex items-center justify-between border-b border-[#e7e5dc] px-2 pb-2.5">
                  <div className="flex items-center gap-2">
                    <InstagramBrandMark className="h-8 w-8" iconClassName="h-4 w-4" />
                    <div>
                      <p className="text-xs font-bold">{story.handle}</p>
                      <p className="text-[10px] text-[#77756e]">Active now</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#f7f6f1] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#55534b]">
                    {story.eyebrow.split(' ')[0]}
                  </span>
                </div>

                <div className="relative mt-2 h-[230px] overflow-hidden rounded-[22px] bg-[#f7f6f1] sm:h-[250px]">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[#ffffff]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#e7e5dc]">
                        {story.metric}
                      </p>
                      <p className="mt-1 text-sm font-bold">{story.handle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 fill-[#ffffff] text-[#ffffff]" />
                      <MessageCircle className="h-4 w-4" />
                      <Send className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 px-1 pb-1 pt-3">
                  <div className="flex justify-end">
                    <p className="max-w-[84%] rounded-2xl rounded-tr-sm bg-[#171717] px-3.5 py-2.5 text-[11px] leading-relaxed text-[#ffffff]">
                      {story.trigger}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src={story.avatar}
                      alt=""
                      className="mt-1 h-6 w-6 rounded-full object-cover"
                    />
                    <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#f7f6f1] p-3 text-[11px] leading-relaxed text-[#171717]">
                      <p>{story.reply}</p>
                      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-[#ffe01b] px-3 py-2 font-bold">
                        <span>{story.action}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-1.5">
                  <span className="h-1 w-16 rounded-full bg-[#171717]" />
                </div>
              </div>

              <div className="product-story-notice absolute -right-1 top-20 z-20 hidden w-48 rounded-2xl border border-[#171717] bg-[#ffe01b] p-3 text-[#171717] shadow-mc-hard sm:block sm:-right-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff]">
                    <Check className="h-4 w-4 text-[#315d3b]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wide">Reply sent</p>
                    <p className="text-[10px] text-[#55534b]">Conversation in motion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 px-2" aria-hidden="true">
              {stories.map((item, index) => (
                <span
                  key={item.id}
                  className="product-story-progress relative h-1.5 flex-1 overflow-hidden rounded-full bg-[#55534b]"
                >
                  {index === activeStoryIndex && (
                    <span
                      className="product-story-progress-fill absolute inset-0 origin-left rounded-full bg-[#ffe01b]"
                      style={{ animationDuration: `${ROTATION_MS}ms` }}
                    />
                  )}
                </span>
              ))}
              <span className="ml-1 text-xs font-bold tabular-nums text-[#e7e5dc]">
                {String(activeStoryIndex + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
