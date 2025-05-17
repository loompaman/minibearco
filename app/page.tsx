'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
      title: 'Rose Podcast',
      description: 'Heartwarming baby podcast clip',
      thumbnail: '/videos/thumbnails/rose.png',
      videoUrl: '/videos/examples/rose.mp4',
      views: '1.5M views'
    }
  ];

  const plans = [
    {
      id: 'single',
      title: 'Single Video',
      price: '$10',
      description: "Submit a baby podcast or your own video and we'll turn it into an adorable baby video (up to 15 seconds, HD, ready in 24 hours).",
      features: [
        '15-second video clip',
        'HD quality',
        'Ready in 24 hours',
        'One-time purchase'
      ],
      paymentLink: 'https://buy.stripe.com/28ocPq77Dapv9u88wM'
    },
    {
      id: 'triple',
      title: 'Triple Pack',
      price: '$25',
      description: "Submit three baby podcasts or your own videos and get three adorable baby videos (up to 15 seconds each, HD, ready in 48 hours).",
      features: [
        'Three 15-second video clips',
        'HD quality',
        'Ready in 48 hours',
        'Save $5 compared to single videos'
      ],
      paymentLink: 'https://buy.stripe.com/6oE3eQ77DcxD7m05kB'
    },
    {
      id: 'tutorial',
      title: 'Tutorial Package',
      price: '$50',
      description: 'Learn to create your own videos',
      features: [
        'Complete video creation guide',
        'Access to premium templates',
        'Step-by-step instructions',
        'Lifetime access'
      ],
      paymentLink: 'https://buy.stripe.com/cN2g1C2Rnapv9u814m'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Parent & Content Creator",
      image: "/testimonials/sarah.jpg",
      text: "My baby's channel went from 0 to 100K followers in just 2 months thanks to these videos! The quality is amazing.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Daycare Owner",
      image: "/testimonials/michael.jpg",
      text: "These videos are perfect for our daycare. The kids love them and parents keep asking where we get them from!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma R.",
      role: "Early Education Teacher",
      image: "/testimonials/emma.jpg",
      text: "The educational value is incredible. My students are more engaged than ever with these videos.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Viral-Ready Content",
      description: "Optimized for maximum engagement and sharing potential"
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Get your videos within 24-48 hours"
    },
    {
      icon: "🎨",
      title: "Professional Quality",
      description: "HD videos with engaging animations and effects"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "Average 2M+ views per video for our clients"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to receive my videos?",
      answer: "Single videos are delivered within 24 hours, while the triple pack takes 48 hours. The tutorial package is available immediately after purchase."
    },
    {
      question: "Can I customize the videos?",
      answer: "Yes! You can provide specific themes, colors, and content preferences. Our team will work with you to create exactly what you need."
    },
    {
      question: "What if I'm not satisfied with the videos?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your videos, we'll revise them or provide a full refund."
    },
    {
      question: "Can I use these videos commercially?",
      answer: "Absolutely! You get full commercial rights to all videos you purchase. Use them on any platform for your business."
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
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Create Viral Baby Content
                </span>
                <span className="block text-gray-900 dark:text-white mt-2">
                  in Minutes
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Create baby clips that get millions of views with our professionally crafted content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Get Your First Video</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const exampleSection = document.getElementById('examples');
                    exampleSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>See Examples</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">24-hour delivery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Money-back guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-[280px] mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[9/16] relative">
                  <video
                    src="/videos/examples/bad-friends1.mp4"
                    className="w-full h-full object-cover"
                    poster="/videos/thumbnails/bad-friends.jpg"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 pointer-events-none">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">Featured Video</p>
                      <p className="text-2xl font-bold">2.3M Views</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Videos Section */}
      <div id="examples" className="w-full bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            See Our Work in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exampleVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-[280px] mx-auto p-4">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 pointer-events-none">
                      <div className="text-white">
                        <p className="text-xs font-medium mb-1">{video.title}</p>
                        <p className="text-sm font-bold">{video.views}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-110 group-hover:scale-125 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
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

      {/* Waitlist Section */}
      <section className="max-w-2xl mx-auto my-12 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">🐻</span>
          <h2 className="text-3xl font-bold text-center">Early Access: Create Your Own AI Baby Videos!</h2>
          <span className="text-3xl">🎬</span>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300 text-center text-lg">
          Be the first to try our upcoming tool that lets you generate  AI baby videos in seconds. Join the waitlist for exclusive early access and updates!
        </p>
        <iframe
          src="https://tally.so/r/nrWAPv?hideTitle=1"
          width="100%"
          height="300"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Minibearco Waitlist"
          className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
          style={{ minHeight: 300 }}
        ></iframe>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'border-purple-500 scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}
              >
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h4>
                  <div className="flex items-baseline mb-4">
                    {plan.id === 'tutorial' ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                        <span className="text-lg text-gray-500 line-through">$100</span>
                        <span className="text-sm text-green-500 font-semibold">50% OFF</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.paymentLink ? (
                    <a
                      href={plan.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-6 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-center"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <button 
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-300 ${
                        selectedPlan === plan.id
                          ? 'bg-purple-600 hover:bg-purple-700'
                          : 'bg-purple-500 hover:bg-purple-600'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Plan Actions */}
          {selectedPlan && !plans.find(p => p.id === selectedPlan)?.paymentLink && (
            <div className="mt-12 text-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={() => {
                  // Handle purchase logic here
                  alert('Purchase functionality will be implemented here');
                }}
              >
                Purchase Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-4 mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
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
            className="relative bg-black rounded-lg shadow-xl max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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