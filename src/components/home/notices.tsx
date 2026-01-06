"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const notices = [
    {
        id: 1,
        title: "Public Warning Notice",
        date: "Oct 20, 2024",
        description: "This is to inform the general public that Ibn Sina Trust is a humanitarian and healthcare-oriented organization. For several decades, it has been providing healthcare services with a 25% discount on all types of diagnostic services in Dhaka and various other districts across Bangladesh, earning a strong reputation and public trust through its continuous service and welfare activities. \n\nHowever, taking advantage of the goodwill and reputation of Ibn Sina Trust, certain dishonest individuals, brokers, and fraud syndicates have been misusing the name and logo of Ibn Sina Trust at different times. By displaying banners of diagnostic and healthcare institutions, they are luring members of the public with attractive and high-paying job offers and unlawfully collecting large sums of money, thereby damaging the reputation of Ibn Sina Trust. \n\nIn view of the above, all concerned are specially requested to remain cautious. Ibn Sina Trust does not engage in any financial transactions with individuals for recruitment purposes, nor does it publish job advertisements through any medium other than its official website and nationally circulated daily newspapers. If anyone demands money in the name of providing employment, please report the matter to the nearest police station or contact us directly. \n\nAppropriate legal action will be taken in accordance with the laws of the land against any person(s) involved in such fraudulent activities. \n\nContact Address: \nIbn Sina Trust Head Office, House #48, Road #9/A, Dhanmondi, Dhaka, Bangladesh \nFor any information related to Ibn Sina Trust, please visit: www.ibnsinatrust.com",
        category: "Warning Notice",
    },
    {
        id: 2,
        title: "Free Health Checkup Camp",
        date: "Oct 15, 2024",
        description: "Join our free health checkup camp this weekend at the main branch. Registration starts at 8 AM.",
        category: "Event",
    },
    {
        id: 3,
        title: "New Cardiology Department",
        date: "Oct 10, 2024",
        description: "We are proud to announce the opening of our state-of-the-art Cardiology Department with expert surgeons.",
        category: "Announcement",
    },
    {
        id: 4,
        title: "Vaccination Drive: Flu Season",
        date: "Oct 05, 2024",
        description: "Protect yourself and your family. Book your flu shot today through our mobile app or website.",
        category: "Healthcare",
    },
];

export function Notices() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length);
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-3">
                            <Bell className="w-4 h-4 animate-bounce" />
                            Latest Updates
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-display">
                            Important Notices & Events
                        </h2>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-[4px] bg-white border border-gray-100 text-gray-400 hover:text-primary hover:bg-white hover:shadow-md transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-[4px] bg-white border border-gray-100 text-gray-400 hover:text-primary hover:bg-white hover:shadow-md transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden rounded-[32px]">
                        <div className="relative min-h-[500px] md:min-h-[450px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <div className="bg-white p-8 md:p-12 h-full flex flex-col md:flex-row items-start gap-8 rounded-[32px] border border-gray-100 shadow-sm overflow-y-auto">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 text-xs font-bold rounded-[4px] ${notices[currentIndex].category === "Warning Notice"
                                                    ? "bg-red-50 text-red-600"
                                                    : "bg-blue-50 text-primary"
                                                    }`}>
                                                    {notices[currentIndex].category}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    {notices[currentIndex].date}
                                                </div>
                                            </div>
                                            <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors ${notices[currentIndex].category === "Warning Notice"
                                                ? "text-red-700"
                                                : "text-text-heading group-hover:text-primary"
                                                }`}>
                                                {notices[currentIndex].title}
                                            </h3>
                                            <div className="text-gray-500 text-base md:text-lg leading-relaxed max-w-4xl whitespace-pre-line">
                                                {notices[currentIndex].description}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Simple dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {notices.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 transition-all duration-300 rounded-[4px] ${idx === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
        </section>
    );
}
