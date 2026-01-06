"use client";

import { useState, useMemo } from "react";
import { servicesData, HospitalService, BRANCHES } from "@/data/services-data";
import { ServiceCard } from "@/components/services/service-card";
import { ServiceDetailModal } from "@/components/modals/service-detail-modal";
import { Search, Activity, Microscope, Building2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomSelect from "@/components/ui/CustomSelect";

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<HospitalService | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [selectedBranch, setSelectedBranch] = useState<string>("");

    const categories = ["All", "Hospital Services", "Specialized Centers", "Diagnostic Services", "Health Packages"];

    const filteredServices = useMemo(() => {
        return servicesData.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || service.category === activeCategory;
            const matchesBranch = !selectedBranch || service.availableBranches?.includes(selectedBranch);
            return matchesSearch && matchesCategory && matchesBranch;
        });
    }, [searchQuery, activeCategory, selectedBranch]);

    const stats = [
        { icon: Activity, label: "Specialized Wards", count: "10+" },
        { icon: Microscope, label: "Diagnostic Tests", count: "500+" },
        { icon: Building2, label: "Operational Years", count: "40+" },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-16 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl transition-all duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl transition-all duration-1000" />
                </div>

                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                        <Activity className="w-4 h-4" />
                        Our Medical Expertise
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-text-heading font-display mb-6 tracking-tight leading-[1.1]">
                        Comprehensive <span className="text-primary italic relative">Services
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 2, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span> <br />
                        Tailored for Your Care
                    </h1>
                    <p className="text-text-body text-base md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        From 24/7 emergency response to highly specialized neuro-interventions,
                        we provide world-class medical facilities with compassion and excellence.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-primary mb-4 ring-1 ring-slate-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-2xl md:text-3xl font-black text-text-heading mb-1">{stat.count}</span>
                                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-y border-slate-100 py-4 transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-4 md:px-6 py-2 md:py-2.5 rounded-[4px] text-xs md:text-sm font-bold transition-all duration-300 ring-1 flex-shrink-0",
                                        activeCategory === cat
                                            ? "bg-primary text-white ring-primary shadow-lg shadow-primary/20"
                                            : "bg-white text-text-body ring-slate-200 hover:ring-primary/40 hover:text-primary active:scale-95"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Input & Branch Filter */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
                            <div className="w-full sm:w-[220px]">
                                <CustomSelect
                                    value={selectedBranch}
                                    onChange={setSelectedBranch}
                                    options={BRANCHES}
                                    placeholder="All Branches"
                                    icon={<MapPin className="w-4 h-4" />}
                                    className="rounded-[4px] py-3.5 border-slate-200 w-full"
                                />
                            </div>
                            <div className="relative w-full sm:w-[300px] group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search medical services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-6 py-3.5 rounded-[4px] border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50/30">
                <div className="container mx-auto px-4">
                    {filteredServices.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service, idx) => (
                                <div key={service.id} className="animate-fade-in h-full" style={{ animationDelay: `${idx * 0.05}s` }}>
                                    <ServiceCard
                                        service={service}
                                        onClick={setSelectedService}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-slate-200">
                            <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mx-auto mb-6">
                                <Search className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-heading mb-2">No results found</h3>
                            <p className="text-text-body max-w-xs mx-auto text-base">We couldn&apos;t find any services matching {searchQuery ? `&quot;${searchQuery}&quot;` : "this category"}.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); setSelectedBranch(""); }}
                                className="mt-8 text-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Details Modal */}
            <ServiceDetailModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />

            {/* Premium CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[64px] p-8 md:p-20 relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)]">
                        {/* Interactive Background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -ml-40 -mb-40 group-hover:opacity-30 transition-opacity duration-700" />

                        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16 text-center xl:text-left">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                                    Need <span className="text-primary italic relative">Immediate
                                        <svg className="absolute -bottom-1 left-0 w-full h-1 text-primary/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 L100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </span> Assistance?
                                </h2>
                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                    Our medical consultants are standing by 24/7 to help you navigate through our services and connect you with the right specialist.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                                <a
                                    href="tel:+8809610010615"
                                    className="px-12 py-6 bg-primary text-white font-black rounded-[4px] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl shadow-primary/20 active:scale-95 text-center flex items-center justify-center gap-3"
                                >
                                    <Activity className="w-5 h-5" />
                                    CALL HOTLINE
                                </a>
                                <button className="px-12 py-6 bg-slate-800/50 backdrop-blur-sm text-white font-black rounded-[4px] border border-slate-700 hover:bg-slate-800 transition-all duration-500 active:scale-95 text-center">
                                    ONLINE ENQUIRY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
