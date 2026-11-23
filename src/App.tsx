import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import FeatureBreakdown from './components/FeatureBreakdown';
import ProductAutomationStory from './components/ProductAutomationStory';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const isProductsPage = currentPath === '/products';
  const isSolutionsPage = currentPath === '/solutions';

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-[#171717] flex flex-col selection:bg-[#ffe01b] selection:text-[#171717]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {isSolutionsPage ? (
          <Solutions />
        ) : isProductsPage ? (
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
