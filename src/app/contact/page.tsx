"use client";

import { useState } from "react";
import { BRANCH_LOCATIONS, BranchLocation } from "@/data/branches-location-data";
import { ContactBranchCard } from "@/components/contact/contact-branch-card";
import { ContactModal } from "@/components/contact/contact-modal";
import { Search, MapPin } from "lucide-react";

export default function ContactPage() {
    const [selectedBranch, setSelectedBranch] = useState<BranchLocation | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBranches = BRANCH_LOCATIONS.filter(branch =>
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Hero */}
            <div className="bg-slate-50 border-b border-slate-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        Our Network
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-heading font-display mb-6 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-text-body text-lg max-w-2xl mx-auto mb-10">
                        Find contact information for all our hospitals, diagnostic centers, and consultation units across Bangladesh.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search branch by name or location..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium text-slate-700 bg-white"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 -mt-8 relative z-10">
                {filteredBranches.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredBranches.map((branch) => (
                            <div key={branch.id} className="h-full">
                                <ContactBranchCard
                                    branch={branch}
                                    onClick={setSelectedBranch}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-slate-400 font-medium">No branches found matching &ldquo;{searchQuery}&rdquo;</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-primary font-bold hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            <ContactModal
                branch={selectedBranch}
                onClose={() => setSelectedBranch(null)}
            />
        </div>
    );
}
