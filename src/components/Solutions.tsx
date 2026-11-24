import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Coffee,
  Dumbbell,
  Instagram,
  MessageCircle,
  Pause,
  Play,
  ShoppingBag,
  Sparkles,
  Ticket,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import reelAvatar from '../assets/avatar-fashion.jpg';
import storyImage from '../assets/solution-cafe-brunch.jpg';
import storyAvatar from '../assets/avatar-cafe.jpg';
import mentionImage from '../assets/solution-shop-unboxing.jpg';
import mentionAvatar from '../assets/avatar-customer.jpg';
import potteryImage from '../assets/solution-pottery-craft.jpg';
import potteryAvatar from '../assets/avatar-potter.jpg';
import creatorStudioImage from '../assets/solution-creator-lifestyle.jpg';
import heroAvatar from '../assets/avatar-roaster-founder.jpg';
import roasterImage from '../assets/solutions-coffee-roaster.jpg';
import beautyImage from '../assets/solution-beauty-spa.jpg';
import fitnessImage from '../assets/solution-fitness-trainer.jpg';
import eventsImage from '../assets/solution-live-concert.jpg';
import InstagramBrandMark from './InstagramBrandMark';

interface BusinessSolution {
  id: string;
  label: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  handle: string;
  image: string;
  imageAlt: string;
  avatar?: string;
  trigger: string;
  reply: string;
  action: string;
  outcome: string;
}

const ROTATION_INTERVAL_MS = 4000;

const heroFlow = {
  handle: 'archer.roasters',
  imageAlt: 'A coffee roaster preparing a fresh batch at the counter',
  trigger: 'Can I try the new roast?',
  reply: 'It is fresh from the roaster. Here is the current selection.',
  action: 'Explore the roasts',
  outcome: 'DM → COFFEE MENU',
};

