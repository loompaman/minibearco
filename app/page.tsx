'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStickyButton(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const exampleVideos = [
    {
      id: 'example1',
      title: 'Dancing Baby',
      description: 'Watch this baby groove to the beat with AI',
      thumbnail: '/videos/thumbnails/dancing-baby.png',
      videoUrl: '/videos/examples/dancing-baby.mp4',
      views: '2.3M views'
    },
    {
      id: 'example2',
      title: 'Groovy Baby',
      description: 'AI-powered dance transformation',
      thumbnail: '/videos/thumbnails/groovy-baby.png',
      videoUrl: '/videos/examples/groovy-baby.mp4',
      views: '1.8M views'
    },
    {
      id: 'example3',
      title: 'Colorful Baby',
      description: 'Viral dance moves that took the internet by storm',
      thumbnail: '/videos/thumbnails/colorful-baby.png',
      videoUrl: '/videos/examples/colorful-baby.mp4',
      views: '2.2M views'
    }
  ];

  const plans = [
    {
      id: 'single',
      title: 'Single Video',
      price: '$10',
      description: "One dancing AI video made from your content in 24 hours.",
      features: [
        '15-second HD video',
        'Ready in 24 hours',
        'Viral-optimized'
      ],
      paymentLink: 'https://buy.stripe.com/28ocPq77Dapv9u88wM',
      popular: false
    },
    {
      id: 'triple',
      title: 'Triple Pack',
      price: '$25',
      description: "Three dancing AI videos made from your content in 48 hours.",
      features: [
        'Three 15-second HD videos',
        'Ready in 48 hours',
        'Save $5'
      ],
      paymentLink: 'https://buy.stripe.com/6oE3eQ77DcxD7m05kB',
      popular: true
    },
    {
      id: 'tutorial',
      title: 'Tutorial Package',
      price: '$50',
      description: 'Learn to make unlimited viral dancing clips yourself.',
      features: [
        'Complete creation guide',
        'Premium templates',
        'Lifetime access'
      ],
      paymentLink: 'https://buy.stripe.com/cN2g1C2Rnapv9u814m',
      popular: false
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="w-full py-5 px-4 sm:py-6 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl">🕺</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vortox</h1>
          </div>
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold">
                  🔥 50M+ views generated • 10,000+ creators trust us
                </span>
              </div>
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 leading-relaxed">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Create Viral Dancing Videos
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Turn any video into viral dancing AI content that gets millions of views.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold text-center">
                  🔥 Limited Spots Left Today — Order fills up fast!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>🕺 Start Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const exampleSection = document.getElementById('examples');
                    exampleSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>See Examples</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">24-hour delivery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Money-back guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last hidden lg:block">
              <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl overflow-hidden group">
                <div className="aspect-[9/16] relative">
                  <video
                    src="/videos/examples/dancing-hampster.mp4"
                    className="w-full h-full object-cover"
                    poster="/videos/thumbnails/dancing-hampster.png"
                    controls
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.play().catch(() => {
                        // Handle autoplay failure silently
                      });
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 sm:p-6 pointer-events-none">
                    <div className="text-white">
                      <p className="text-xs sm:text-sm font-medium mb-1">✨ Viral Dancing Video</p>
                      <p className="text-lg sm:text-2xl font-bold">1.5M Views</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    VIRAL ✨
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Your video → Dancing version</p>
                <p className="text-xs text-purple-600 font-bold">in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Videos Section */}
      <div id="examples" className="w-full bg-white dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              EXAMPLES
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              See Our Work in Action
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {exampleVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-full max-w-[280px] mx-auto p-3 sm:p-4">
                  <div className="aspect-[9/16] relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden group">
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                      controls
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget;
                        video.play().catch(() => {
                          // Handle autoplay failure silently
                        });
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget;
                        video.pause();
                        video.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3 sm:p-4 pointer-events-none">
                      <div className="text-white">
                        <p className="text-xs font-medium mb-1">{video.title}</p>
                        <p className="text-sm font-bold">{video.views}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="w-full py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              PRICING
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Choose Your Plan
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              🔥 Limited spots available — order fills up fast!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-purple-500 ring-4 ring-purple-500/20 scale-105 lg:scale-110'
                    : selectedPlan === plan.id
                    ? 'border-purple-500'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-2 text-center">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className={`p-6 sm:p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h4>
                  <div className="flex items-baseline mb-4">
                    {plan.id === 'tutorial' ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                        <span className="text-base sm:text-lg text-gray-500 line-through">$100</span>
                        <span className="text-xs sm:text-sm text-green-500 font-semibold">50% OFF</span>
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-center text-sm sm:text-base shadow-md hover:shadow-lg"
                  >
                    Get Yours in 24h — Start Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIY Tool Section */}
      <div className="w-full py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to Create Videos Yourself? 🛠️
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Use our DIY tool to make unlimited dancing AI videos on your own.
          </p>
          <a
            href="https://vortoxai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>Visit vortoxai.com</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Sticky Buy Button */}
      {showStickyButton && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-5 sm:py-3.5 sm:px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            🕺 Buy Now
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-8 sm:py-10 bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🕺</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vortox</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Turn any video into viral dancing AI content
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Vortox. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative bg-black rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
            className="w-full h-auto"
              style={{ maxHeight: 'calc(90vh - 2rem)' }}
            />
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
