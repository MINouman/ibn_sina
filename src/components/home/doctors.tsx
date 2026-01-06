"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const doctors = [
    {
        name: "Dr. Azunyan U. Wu",
        role: "Founder & CEO",
        dept: "Neurology",
        image: "https://i.pravatar.cc/300?img=11",
    },
    {
        name: "Dr. Silverstone Gray",
        role: "Lead Neurologist",
        dept: "Neurology",
        image: "https://i.pravatar.cc/300?img=5",
    },
    {
        name: "Dr. Alan D. Watts",
        role: "Lead Surgeon",
        dept: "General Surgery",
        image: "https://i.pravatar.cc/300?img=32",
    },
    {
        name: "Dr. Oarack Babama",
        role: "Cardiologist",
        dept: "Cardiology",
        image: "https://i.pravatar.cc/300?img=60",
    },
    {
        name: "Dr. Sarah Mitchells",
        role: "Pediatrician",
        dept: "Pediatrics",
        image: "https://i.pravatar.cc/300?img=9",
    },
    {
        name: "Dr. James Wilson",
        role: "Dermatologist",
        dept: "Dermatology",
        image: "https://i.pravatar.cc/300?img=53",
    },
    {
        name: "Dr. Emily Taylor",
        role: "Oncologist",
        dept: "Oncology",
        image: "https://i.pravatar.cc/300?img=45",
    },
    {
        name: "Dr. Michael Chen",
        role: "Orthopedic",
        dept: "Orthopedics",
        image: "https://i.pravatar.cc/300?img=12",
    },
];

export function Doctors() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Our Team</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-display">
                        Our Expert Doctors
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-16">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Large Circular Image with hover border effect */}
                            <div className="w-52 h-52 mb-8 rounded-full relative p-1 bg-white shadow-2xl shadow-gray-200 transition-all duration-300 ring-0 ring-primary group-hover:ring-[6px] group-hover:shadow-primary/10">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-text-heading mb-2">{doctor.name}</h3>
                            <p className="text-primary font-bold text-sm mb-1">{doctor.role}</p>
                            <p className="text-gray-400 text-xs">{doctor.dept}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-[4px] bg-primary text-white font-bold tracking-wide hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        View all doctors
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