const solutions: BusinessSolution[] = [
  {
    id: 'shops',
    label: 'Online shops',
    icon: ShoppingBag,
    eyebrow: 'FOR PRODUCT-LED BRANDS',
    title: 'Help shoppers find the thing they came for.',
    description:
      'When someone asks about a product in a comment, send the details and a direct next step while the interest is fresh.',
    handle: 'thegoodthings.shop',
    image: mentionImage,
    imageAlt: 'A shopper unboxing an order from an online store',
    avatar: mentionAvatar,
    trigger: 'My order just arrived! What colors are available?',
    reply: 'So glad it made it! Here are the colors and product details.',
    action: 'Shop the collection',
    outcome: 'NEW ORDER → PRODUCT DETAILS',
  },
  {
    id: 'creators',
    label: 'Creators',
    icon: Users,
    eyebrow: 'FOR CREATORS & COMMUNITIES',
    title: 'Give every “send me that” a useful answer.',
    description:
      'Share a guide, a resource or the link your audience asked for, without interrupting the conversation you are having.',
    handle: 'claire.creates',
    image: creatorStudioImage,
    imageAlt: 'A creator filming a video in a bright home studio',
    avatar: reelAvatar,
    trigger: 'Where can I find the pieces in my post?',
    reply: 'Here are the products featured in my latest look.',
    action: 'See the collection',
    outcome: 'CREATOR POST → PRODUCT LINKS',
  },
  {
    id: 'local',
    label: 'Cafes & local',
    icon: Coffee,
    eyebrow: 'FOR LOCAL BUSINESSES',
    title: 'Make the next visit easier to plan.',
    description:
      'Turn a quick Story reply into the menu, opening details or offer someone needs to decide to stop by.',
    handle: 'dailybrew.cafe',
    image: storyImage,
    imageAlt: 'A cafe drink and pastry from a neighborhood coffee shop',
    avatar: storyAvatar,
    trigger: 'What’s on the brunch menu?',
    reply: 'Here is this weekend’s menu. Hope to see you soon!',
    action: 'View the menu',
    outcome: 'STORY REPLY → MENU',
  },
  {
    id: 'makers',
    label: 'Makers & educators',
    icon: Sparkles,
    eyebrow: 'FOR EXPERTS & MAKERS',
    title: 'Turn curious questions into a clear next step.',
    description:
      'Answer questions about materials, process or workshops, then point people to the right next step.',
    handle: 'atelier.earthware',
    image: potteryImage,
    imageAlt: 'Handmade pottery and ceramic tools in a maker’s studio',
    avatar: potteryAvatar,
    trigger: 'Is this mug handmade?',
    reply: 'Yes! Each piece is shaped and glazed by hand in our studio.',
    action: 'Explore the collection',
    outcome: 'QUESTION → HANDMADE DETAILS',
  },
  {
    id: 'beauty',
    label: 'Beauty & wellness',
    icon: CalendarDays,
    eyebrow: 'FOR BEAUTY & WELLNESS',
    title: 'Make booking a little more effortless.',
    description:
      'Answer service questions, share appointment details and help clients choose a time that works for them.',
    handle: 'glowroom.skin',
    image: beautyImage,
    imageAlt: 'An esthetician providing a facial treatment in a modern spa',
    trigger: 'Do you have any facials this Saturday?',
    reply: 'We have a few openings. Choose a time that works for you.',
    action: 'Book an appointment',
    outcome: 'DM → APPOINTMENT',
  },
  {
    id: 'fitness',
    label: 'Fitness & coaches',
    icon: Dumbbell,
    eyebrow: 'FOR FITNESS COACHES',
    title: 'Help clients take the first step.',
    description:
      'Turn a question on your workout post into an intro plan, session details or a simple way to get started.',
    handle: 'movebetter.coaching',
    image: fitnessImage,
    imageAlt: 'A personal trainer guiding a client through a gym workout',
    trigger: 'Can you help me get started?',
    reply: 'Absolutely. Here is the intro plan and how to book your first session.',
    action: 'Explore coaching',
    outcome: 'COMMENT → INTRO SESSION',
  },
  {
    id: 'events',
    label: 'Events & venues',
    icon: Ticket,
    eyebrow: 'FOR EVENT TEAMS & VENUES',
    title: 'Make it easier to say yes to the next event.',
    description:
      'Answer questions about dates, tickets and location, then point guests straight to the details.',
    handle: 'daylight.sessions',
    image: eventsImage,
    imageAlt: 'A live music event with performers and a crowd under stage lights',
    trigger: 'Are tickets still available for Friday?',
    reply: 'Yes! Here are the event details and ticket options.',
    action: 'View tickets',
    outcome: 'QUESTION → EVENT TICKETS',
  },
];

const steps = [
  {
    number: '01',
    title: 'They show interest',
    description: 'A comment, Story reply or keyword starts the conversation.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'ChimpChat follows up',
    description: 'Send a timely, on-brand DM with the answer or link they need.',
    icon: Instagram,
  },
  {
    number: '03',
    title: 'The conversation moves',
    description: 'Give them a helpful next step, and keep the door open to your team.',
    icon: ArrowRight,
  },
];

