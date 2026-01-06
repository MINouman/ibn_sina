"use client";

import Image from "next/image";
import { Doctor } from "@/data/doctor-data";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Clock, MapPin, Building2, User, GraduationCap, Stethoscope, Languages, Landmark, Calendar, type LucideIcon } from "lucide-react";

interface DoctorProfileModalProps {
    doctor: Doctor | null;
    onClose: () => void;
}

export default function DoctorProfileModal({ doctor, onClose }: DoctorProfileModalProps) {
    if (!doctor) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-text-heading/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100/50 hover:bg-gray-100 text-gray-500 transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="p-8 md:p-12">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:items-start mb-12 border-b border-gray-100 pb-12">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 shadow-lg border-8 border-gray-50">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-display">
                                        {doctor.name}
                                    </h2>
                                    <p className="text-primary font-bold text-lg">{doctor.specialty}</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                    <InfoItem icon={GraduationCap} label="Qualifications" value={doctor.qualifications} color="text-green-600" />
                                    <InfoItem icon={User} label="Designation" value={doctor.designation} color="text-gray-600" />
                                    <InfoItem icon={Stethoscope} label="Specialty" value={doctor.specialty} color="text-green-600" />
                                    <InfoItem icon={Building2} label="Department" value={doctor.department} color="text-blue-600" />
                                    <InfoItem icon={Languages} label="Language Spoken" value={doctor.languagesSpoken.join(", ")} color="text-gray-600" />
                                    <InfoItem icon={Landmark} label="Institute" value={doctor.institute} color="text-gray-600" />
                                </div>
                            </div>
                        </div>

                        {/* Schedule & Location Section */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-xl font-bold text-text-heading flex items-center gap-3">
                                    <span className="w-1 h-6 bg-primary rounded-full" />
                                    Chamber Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-gray-50 rounded-2xl space-y-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-white rounded-lg text-primary shadow-sm border border-gray-100">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Chamber Time</p>
                                                <p className="font-bold text-text-heading">{doctor.chamberTime}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-white rounded-lg text-red-500 shadow-sm border border-gray-100">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Off Days</p>
                                                <p className="font-bold text-text-heading">{doctor.offDays.join(", ")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                            <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Floor No.</p>
                                            <p className="font-bold text-text-heading">{doctor.floorNumber}</p>
                                        </div>
                                        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                            <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Room No.</p>
                                            <p className="font-bold text-text-heading">{doctor.roomNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-xl font-bold text-text-heading flex items-center gap-3">
                                    <span className="w-1 h-6 bg-primary rounded-full" />
                                    Appointment & Location
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-primary text-white rounded-2xl space-y-4 shadow-lg shadow-primary/20">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 bg-white/20 rounded-lg text-white backdrop-blur-md">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">For Appointment</p>
                                                <p className="text-xl font-bold">{doctor.appointmentContact}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-2xl flex items-start gap-4 border border-gray-100 shadow-sm">
                                        <div className="p-2.5 bg-white rounded-lg text-primary shadow-sm border border-gray-100">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Branch Name & Address</p>
                                            <p className="font-bold text-text-heading mb-1">{doctor.branchName}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{doctor.branchAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note Section */}
                        <div className="mt-12 p-6 bg-red-50 border border-red-100 rounded-2xl text-[13px] text-red-600 font-medium">
                            <p>Note: This schedule is based on normal doctor clinic hours. As there may be changes to the schedule from time to time, please wait for our contact center to confirm your appointment timing.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

function InfoItem({ icon: Icon, label, value, color }: { icon: LucideIcon; label: string; value: string; color: string }) {
    return (
        <div className="flex items-start gap-3">
            <Icon className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                <p className={`text-sm font-bold ${color}`}>{value}</p>
            </div>
        </div>
    );
}
