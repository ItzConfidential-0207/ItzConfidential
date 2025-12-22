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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": CASES.map((c, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": c.title,
                "description": c.summary,
                "image": `https://itzconfidential.com${c.image}`,
                "sku": c.id,
                "brand": {
                  "@type": "Brand",
                  "name": "Itz Confidential"
                },
                "offers": {
                  "@type": "Offer",
                  "price": c.id === "001" ? "599" : c.id === "002" ? "699" : c.id === "003" ? "720" : "999",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
          })
        }}
      />
      <IntroAnimation />
      <Hero />

      <CaseBoard cases={CASES} />


      <SuspectLineup />
      <Footer />
    </main>
  );
}