export default function Solutions() {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeSolution = solutions[activeSolutionIndex];

  useEffect(() => {
    if (!isAutoRotating) return;

    const timer = window.setTimeout(() => {
      setActiveSolutionIndex((current) => (current + 1) % solutions.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [activeSolutionIndex, isAutoRotating]);

  useEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeSolutionIndex];
    if (!tabList || !activeTab || tabList.scrollWidth <= tabList.clientWidth) return;

    const listBounds = tabList.getBoundingClientRect();
    if (listBounds.bottom <= 0 || listBounds.top >= window.innerHeight) return;

    const tabBounds = activeTab.getBoundingClientRect();
    if (tabBounds.left < listBounds.left) {
      tabList.scrollBy({ left: tabBounds.left - listBounds.left, behavior: 'smooth' });
    } else if (tabBounds.right > listBounds.right) {
      tabList.scrollBy({ left: tabBounds.right - listBounds.right, behavior: 'smooth' });
    }
  }, [activeSolutionIndex]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f6f1] pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e7e5dc]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#e7e5dc]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e5dc] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#55534b]">
              <InstagramBrandMark className="h-5 w-5" iconClassName="h-3 w-3" />
              Solutions for Instagram
            </div>

            <h1 className="mt-6 max-w-2xl font-mc-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#171717] sm:text-6xl lg:text-[64px]">
              Make every conversation a{' '}
              <em className="underline decoration-[#ffe01b] decoration-[5px] underline-offset-8">
                next step.
              </em>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#55534b] sm:text-xl">
              From product questions to Story replies, give people the right response
              while they are still interested.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/products"
                className="mc-btn-primary px-7 py-3.5 text-sm shadow-mc-hard-sm"
              >
                <span>See how ChimpChat works</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#solutions"
                className="mc-btn-outline bg-white px-7 py-3.5 text-sm"
              >
                <span>Explore use cases</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#55534b]">
              {['Comments', 'Stories', 'DMs'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#315d3b]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[490px] lg:col-span-6 lg:ml-auto">
            <div className="absolute -inset-4 rounded-[34px] bg-[#ffe01b] opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border-2 border-[#171717] bg-white shadow-mc-hard-lg">
              <div className="flex items-center justify-between bg-[#171717] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <InstagramBrandMark className="h-9 w-9" iconClassName="h-4 w-4" />
                  <div>
                    <p className="text-sm font-bold">A little more helpful</p>
                    <p className="text-xs text-[#e7e5dc]">A conversation in motion</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#315d3b] px-2.5 py-1 text-[10px] font-bold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  READY
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="relative h-52 overflow-hidden rounded-2xl bg-[#f7f6f1] sm:h-60">
                  <img
                    src={roasterImage}
                    alt={heroFlow.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold">{heroFlow.handle}</span>
                    <span className="rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-black tracking-wide text-[#171717]">
                      {heroFlow.outcome}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#f7f6f1] px-4 py-3 text-sm text-[#171717]">
                    {heroFlow.trigger}
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-2.5">
                  <img
                    src={heroAvatar}
                    alt="Archer Roasters founder"
                    className="mt-1 h-8 w-8 rounded-full object-cover"
                  />
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#171717] p-3.5 text-white">
                    <p className="text-sm leading-relaxed">{heroFlow.reply}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#ffe01b] px-3 py-2 text-xs font-bold text-[#171717]">
                      {heroFlow.action}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-[#e7e5dc] bg-[#f7f6f1] px-4 py-3 text-[11px] font-semibold text-[#55534b]">
                <Sparkles className="h-3.5 w-3.5 text-[#8a6400]" />
                A useful reply, right when it matters
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#77756e]">
              MADE FOR YOUR KIND OF BUSINESS
            </p>
            <h2 className="mt-4 font-mc-serif text-3xl font-normal leading-tight text-[#171717] sm:text-5xl">
              The right reply looks different for everyone.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#55534b] sm:text-lg">
              Pick a moment that feels familiar. See how a simple Instagram interaction
              can lead somewhere useful.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div
              ref={tabListRef}
              className="solutions-business-tabs flex gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
              role="group"
              aria-label="Choose a business use case"
            >
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const isActive = index === activeSolutionIndex;

                return (
                  <button
                    key={solution.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveSolutionIndex(index)}
                    className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] ${
                      isActive
                        ? 'border-[#171717] bg-[#ffe01b] text-[#171717] shadow-mc-hard-sm'
                        : 'border-[#e7e5dc] bg-white text-[#55534b] hover:border-[#171717] hover:text-[#171717]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {solution.label}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              aria-label={isAutoRotating ? 'Pause business rotation' : 'Resume business rotation'}
              aria-pressed={!isAutoRotating}
              onClick={() => setIsAutoRotating((current) => !current)}
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 self-center rounded-full border border-[#e7e5dc] bg-white px-4 py-2.5 text-xs font-bold text-[#55534b] transition-colors hover:border-[#171717] hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:self-auto"
            >
              {isAutoRotating ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {isAutoRotating ? 'Pause' : 'Resume'} auto-rotate
            </button>
          </div>

          <div
            className="mt-8 grid overflow-hidden rounded-[28px] border-2 border-[#171717] bg-[#f7f6f1] shadow-mc-hard-lg lg:grid-cols-2"
            aria-live={isAutoRotating ? 'off' : 'polite'}
          >
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-[#77756e]">
                {activeSolution.eyebrow}
              </p>
              <h3 className="mt-4 font-mc-serif text-3xl font-bold leading-tight text-[#171717] sm:text-4xl">
                {activeSolution.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#55534b]">
                {activeSolution.description}
              </p>
              <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#e7e5dc] bg-white px-3.5 py-2 text-xs font-bold text-[#171717]">
                <Instagram className="h-4 w-4" />
                {activeSolution.outcome}
              </div>
              <a
                href="/products"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#171717] transition-colors hover:text-[#55534b]"
              >
                Explore the product
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative min-h-[330px] overflow-hidden bg-[#171717] p-5 text-white sm:min-h-[400px] sm:p-8">
              <img
                src={activeSolution.image}
                alt={activeSolution.imageAlt}
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/35 to-[#171717]/10" />
              <div className="relative flex h-full min-h-[290px] flex-col justify-between sm:min-h-[336px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/30 bg-[#171717]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide">
                    The conversation
                  </span>
                  <InstagramBrandMark className="h-9 w-9" iconClassName="h-4 w-4" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm font-medium text-[#171717] shadow-lg">
                      {activeSolution.trigger}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    {activeSolution.avatar ? (
                      <img
                        src={activeSolution.avatar}
                        alt=""
                        className="mt-1 h-9 w-9 rounded-full border border-white/40 object-cover"
                      />
                    ) : (
                      <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ffe01b] text-[#171717]">
                        <activeSolution.icon className="h-4 w-4" />
                      </span>
                    )}
                    <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-white/15 bg-[#ffffff]/10 p-4 backdrop-blur-md">
                      <p className="text-sm leading-relaxed text-white">
                        {activeSolution.reply}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#ffe01b] px-3.5 py-2.5 text-xs font-black text-[#171717]">
                        {activeSolution.action}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e7e5dc] bg-[#f7f6f1] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#77756e]">
              SIMPLE BY DESIGN
            </p>
            <h2 className="mt-4 font-mc-serif text-3xl font-normal leading-tight text-[#171717] sm:text-5xl">
              From first signal to helpful follow-up.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-3xl border border-[#e7e5dc] bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mc-serif text-3xl font-bold text-[#e7e5dc]">
                      {step.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#171717] bg-[#ffe01b] text-[#171717]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-mc-serif text-xl font-bold text-[#171717]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#55534b]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f6f1] px-3 py-1.5 text-xs font-bold text-[#55534b]">
              <MessageCircle className="h-3.5 w-3.5" />
              BUILT AROUND REAL CUSTOMER MOMENTS
            </div>
            <h2 className="mt-5 max-w-2xl font-mc-serif text-3xl font-normal leading-tight text-[#171717] sm:text-5xl">
              Keep the human touch. Lose the repeat work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#55534b] sm:text-lg">
              Set up the replies that make sense for your brand, then spend your time
              on the conversations that deserve you.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#171717] bg-[#ffe01b] p-6 shadow-mc-hard sm:p-8 lg:col-span-5">
            <p className="font-mc-serif text-2xl font-bold text-[#171717]">
              A good automation feels like good service.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'Answer the question someone actually asked',
                'Make the next step clear and easy',
                'Leave room for a person to take over',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-[#171717]">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#ffe01b]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-4 py-16 text-center text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffe01b]">
            READY WHEN YOU ARE
          </p>
          <h2 className="mt-4 font-mc-serif text-3xl font-normal leading-tight sm:text-5xl">
            Give your next Instagram conversation somewhere to go.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#e7e5dc]">
            Explore how ChimpChat can help you turn comments and DMs into a more
            thoughtful customer experience.
          </p>
          <a
            href="/products"
            className="mc-btn-primary mt-8 px-7 py-3.5 text-sm shadow-mc-hard-sm"
          >
            <span>Explore the product</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
