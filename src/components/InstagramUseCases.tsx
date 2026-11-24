import { useEffect, useState } from 'react';
import { MessageCircle, Pause, Play, Send } from 'lucide-react';
import reelImage from '../assets/creator-content-studio.jpg';
import postImage from '../assets/feature-beauty-wellness.jpg';
import storyImage from '../assets/feature-fitness-coaching.jpg';
import mentionImage from '../assets/feature-live-events.jpg';
import faqImage from '../assets/usecase-faq-unboxing.jpg';
import InstagramBrandMark from './InstagramBrandMark';

const useCases = [
  {
    id: 'reel-comments',
    tab: 'Reel comments',
    label: 'REEL AUTOMATION',
    interaction: 'Instagram comment',
    title: 'Auto-Reply to Instagram Reel Comments',
    description:
      "Reply to Instagram reel comments automatically with a DM sent straight to the user's inbox. Add trigger keywords or respond to all comments in under 2 seconds.",
    image: reelImage,
    imageAlt: 'Creator filming content for an Instagram Reel',
    trigger: 'Links please 😍😍😍',
  },
  {
    id: 'post-comments',
    tab: 'Post comments',
    label: 'FEED POST & AD AUTOMATION',
    interaction: 'Instagram comment',
    title: 'Auto-Reply to Instagram Post Comments',
    description:
      "Reply to Instagram post comments automatically with a DM sent straight to the user's inbox. Add trigger keywords or respond to all comments without lifting a finger.",
    image: postImage,
    imageAlt: 'Beauty and wellness service featured in an Instagram post',
    trigger: 'Link please!',
  },
  {
    id: 'story-replies',
    tab: 'Story replies',
    label: 'STORY CONVERSIONS',
    interaction: 'Instagram story reply',
    title: 'Auto-Respond to Instagram Story Replies',
    description:
      "Automatically respond to story replies with a DM sent directly to the user's inbox. Add trigger keywords or respond to all comments with custom product cards.",
    image: storyImage,
    imageAlt: 'Fitness coaching featured in an Instagram Story',
    trigger: 'Menu',
  },
  {
    id: 'story-mentions',
    tab: 'Story mentions',
    label: 'VIRAL ADVOCACY',
    interaction: 'Instagram story mention',
    title: 'Auto-Reply to Instagram Story Mentions',
    description:
      'Automatically respond to story @mentions with a message sent directly to the user’s inbox. Reward your biggest fans the instant they tag your brand.',
    image: mentionImage,
    imageAlt: 'Live event featured in an Instagram Story',
    trigger: 'Tagged you in their Story',
  },
  {
    id: 'instagram-faqs',
    tab: 'FAQs',
    label: 'FAQ AUTOMATION',
    interaction: 'Instagram DM',
    title: 'Let the everyday questions answer themselves.',
    description:
      'Share clear answers to common questions automatically, so you can focus on the conversations that need you.',
    image: faqImage,
    imageAlt: 'Customer opening a small business product package',
    trigger: 'How long does delivery take?',
  },
];

const ROTATION_MS = 5500;

export default function InstagramUseCases() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused]);

  const visibleCases = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + useCases.length) % useCases.length;
    return useCases[index];
  });

  return (
    <section
      aria-labelledby="instagram-use-cases-title"
      className="overflow-hidden border-t border-[#e7e5dc] bg-[#f7f6f1] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#77756e]">
            USE CASE
          </p>
          <h2
            id="instagram-use-cases-title"
            className="mt-4 font-mc-serif text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-5xl"
          >
            Accelerate growth with customer journey automation in Instagram chats
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <nav
            aria-label="Instagram use cases"
            className="flex max-w-full gap-2 overflow-x-auto pb-2"
          >
            {useCases.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-max rounded-full border px-4 py-2.5 text-xs font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:px-5 sm:text-sm ${
                    isActive
                      ? 'border-[#171717] bg-[#ffe01b] text-[#171717]'
                      : 'border-transparent bg-transparent text-[#77756e] hover:border-[#e7e5dc] hover:text-[#171717]'
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e7e5dc] bg-[#ffffff] px-3.5 py-2 text-xs font-bold text-[#171717] transition-colors hover:border-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
          >
            {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            {isPaused ? 'Play' : 'Pause'}
          </button>
        </div>

        <div
          aria-label="Instagram use-case carousel"
          aria-live="off"
          aria-roledescription="carousel"
          className="mx-auto mt-6 grid max-w-7xl grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6"
          role="region"
        >
          {visibleCases.map((item, position) => {
            const isActive = position === 1;

            return (
              <article
                key={`${item.id}-${activeIndex}`}
                aria-current={isActive ? 'true' : undefined}
                className={`instagram-use-case-card flex flex-col overflow-hidden rounded-3xl border bg-[#ffffff] ${
                  isActive
                    ? 'border-[#171717] shadow-[0_8px_24px_rgba(23,23,23,0.12)]'
                    : 'hidden border-[#e7e5dc] md:flex'
                }`}
              >
                <div className="relative aspect-[1.4/1] overflow-hidden bg-[#e7e5dc]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#e7e5dc] bg-[#ffffff] px-3 py-1.5">
                    <InstagramBrandMark className="h-6 w-6" iconClassName="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold text-[#171717]">Instagram</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#e7e5dc] bg-[#ffffff] p-3.5 shadow-[0_4px_16px_rgba(23,23,23,0.12)]">
                    <div className="flex items-center gap-2 text-[#55534b]">
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span className="text-[9px] font-black uppercase tracking-[0.12em]">
                        {item.interaction}
                      </span>
                      <Send className="ml-auto h-3.5 w-3.5" />
                    </div>
                    <p className="mt-1.5 text-xs font-bold text-[#171717]">
                      “{item.trigger}”
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#77756e]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-mc-serif text-xl font-bold leading-snug text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#55534b]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
