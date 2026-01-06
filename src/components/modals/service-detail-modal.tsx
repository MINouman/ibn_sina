"use client";

import { HospitalService } from "@/data/services-data";
import { X, CheckCircle2, BadgeDollarSign, Info } from "lucide-react";
import { useEffect } from "react";

interface ServiceDetailModalProps {
    service: HospitalService | null;
    onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
    useEffect(() => {
        if (service) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [service]);

    if (!service) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in ring-1 ring-black/5">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-100 p-6 md:p-8 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-text-heading">{service.title}</h2>
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{service.category}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-text-heading transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-100px)] custom-scrollbar">
                    <p className="text-text-body text-lg leading-relaxed mb-10">
                        {service.description}
                    </p>

                    <div className="grid gap-10">
                        {/* Features */}
                        {service.details?.features && (
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-bold text-text-heading mb-4">
                                    <Info className="w-5 h-5 text-primary" />
                                    Key Features & Services
                                </h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {service.details.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-3 bg-slate-50 p-4 rounded-2xl ring-1 ring-slate-100">
                                            <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                            <span className="text-text-body text-[15px]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Facilities */}
                        {service.details?.facilities && (
                            <div>
                                <h3 className="text-lg font-bold text-text-heading mb-4">Available Facilities</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.details.facilities.map((fac, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full ring-1 ring-primary/10">
                                            {fac}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rates */}
                        {service.details?.rates && (
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-bold text-text-heading mb-4">
                                    <BadgeDollarSign className="w-5 h-5 text-primary" />
                                    Room Rates / Service Charges
                                </h3>
                                <div className="bg-slate-50 rounded-2xl ring-1 ring-slate-100 overflow-hidden">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-200">
                                                <th className="px-6 py-4 font-bold text-text-heading">Facility / Item</th>
                                                <th className="px-6 py-4 font-bold text-text-heading text-right">Price (BDT)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {service.details.rates.map((rate, idx) => (
                                                <tr key={idx} className="hover:bg-white transition-colors">
                                                    <td className="px-6 py-4 text-text-body font-medium">{rate.item}</td>
                                                    <td className="px-6 py-4 text-primary font-bold text-right">{rate.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs text-text-body italic">* Note: Prices are subject to change. Please confirm at the admission desk.</p>
                            </div>
                        )}
                    </div>

                    {/* Footnote for Oncology/Emergency/etc */}
                    {!service.details?.rates && !service.details?.features && !service.details?.facilities && (
                        <div className="bg-primary/5 p-6 rounded-2xl text-center">
                            <p className="text-primary font-medium">Please contact our hospital helpline for more specific details about this service.</p>
                        </div>
                    )}
                </div>

                {/* Footer Action */}
                <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-[4px] border border-slate-200 text-text-body font-bold hover:bg-slate-50 transition-colors"
                    >
                        Close
                    </button>
                    <a
                        href="tel:+8809610010615"
                        className="px-6 py-2.5 rounded-[4px] bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                    >
                        Contact for Assistance
                    </a>
                </div>
            </div>
        </div>
    );
}
