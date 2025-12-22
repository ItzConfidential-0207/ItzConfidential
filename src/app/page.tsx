import Hero from "@/components/Hero";
import { CASES } from "@/data/cases";
// CaseFile moved to CaseBoard


// Dummy Data


import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
import CaseBoard from "@/components/CaseBoard";

import IntroAnimation from "@/components/IntroAnimation";

const SuspectLineup = dynamic(() => import('@/components/SuspectLineup'), {
  loading: () => <div className="h-96 w-full flex items-center justify-center font-mono text-gray-700">LOADING EVIDENCE...</div>
});

export default function Home() {
  return (
    <main className="flex flex-col items-center pb-0 text-white">
      <IntroAnimation />
      <Hero />

      <CaseBoard cases={CASES} />


      <SuspectLineup />
      <Footer />
    </main>
  );
}
