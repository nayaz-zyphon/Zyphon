"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stars from "./Stars";
import Check from "../public/Check";
import ReviewDesign from "../public/ReviewDesign";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (activeIndex - 1 + reviewsList.length) % reviewsList.length;
  const nextIndex = (activeIndex + 1) % reviewsList.length;
  const visibleCards = [prevIndex, activeIndex, nextIndex];

  const COLORS = [
    "#FAD4D4", "#FFE7A0", "#C9F4AA", "#AEE2FF",
    "#D5CCFF", "#FFC6FF", "#F9E2AE", "#B5EAEA"
  ];

  function getColorByName(name: string) {
    const index = name.length % COLORS.length;
    return COLORS[index];
  }

  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();

    const first = parts[0][0];
    const last = parts[parts.length - 1][0];
    return (first + last).toUpperCase();
  }

  return (
    <div
      id="reviews"
      className="font-[Urbanist] bg-linear-to-b from-[#30303547] from-40% t-[#3030350A] sm:rounded-2xl lg:px-20 md:px-10 px-5 lg:py-16 sm:py-12 py-10 flex flex-col sm:gap-10 gap-4 items-center relative z-0"
    >
      <div>
        <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium text-center text-white">
          Customer Reviews
        </h2>
        <p className="mt-2 md:max-w-7xl w-full md:text-base text-sm text-center text-gray-300">
          Over 3000+ satisfied Apple device customers in Bangalore trust Zyphon
          for iPhone, iPad, MacBook repairs
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center w-full overflow-hidden sm:h-[420px] h-[380px]">
        <AnimatePresence>
          {reviewsList.map((review, idx) => {
            if (!visibleCards.includes(idx)) return null;

            let x = 0;
            let scale = 0.6;
            let opacity = 0.5;
            let zIndex = 0;

            if (idx === activeIndex) {
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (idx === prevIndex) {
              x = -300; // shift left
              opacity = 0.7;
              zIndex = 20;
            } else if (idx === nextIndex) {
              x = 300; // shift right
              opacity = 0.7;
              zIndex = 20;
            }

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ x, scale, opacity, zIndex }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute shrink-0 sm:w-[80%] w-full max-w-md md:p-6 p-4 rounded-2xl bg-linear-to-b from-[#161616] from-60% to-[#0a0a0a] border border-gray-700"
              >
                <Stars rating={review.rating} />

                <p className="my-6 text-gray-300 md:text-base text-sm leading-relaxed min-h-[130px]">
                  {review.reviewText}
                </p>

                <div className="my-6 bg-linear-to-r from-white to-[#1B1B1B] to-98% h-px" />

                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-black"
                      style={{ backgroundColor: getColorByName(review.reviewer.name) }}
                    >
                      {getInitials(review.reviewer.name)}
                    </div>

                    <div>
                      <p className="font-medium md:text-lg text-sm text-white">
                        {review.reviewer.name}
                      </p>
                    </div>
                  </div>

                  {review.verified && (
                    <span className="text-sm text-white flex flex-row items-center gap-1">
                      <Check />
                      Verified
                    </span>
                  )}
                </div>

                <div className="absolute right-1/12 md:-top-12 -top-6 md:w-22 md:h-22 w-12 h-12 object-contain">
                  <ReviewDesign />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

const reviewsList = [
  {
    id: 1,
    rating: 5,
    reviewText:
      "Got my iPhone screen repaired here and the experience was excellent. Quick service, genuine parts, and the phone feels brand new again. Definitely coming back if I need anything fixed.",
    reviewer: {
      name: 'Lohith J',
      email: '',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
    },
    verified: true,
  },
  {
    id: 2,
    rating: 5,
    reviewText:
      "My MacBook had heating issues for months and Apple quoted a huge amount. These guys fixed it in a day at half the price. Super professional and trustworthy repair center.",
    reviewer: {
      name: 'Neha Kumari',
      email: 'K.R.Mastrangelo@Outlook.Com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 3,
    rating: 5,
    reviewText:
      "Amazing service! Took my Apple Watch which wasn’t charging, and they fixed it within a couple of hours. Very transparent and friendly staff. Highly recommend.",
    reviewer: {
      name: 'Sri Vani',
      email: 'alice.brown@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 4,
    rating: 5,
    reviewText:
      "Gave my iPhone for battery replacement. The pickup and drop service made it super convenient. Battery backup feels like new now. Excellent job!",
    reviewer: {
      name: 'Sunil',
      email: 'rahul.k@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 5,
    rating: 5,
    reviewText:
      "Very satisfied with the repair. My MacBook keyboard was not working, and they repaired it quickly at a reasonable price. Truly reliable service.",
    reviewer: {
      name: 'Rahul Kumar',
      email: 'rahul.k@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 6,
    rating: 5,
    reviewText:
      "Fast and professional! I had a cracked Apple Watch screen, and they replaced it perfectly. Looks flawless. Really happy with the service.",
    reviewer: {
      name: 'Preethy',
      email: 'rahul.k@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 7,
    rating: 5,
    reviewText:
      "One of the best repair centers I’ve visited. My iPhone wasn’t turning on after a water spill, and they restored it completely. Lifesavers!",
    reviewer: {
      name: 'Rahul Kumar',
      email: 'rahul.k@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
  {
    id: 8,
    rating: 5,
    reviewText:
      "Excellent customer service. They diagnosed my MacBook issue instantly and fixed it the same day. Highly recommend for any Apple repairs.",
    reviewer: {
      name: 'Shweetha',
      email: 'rahul.k@example.com',
      avatar: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
    },
    verified: true,
  },
];

export default Review;
