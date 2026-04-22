import React, { useState } from 'react';

const faqs = [
  {
    question: "Who is this service best suited for?",
    answer:
      "This is designed for e-commerce brands and businesses that are already selling and want to scale their results with better-performing ad creatives. If you’re already running ads (or planning to scale soon), this will be most relevant for you."
  },
  {
    question: "Do you work with service-based businesses as well?",
    answer:
      "While we specialize in e-commerce brands, we also work with service-based businesses that rely on paid ads and need high-converting video creatives."
  },
  {
    question: "How are your video ads different from typical production agencies?",
    answer:
      "We don’t just create “good-looking videos.” Every ad is built with a clear strategy—targeting specific customer pain points, angles, and psychological triggers designed to improve conversions and scaling."
  },
  {
    question: "Do you guarantee sales or ROAS?",
    answer:
      "No one can ethically guarantee exact results because performance depends on multiple factors (product, offer, targeting, etc.). However, we focus on giving you the highest probability of success through proven creative strategies."
  },
  {
    question: "What exactly is included in your service?",
    answer:
      "We handle everything from strategy, scripting, and concept development to production and final delivery. You receive multiple ad creatives designed for testing different angles and improving performance."
  },
  {
    question: "How soon can we start working together?",
    answer:
      "Once we understand your business and confirm it’s a good fit, we can typically begin within a few days depending on current availability."
  },
  {
    question: "What will we discuss on the call?",
    answer:
      "We’ll analyze your current situation, identify gaps in your ad creatives, and show you how a structured creative strategy can improve your results."
  },
];

export default function FAQSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Function to handle card click on mobile
  const handleCardClick = (index: number) => {
    if (window.innerWidth < 768) { // Only for mobile screens
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="relative py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="relative w-full aspect-square group"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-[0.987s] transform-style-preserve-3d
                  md:group-hover:rotate-y-180 ${flippedIndex === index ? 'rotate-y-180' : ''}`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.618, 0, 0.382, 1)'
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-[1.618rem] rounded-[0.618rem]
                    bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20
                    backface-hidden transform-style-preserve-3d group-hover:shadow-lg
                    group-hover:shadow-purple-500/10 transition-shadow duration-300
                    cursor-pointer md:cursor-default"
                >
                  <h3 className="text-xl font-semibold text-white text-center">
                    {faq.question}
                  </h3>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-[1.618rem] rounded-[0.618rem]
                    bg-gradient-to-br from-[#4DC035]/10 to-black border border-[#4DC035]/20
                    backface-hidden transform-style-preserve-3d rotate-y-180
                    group-hover:shadow-lg group-hover:shadow-[#4DC035]/10 transition-shadow duration-300
                    cursor-pointer md:cursor-default"
                >
                  <p className="text-white/90 text-center">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 4 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setShowAll((v) => !v);
                setFlippedIndex(null);
              }}
              className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {showAll ? 'View less' : 'View more'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}