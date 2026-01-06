"use client";

import { useState, useMemo } from "react";
import { mockDoctors, departments, branches, Doctor } from "@/data/doctor-data";
import DoctorCard from "@/components/doctors/DoctorCard";
import DoctorProfileModal from "@/components/doctors/DoctorProfileModal";
import CustomSelect from "@/components/ui/CustomSelect";
import { Search, MapPin, Building2, User2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DoctorsPage() {
    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedDept, setSelectedDept] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const filteredDoctors = useMemo(() => {
        return mockDoctors.filter((doctor) => {
            const matchesBranch = selectedBranch === "" || doctor.branchName === selectedBranch;
            const matchesDept = selectedDept === "" || doctor.department === selectedDept;
            const matchesName = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesBranch && matchesDept && matchesName;
        });
    }, [selectedBranch, selectedDept, searchQuery]);

    return (
        <main className="min-h-screen bg-gray-50/30">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6 tracking-tight">
                        Find Your <span className="text-white/80">Doctor</span>
                    </h1>
                    <p className="text-blue-50 text-lg max-w-2xl mx-auto opacity-90">
                        Connect with our world-class specialists across multiple branches and departments.
                    </p>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="container mx-auto px-4 md:px-6 -mt-16 relative z-20 pb-20">
                <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 p-4 md:p-6 border border-gray-100">
                    <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Branch Selection */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-primary uppercase tracking-[0.25em] ml-4 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                Select Branch Name
                            </label>
                            <CustomSelect
                                value={selectedBranch}
                                onChange={setSelectedBranch}
                                options={branches}
                                placeholder="All Branches"
                                icon={<MapPin className="w-5 h-5" />}
                            />
                        </div>

                        {/* Department Selection */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-primary uppercase tracking-[0.25em] ml-4 flex items-center gap-2">
                                <Building2 className="w-3.5 h-3.5" />
                                Select Department Name
                            </label>
                            <CustomSelect
                                value={selectedDept}
                                onChange={setSelectedDept}
                                options={departments}
                                placeholder="All Departments"
                                icon={<Building2 className="w-5 h-5" />}
                            />
                        </div>

                        {/* Name Search */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-primary uppercase tracking-[0.25em] ml-4 flex items-center gap-2">
                                <User2 className="w-3.5 h-3.5" />
                                Search by Doctor Name
                            </label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Doctor Name (e.g. Hasinatul)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-14 py-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-text-heading font-medium placeholder:text-gray-400"
                                />
                                <div className="absolute left-6 inset-y-0 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Search className="w-5 h-5" />
                                </div>
                                <AnimatePresence>
                                    {searchQuery && (
                                        <div className="absolute right-6 inset-y-0 flex items-center">
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                onClick={() => setSearchQuery("")}
                                                className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200/50 hover:bg-gray-200 text-gray-500 transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-12 mb-8 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-heading">
                        Available Specialists
                        <span className="ml-3 text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">{filteredDoctors.length}</span>
                    </h3>
                </div>

                {/* Doctor Grid */}
                {filteredDoctors.length > 0 ? (
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredDoctors.map((doctor) => (
                                <DoctorCard
                                    key={doctor.id}
                                    doctor={doctor}
                                    onClick={setSelectedDoctor}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="py-20 text-center space-y-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                            <Search className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold text-text-heading">No doctors found</h4>
                        <p className="text-gray-500">Try adjusting your filters or search query.</p>
                        <button
                            onClick={() => {
                                setSelectedBranch("");
                                setSelectedDept("");
                                setSearchQuery("");
                            }}
                            className="text-primary font-bold hover:underline"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
            </section>

            {/* Profile Modal */}
            <DoctorProfileModal
                doctor={selectedDoctor}
                onClose={() => setSelectedDoctor(null)}
            />
        </main>
    );
}
