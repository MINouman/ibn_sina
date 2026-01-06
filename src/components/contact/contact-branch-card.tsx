"use client";

import { BranchLocation } from "@/data/branches-location-data";
import { MapPin, Phone, ArrowRight } from "lucide-react";

interface ContactBranchCardProps {
    branch: BranchLocation;
    onClick: (branch: BranchLocation) => void;
}

export function ContactBranchCard({ branch, onClick }: ContactBranchCardProps) {
    return (
        <div
            onClick={() => onClick(branch)}
            className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
        >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                    <div className="inline-flex px-3 py-1 rounded-full bg-slate-50 text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {branch.type}
                    </div>
                    <h3 className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                        {branch.name.replace("Ibn Sina ", "")} {/* Clean up name for card view if too long */}
                    </h3>
                </div>

                {/* Info */}
                <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-3 text-sm text-text-body">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                        <span className="line-clamp-2">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-body">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-primary transition-colors" />
                        <span className="font-bold text-slate-600">
                            {branch.hotline || (branch.phoneNumbers && branch.phoneNumbers[0]?.number) || "N/A"}
                        </span>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider mt-auto group-hover:gap-2 transition-all">
                    Contact Branch
                    <ArrowRight className="w-3 h-3 ml-1" />
                </div>
            </div>
        </div>
    );
}
