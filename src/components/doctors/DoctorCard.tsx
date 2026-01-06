"use client";

import Image from "next/image";
import { Doctor } from "@/data/doctor-data";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

interface DoctorCardProps {
    doctor: Doctor;
    onClick: (doctor: Doctor) => void;
}

export default function DoctorCard({ doctor, onClick }: DoctorCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col items-center p-8 text-center group cursor-pointer"
            onClick={() => onClick(doctor)}
        >
            {/* Circular Image Container */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md ring-1 ring-gray-100">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors">
                    {doctor.name}
                </h3>

                <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[200px] mx-auto">
                    {doctor.branchAddress.split(',')[0]}
                </p>

                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold uppercase tracking-wider">
                    {doctor.department}
                </div>
            </div>

            {/* Footer Actions */}
            <div className="w-full mt-8 pt-6 border-t border-gray-50 grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-tight hover:text-primary transition-colors">
                    <Calendar className="w-4 h-4" />
                    Availability
                </div>
                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-tight hover:text-primary transition-colors border-l border-gray-50">
                    <Phone className="w-4 h-4" />
                    Make a call
                </div>
            </div>
        </motion.div>
    );
}
