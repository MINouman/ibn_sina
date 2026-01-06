"use client";

import { useAppointment } from "@/context/appointment-context";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, X, ChevronLeft, MapPin, Search, Stethoscope, Clock, ShieldCheck, Banknote, UserRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { mockDoctors, departments, branches, Doctor } from "@/data/doctor-data";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Components ---

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        className={cn(
            "flex h-11 w-full rounded-[4px] border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            className
        )}
        {...props}
    />
);

const Select = ({ options, placeholder, value, onChange }: { options: string[], placeholder: string, value: string, onChange: (val: string) => void }) => (
    <div className="relative">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex h-11 w-full appearance-none items-center justify-between rounded-[4px] border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        <ChevronLeft className="absolute right-3 top-3.5 h-4 w-4 rotate-[-90deg] text-gray-400 pointer-events-none" />
    </div>
);

// --- Calendar Component ---
const CustomCalendar = ({ selectedDate, onSelect }: { selectedDate: Date | null, onSelect: (d: Date) => void }) => {
    const today = new Date();
    // Generate next 14 days
    const dates = [];
    for (let i = 0; i < 14; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        dates.push(d);
    }

    // Helper to format date
    const formatDate = (date: Date) => {
        return {
            day: date.toLocaleDateString('en-US', { weekday: 'short' }), // Mon
            num: date.getDate(), // 12
        };
    };

    return (
        <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" /> Select Date
            </h4>
            <div className="grid grid-cols-7 gap-2">
                {dates.map((date, idx) => {
                    const { day, num } = formatDate(date);
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return (
                        <button
                            key={idx}
                            onClick={() => onSelect(date)}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 rounded-[4px] text-xs transition-all border",
                                isSelected
                                    ? "bg-primary text-white border-primary shadow-sm scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:bg-blue-50/50"
                            )}
                        >
                            <span className={cn("text-[10px] font-medium uppercase mb-0.5", isSelected ? "text-white/80" : "text-gray-400")}>{day}</span>
                            <span className="text-sm font-bold">{num}</span>
                        </button>
                    )
                })}
            </div>
            {selectedDate && (
                <div className="mt-3 text-center text-xs text-primary font-medium bg-primary/5 py-1.5 rounded">
                    Selected: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            )}
        </div>
    );
};


