"use client";

import { HospitalService } from "@/data/services-data";

interface ServiceCardProps {
    service: HospitalService;
    onClick: (service: HospitalService) => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <div
            onClick={() => onClick(service)}
            className="group bg-white rounded-[24px] p-8 cursor-pointer ring-1 ring-slate-100 hover:ring-primary/20 hover:shadow-[0_20px_50px_rgba(14,165,233,0.1)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative z-10">
                <div className="w-14 h-14 mb-8 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 ring-1 ring-primary/20">
                    <Icon strokeWidth={1.5} className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-text-heading mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                </h3>

                <p className="text-text-body text-[15px] leading-relaxed mb-8 line-clamp-3">
                    {service.description}
                </p>

                <div className="flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    View Details
                    <span className="ml-2 text-xl leading-none">&rsaquo;</span>
                </div>
            </div>
        </div>
    );
}
