"use client";

import Image from "next/image";

const galleryImages = [
    { src: "/Gallery/01.png", alt: "Hospital Facility 1", className: "md:col-span-8 md:row-span-2" },
    { src: "/Gallery/02.png", alt: "Hospital Facility 2", className: "md:col-span-4 md:row-span-1" },
    { src: "/Gallery/03.png", alt: "Hospital Facility 3", className: "md:col-span-4 md:row-span-1" },
    { src: "/Gallery/04.png", alt: "Hospital Facility 4", className: "md:col-span-12 md:row-span-1" },
];

export function Gallery() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Visual Tour</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-display">
                        Our World-Class Facilities & Activity
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
