'use client';

import React, { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700']
});

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
      id: 'example0',
      type: 'ai-dancing',
      title: 'Dancing Hamster',
      description: 'AI dancing transformation from a single clip',
      thumbnail: '/videos/thumbnails/dancing-hampster.png',
      videoUrl: '/videos/examples/dancing-hampster.mp4',
      views: '1.5M views'
    },
    {
      id: 'seedance1',
      type: 'seedance',
      title: 'Action Scene',
      description: 'Seedance 2.0 action-style transformation',
      thumbnail: '/videos/thumbnails/action.png',
      videoUrl: '/videos/examples/action.mp4',
      views: 'New'
    },
    {
      id: 'seedance2',
      type: 'seedance',
      title: 'Anime Style',
      description: 'Seedance 2.0 anime-style transformation',
      thumbnail: '/videos/thumbnails/anime.png',
      videoUrl: '/videos/examples/anime.mp4',
      views: 'New'
    },
    {
      id: 'seedance3',
      type: 'seedance',
      title: 'Product Ad',
      description: 'Seedance 2.0 ad-style transformation',
      thumbnail: '/videos/thumbnails/ad.png',
      videoUrl: '/videos/examples/ad.mp4',
      views: 'New'
    },
    {
      id: 'example1',
      type: 'ai-dancing',
      title: 'Dancing Baby',
      description: 'Watch this baby groove to the beat with AI',
      thumbnail: '/videos/thumbnails/dancing-baby.png',
      videoUrl: '/videos/examples/dancing-baby.mp4',
      views: '2.3M views'
    },
    {
      id: 'example2',
      type: 'ai-dancing',
      title: 'Groovy Baby',
      description: 'AI-powered dance transformation',
      thumbnail: '/videos/thumbnails/groovy-baby.png',
      videoUrl: '/videos/examples/groovy-baby.mp4',
      views: '1.8M views'
    },
  ];

  const seedanceExamples = exampleVideos.filter((video) => video.type === 'seedance');
  const aiDancingExamples = exampleVideos.filter((video) => video.type === 'ai-dancing');

  const plans = [
    {
      id: 'single',
      title: '1 Video',
      price: '$15',
      description: 'One Seedance 2.0 or AI dancing video made from your content in 24 hours.',
      features: [
        '15-second HD video',
        'Seedance 2.0 or AI dancing',
        'Ready in 24 hours'
      ],
      paymentLink: 'https://buy.stripe.com/4gM4gz6cXaho3h75OH8IU0r',
      popular: false
    },
    {
      id: 'triple',
      title: '3 Videos',
      price: '$40',
      description: 'Three Seedance 2.0 or AI dancing videos made from your content in 48 hours.',
      features: [
        'Three 15-second HD videos',
        'Seedance 2.0 or AI dancing',
        'Ready in 48 hours'
      ],
      paymentLink: 'https://buy.stripe.com/5kQ4gz9p92OWg3T2Cv8IU0s',
      popular: true
    },
    {
      id: 'six',
      title: '6 Videos',
      price: '$70',
      description: 'Six Seedance 2.0 or AI dancing videos made from your content in 72 hours.',
      features: [
        'Six 15-second HD videos',
        'Seedance 2.0 or AI dancing',
        'Ready in 72 hours'
      ],
      paymentLink: 'https://buy.stripe.com/aFafZhatdcpw8Bra4X8IU0t',
      popular: false
    }
  ];

  return (
    <div className={`${jakarta.className} relative flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900`}>
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-300/60 blur-[90px] animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-16 h-[28rem] w-[28rem] rounded-full bg-indigo-300/55 blur-[90px] animate-pulse [animation-delay:0.6s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-sky-300/50 blur-[90px] animate-pulse [animation-delay:1.2s]" />
      {/* Header */}
      <header className="w-full py-5 px-4 sm:py-6 sticky top-0 z-10 bg-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white text-lg font-semibold shadow-md shadow-blue-500/30">
              V
            </div>
            <h1 className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-slate-900`}>Vortox</h1>
          </div>
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition hover:from-blue-700 hover:to-indigo-600 shadow-md shadow-blue-500/20"
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
              <div className="inline-flex items-center border border-slate-200 rounded-full px-4 py-2 mb-6 bg-white/80 shadow-sm">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                  🚀 Seedance 2.0 is live • Buy viral-ready videos
                </span>
              </div>
              <h2 className={`${grotesk.className} text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8 leading-relaxed text-slate-900`}>
                Create Viral AI Videos
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Seedance 2.0 is here. We customize your Seedance 2.0 videos for you — especially if you can’t access it because it currently requires a Chinese phone number.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="text-red-600 text-xs sm:text-sm font-semibold text-center">
                  🔥 Limited Spots Left Today — Order fills up fast!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/25"
                >
                  <span>✨ Create Seedance 2.0 Video</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-slate-900 border border-slate-200 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <span>🕺 Create AI Dancing Video</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-500">
                Choose Seedance 2.0 or classic AI dancing — both available at checkout.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-slate-600">24-hour delivery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base text-slate-600">Money-back guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last hidden lg:block">
              <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl shadow-blue-500/10 overflow-hidden group">
                <div className="aspect-[9/16] relative">
                  <video
                    src="/videos/examples/willsmith.mp4"
                    className="w-full h-full object-cover"
                    poster="/videos/thumbnails/willsmith.png"
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
                      <p className="text-xs sm:text-sm font-medium mb-1">✨ Seedance 2.0 Video</p>
                      <p className="text-lg sm:text-2xl font-bold">1.5M Views</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300 shadow-xl">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    VIRAL ✨
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-200">
                <p className="text-xs text-slate-600 font-medium">Your video → Seedance 2.0 version</p>
                <p className="text-xs text-blue-600 font-bold">in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Videos Section */}
      <div id="examples" className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
              EXAMPLES
            </span>
            <h3 className={`${grotesk.className} text-3xl sm:text-4xl font-semibold text-slate-900`}>
              See Our Work in Action
            </h3>
          </div>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 text-sm sm:text-base font-semibold px-4 py-1.5 border border-blue-100">
                  Seedance 2.0
                </span>
                <p className="text-base sm:text-lg font-semibold text-slate-800">
                  Customized Seedance 2.0 videos
                </p>
              </div>
              {seedanceExamples.length === 0 ? (
                <div className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-blue-50/60 px-6 py-8 text-center">
                  <p className="text-base sm:text-lg font-semibold text-slate-900">Seedance 2.0 examples coming soon</p>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Right now all examples are AI dancing videos.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                  {seedanceExamples.map((video) => (
                    <div
                      key={video.id}
                      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-full max-w-[280px] mx-auto p-3 sm:p-4">
                        <div className="aspect-[9/16] relative bg-slate-100 rounded-2xl overflow-hidden group">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3 sm:p-4 pointer-events-none">
                            <div className="text-white">
                              <p className="text-xs font-medium mb-1">{video.title}</p>
                              <p className="text-sm font-bold">{video.views}</p>
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300">
                              <svg
                                className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
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
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                          {video.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-sm sm:text-base font-semibold px-4 py-1.5 border border-slate-200">
                  AI Dancing
                </span>
                <p className="text-base sm:text-lg font-semibold text-slate-800">
                  Classic AI dancing videos
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {aiDancingExamples.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-full max-w-[280px] mx-auto p-3 sm:p-4">
                      <div className="aspect-[9/16] relative bg-slate-100 rounded-2xl overflow-hidden group">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3 sm:p-4 pointer-events-none">
                          <div className="text-white">
                            <p className="text-xs font-medium mb-1">{video.title}</p>
                            <p className="text-sm font-bold">{video.views}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
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
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
              PRICING
            </span>
            <h3 className={`${grotesk.className} text-3xl sm:text-4xl font-semibold text-slate-900 mb-3`}>
              Choose Your Plan
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              🔥 Limited spots available — order fills up fast!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-blue-500 ring-4 ring-blue-500/15 scale-105 lg:scale-110'
                    : selectedPlan === plan.id
                    ? 'border-blue-500'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-bold py-2 text-center">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className={`p-6 sm:p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h4 className={`${grotesk.className} text-xl sm:text-2xl font-semibold text-slate-900 mb-2`}>{plan.title}</h4>
                  <div className="flex items-baseline mb-4">
                    {plan.id === 'tutorial' ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{plan.price}</span>
                        <span className="text-base sm:text-lg text-slate-500 line-through">$100</span>
                        <span className="text-xs sm:text-sm text-emerald-600 font-semibold">50% OFF</span>
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 mr-2 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-300 text-center text-sm sm:text-base hover:from-blue-700 hover:to-indigo-600"
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
      <div className="w-full py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className={`${grotesk.className} text-3xl sm:text-4xl font-semibold text-white mb-4`}>
            Want to Create Videos Yourself? 🛠️
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Use our DIY tool to make unlimited dancing AI videos on your own.
          </p>
          <a
            href="https://vortoxai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-100 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Visit VortoxAI.com</span>
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
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold py-3 px-5 sm:py-3.5 sm:px-6 rounded-full shadow-xl shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            🕺 Buy Now
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-8 sm:py-10 bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white text-sm font-semibold shadow-md shadow-blue-500/30">
              V
            </div>
            <span className={`${grotesk.className} text-xl font-semibold text-slate-900`}>Vortox</span>
          </div>
          <p className="text-sm text-slate-500 mb-2">
            Turn any video into viral Seedance 2.0 content
          </p>
          <p className="text-xs text-slate-400">
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
