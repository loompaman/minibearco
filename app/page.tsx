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
      title: 'Bad Friends Podcast',
      description: 'Engaging baby podcast clip with fun animations',
      thumbnail: '/videos/thumbnails/bad-friends.jpg',
      videoUrl: '/videos/examples/bad-friends1.mp4',
      views: '2.3M views'
    },
    {
      id: 'example2',
      title: 'Joe Rogan Experience',
      description: 'Captivating baby podcast moment',
      thumbnail: '/videos/thumbnails/joe-rogan.png',
      videoUrl: '/videos/examples/joe-rogan.mp4',
      views: '1.8M views'
    },
    {
      id: 'example3',
      title: 'Catch Me Outside',
      description: 'Viral baby clip that took the internet by storm',
      thumbnail: '/videos/thumbnails/catch-me-outside.jpg',
      videoUrl: '/videos/examples/catch-me-outside.mp4',
      views: '2.2M views'
    }
  ];

  const plans = [
    {
      id: 'single',
      title: 'Single Video',
      price: '$10',
      description: "One baby video made from your content in 24 hours.",
      features: [
        '15-second HD video',
        'Ready in 24 hours',
        'Viral-optimized'
      ],
      paymentLink: 'https://buy.stripe.com/28ocPq77Dapv9u88wM'
    },
    {
      id: 'triple',
      title: 'Triple Pack',
      price: '$25',
      description: "Three baby videos made from your content in 48 hours.",
      features: [
        'Three 15-second HD videos',
        'Ready in 48 hours',
        'Save $5'
      ],
      paymentLink: 'https://buy.stripe.com/6oE3eQ77DcxD7m05kB'
    },
    {
      id: 'tutorial',
      title: 'Tutorial Package',
      price: '$50',
      description: 'Learn to make unlimited viral clips yourself.',
      features: [
        'Complete creation guide',
        'Premium templates',
        'Lifetime access',
        '1 free video included ($10 value)'
      ],
      paymentLink: 'https://buy.stripe.com/cN2g1C2Rnapv9u814m'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="w-full p-4 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🐻</span>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">MiniBearCo</h1>
          </div>
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 rounded-full px-3 py-1.5 mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold">
                  🔥 50M+ views generated • 10,000+ creators trust us
                </span>
              </div>
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 leading-relaxed">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Create Viral Baby Videos
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Turn any video into viral baby content that gets millions of views.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
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
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>👶 Start Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const exampleSection = document.getElementById('examples');
                    exampleSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
              <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden group">
                <div className="aspect-[9/16] relative">
                  <video
                    src="/videos/examples/rose.mp4"
                    className="w-full h-full object-cover"
                    poster="/videos/thumbnails/rose.png"
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
                      <p className="text-xs sm:text-sm font-medium mb-1">✨ Viral Baby Video</p>
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
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-xl p-2 sm:p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Your video → Baby version</p>
                <p className="text-xs text-purple-600 font-bold">in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Videos Section */}
      <div id="examples" className="w-full bg-white dark:bg-gray-800 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
            See Our Work in Action
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {exampleVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full max-w-[280px] mx-auto p-3 sm:p-4">
                  <div className="aspect-[9/16] relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden group">
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
      <div id="pricing" className="w-full py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Choose Your Plan
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base">
            🔥 Limited spots available — order fills up fast!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'border-purple-500 scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}
              >
                <div className="p-6 sm:p-8">
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
                    className="block w-full py-3 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-center text-sm sm:text-base"
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
      <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Want to Make These Yourself? 🛠️
          </h3>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
            Check out our DIY tool for creating unlimited baby videos on your own!
          </p>
          <a
            href="https://thevortox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Visit TheVortox.com</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            👶 Buy Now
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full p-3 sm:p-4 mt-12 sm:mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center space-y-1">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MiniBearCo.
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
            className="relative bg-black rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
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