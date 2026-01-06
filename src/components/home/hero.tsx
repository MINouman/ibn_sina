"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAppointment } from "@/context/appointment-context";

const HERO_SLIDES = [
    {
        id: 1,
        image: "/hero/arseny-togulev-DE6rYp1nAho-unsplash.jpg",
        subheading: "World Class Service",
        heading: "Take the world's best quality Treatment"
    },
    {
        id: 2,
        image: "/hero/etactics-inc-JkWMM8x1sLo-unsplash.jpg",
        subheading: "Expert Doctors",
        heading: "State of Art Medical Services"
    },
    {
        id: 3,
        image: "/hero/jonathan-borba-yQZkB9rbK7o-unsplash.jpg",
        subheading: "Modern Technology",
        heading: "Care that never quits on you"
    }
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { openModal } = useAppointment();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
            {/* Background Slider */}
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10" />
                    <Image
                        src={slide.image}
                        alt={slide.heading}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                    />
                </div>
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center pt-20 lg:pt-0 pb-12">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Text Content - Left Side */}
                    <div className="lg:col-span-6 space-y-8 pt-10 lg:pt-0">
                        <div className="space-y-4">
                            <h4 key={`sub-${currentSlide}`} className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm animate-fade-in">
                                {HERO_SLIDES[currentSlide].subheading}
                            </h4>
                            <h1 key={`head-${currentSlide}`} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display text-text-heading leading-[1.15] tracking-tight animate-fade-in">
                                {HERO_SLIDES[currentSlide].heading}
                            </h1>
                        </div>

                        <div className="pt-2">
                            <Button
                                size="lg"
                                className="rounded-[4px] bg-primary hover:bg-primary-dark text-white px-10 py-7 text-sm font-bold tracking-widest uppercase shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:translate-y-[-2px]"
                                onClick={openModal}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    {/* Right side spacer for correct grid alignment with background images */}
                    <div className="lg:col-span-6"></div>
                </div>
            </div>
        </section>
    );
}
