"use client";

import { useAppointment } from "@/context/appointment-context";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Stats() {
    const { openModal } = useAppointment();

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0EA5E9_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Main Feature Block - Left Side (Takes 2 columns on large screens, 1 on mobile/tablet if needed, but bento usually splits differently. Let's try 1:2 split or specific grid areas) 
                       Actually, looking at the reference image, the left block is large (maybe 40-50%) and right has 4 cards.
                       Let's use a 12 column grid for flexibility.
                    */}

                    {/* Large About Block */}
                    <div className="lg:col-span-1 bg-primary rounded-[20px] p-8 md:p-12 text-white flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                        <div className="relative z-10">
                            <Link
                                href="/#our-units-map"
                                className="inline-flex items-center text-sm font-bold text-text-heading bg-gray-50 px-4 py-2 rounded-[4px] hover:bg-gray-100 transition-colors mt-auto self-start group"
                            >
                                View full map <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight mb-6">
                                STATE OF THE ART <br /> Also MEDICAL SERVICE
                            </h2>
                            <p className="text-blue-50 text-base leading-relaxed max-w-sm mb-8">
                                Ibn Sina Trust is your ultimate healthcare partner, offering expertise, quality care, and a passion for patient well-being. Our dedicated team is here to ensure your health journey is safe and comfortable.
                            </p>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                    </div>

                    {/* Right Side Stats Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

                        {/* Stat Card 1: Patients */}
                        <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 min-h-[220px]">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-5xl font-bold text-text-heading mb-2">1M+</h3>
                                    <p className="text-gray-500 font-medium">Patients Served</p>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-[4px] text-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                            </div>
                            <button
                                onClick={openModal}
                                className="self-start mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-gray-50 text-text-heading font-bold text-sm hover:bg-primary hover:text-white transition-all group"
                            >
                                Make an appointment
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Stat Card 2: Locations */}
                        <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 min-h-[220px]">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-5xl font-bold text-text-heading mb-2">20+</h3>
                                    <p className="text-gray-500 font-medium">Diagnostic Units</p>
                                </div>
                                <div className="p-3 bg-orange-50 rounded-[4px] text-orange-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                            </div>
                            <Link href="/#our-units-map" className="self-start mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-gray-50 text-text-heading font-bold text-sm hover:bg-primary hover:text-white transition-all group">
                                View full map
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Stat Card 3: Image/Experience (Visual Break) */}
                        <div className="bg-text-heading rounded-[20px] overflow-hidden relative min-h-[220px] group">
                            <Image
                                src="/hero/arseny-togulev-DE6rYp1nAho-unsplash.jpg" // Reusing hero image for internal visual
                                alt="Medical Team"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-4xl font-bold text-white mb-1">44+</h3>
                                <p className="text-gray-300 font-medium">Years of Service</p>
                            </div>
                        </div>

                        {/* Stat Card 4: Doctors */}
                        <div className="bg-white rounded-[20px] p-8 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 min-h-[220px]">
                            <h3 className="text-5xl font-bold text-text-heading mb-2">500+</h3>
                            <p className="text-gray-500 font-medium mb-6">Expert Doctors</p>

                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 overflow-hidden">
                                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Doctor" width={40} height={40} />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold z-10">
                                    +
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