export function AppointmentModal() {
    const { isOpen, closeModal } = useAppointment();
    const [step, setStep] = useState<'search' | 'book'>('search');
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    // Search State
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDept, setSelectedDept] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");

    // Booking State
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Reset when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            // Delay reset to allow exit animation
            setTimeout(() => {
                setStep('search');
                setSelectedDoctor(null);
                setSearchTerm("");
                setSelectedDept("");
                setSelectedBranch("");
                setSelectedDate(null);
            }, 300);
        }
    }, [isOpen]);

    // Filter Doctors
    const filteredDoctors = useMemo(() => {
        return mockDoctors.filter(doc => {
            const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDept = selectedDept ? doc.department === selectedDept : true;
            const matchesBranch = selectedBranch ? doc.branchName === selectedBranch : true;
            return matchesName && matchesDept && matchesBranch;
        });
    }, [searchTerm, selectedDept, selectedBranch]);

    const handleSelectDoctor = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setStep('book');
    };

    const handleBack = () => {
        setStep('search');
        setSelectedDoctor(null);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white w-full max-w-5xl h-[85vh] md:h-auto md:max-h-[90vh] rounded-xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                                <div className="flex items-center gap-3">
                                    {step === 'book' && (
                                        <button onClick={handleBack} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                    )}
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {step === 'search' ? 'Find a Doctor' : 'Book Appointment'}
                                    </h2>
                                </div>
                                <button onClick={closeModal} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-gray-400">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto bg-gray-50/30">
                                {/* STEP 1: Search View */}
                                {step === 'search' && (
                                    <div className="p-6">
                                        {/* Filters */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                            <div className="relative">
                                                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    placeholder="Search by doctor name..."
                                                    className="pl-10"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                            </div>
                                            <Select
                                                options={departments}
                                                placeholder="Select Department"
                                                value={selectedDept}
                                                onChange={setSelectedDept}
                                            />
                                            <Select
                                                options={branches}
                                                placeholder="Select Branch"
                                                value={selectedBranch}
                                                onChange={setSelectedBranch}
                                            />
                                        </div>

                                        {/* Results */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {filteredDoctors.map(doctor => (
                                                <div
                                                    key={doctor.id}
                                                    onClick={() => handleSelectDoctor(doctor)}
                                                    className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group flex items-start gap-4"
                                                >
                                                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100 group-hover:border-primary/50 transition-colors">
                                                        <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-bold text-gray-900 truncate group-hover:text-primary transition-colors">{doctor.name}</h3>
                                                        <p className="text-xs text-primary font-medium mb-1">{doctor.specialty}</p>
                                                        <p className="text-xs text-gray-500 truncate mb-2">{doctor.qualifications}</p>
                                                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                                                            <MapPin className="w-3 h-3" />
                                                            <span className="truncate">{doctor.branchName.split(',')[0]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {filteredDoctors.length === 0 && (
                                                <div className="col-span-full text-center py-12 text-gray-400">
                                                    No doctors found matching your criteria.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: Booking View */}
                                {step === 'book' && selectedDoctor && (
                                    <div className="flex flex-col lg:flex-row h-full">
                                        {/* Design Left: Booking Form */}
                                        <div className="flex-1 p-6 lg:p-8 order-2 lg:order-1">
                                            <div className="max-w-xl mx-auto space-y-8">
                                                {/* Calendar */}
                                                <div>
                                                    <CustomCalendar selectedDate={selectedDate} onSelect={setSelectedDate} />
                                                </div>

                                                {/* Inputs */}
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Patient Name</label>
                                                            <div className="relative">
                                                                <UserRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                                <Input placeholder="Full Name" className="pl-10 h-12 bg-gray-50/50" />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Mobile Number</label>
                                                            <div className="relative">
                                                                <span className="absolute left-3 top-3 h-5 w-8 text-gray-500 text-sm font-medium border-r border-gray-300 pr-2 flex items-center">+88</span>
                                                                <Input placeholder="01XXX-XXXXXX" className="pl-14 h-12 bg-gray-50/50" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action */}
                                                <Button className="w-full h-14 text-base font-bold uppercase tracking-widest bg-primary hover:bg-blue-700 shadow-lg shadow-primary/20 rounded-lg">
                                                    Confirm Booking
                                                </Button>
                                                <p className="text-center text-xs text-gray-400">
                                                    By booking, you agree to our Terms of Service.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Design Right: Doctor Details */}
                                        <div className="w-full lg:w-[400px] bg-white border-l border-gray-100 p-6 lg:p-8 order-1 lg:order-2 flex flex-col shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] z-20">
                                            <div className="flex flex-col items-center text-center mb-8">
                                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 ring-1 ring-gray-100">
                                                    <Image src={selectedDoctor.image} alt={selectedDoctor.name} fill className="object-cover" />
                                                </div>
                                                <h3 className="text-xl font-black text-gray-900 mb-1">{selectedDoctor.name}</h3>
                                                <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                                    <Stethoscope className="w-3.5 h-3.5" />
                                                    {selectedDoctor.specialty}
                                                </div>
                                            </div>

                                            <div className="space-y-6 flex-1">
                                                {/* Stats */}
                                                <div className="grid grid-cols-2 gap-3 pb-6 border-b border-gray-100">
                                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                                                        <p className="text-xs text-gray-500 mb-1">Fee</p>
                                                        <p className="font-bold text-gray-900 flex items-center justify-center gap-1">
                                                            <Banknote className="w-3.5 h-3.5 text-green-600" />
                                                            {selectedDoctor.fee} BDT
                                                        </p>
                                                    </div>
                                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                                                        <p className="text-xs text-gray-500 mb-1">Expertise</p>
                                                        <p className="font-bold text-gray-900 flex items-center justify-center gap-1">
                                                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                                            {selectedDoctor.experience}+ Years
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Details List */}
                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                                        <Stethoscope className="w-4 h-4 text-primary" /> Speciality
                                                    </h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-100">
                                                        {selectedDoctor.department} - {selectedDoctor.designation} at {selectedDoctor.institute}.
                                                    </p>

                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 mt-6">
                                                        <Clock className="w-4 h-4 text-primary" /> Chamber Time
                                                    </h4>
                                                    <div className="text-sm text-gray-600 pl-6 border-l-2 border-gray-100">
                                                        <p>{selectedDoctor.chamberTime}</p>
                                                        <p className="text-xs text-red-400 mt-1">Off Days: {selectedDoctor.offDays.join(', ')}</p>
                                                    </div>

                                                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 mt-6">
                                                        <MapPin className="w-4 h-4 text-primary" /> Location
                                                    </h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-100">
                                                        {selectedDoctor.branchName}
                                                        <span className="block text-xs text-gray-400 mt-0.5">{selectedDoctor.branchAddress}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
