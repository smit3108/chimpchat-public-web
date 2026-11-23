import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeatureBreakdown from './components/FeatureBreakdown';
import ProductAutomationStory from './components/ProductAutomationStory';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const isProductsPage = window.location.pathname.replace(/\/+$/, '') === '/products';

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-[#171717] flex flex-col selection:bg-[#ffe01b] selection:text-[#171717]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {isProductsPage ? (
          <>
            <FeatureBreakdown />
            <ProductAutomationStory />
          </>
        ) : (
          <>
            <Hero />
            <SocialProof />
            <HowItWorks />
          </>
        )}
      </main>
    </div>
  );
}
