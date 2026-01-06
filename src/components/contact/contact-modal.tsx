"use client";

import { useEffect } from "react";
import { BranchLocation } from "@/data/branches-location-data";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Clock, CheckCircle, Smartphone, ExternalLink } from "lucide-react";

interface ContactModalProps {
    branch: BranchLocation | null;
    onClose: () => void;
}

export function ContactModal({ branch, onClose }: ContactModalProps) {

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!branch) return null;

    return (
        <AnimatePresence>
            {branch && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[32px] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* LEFT SIDE: Contact Form */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 overflow-y-auto">
                                <div className="max-w-md mx-auto md:mx-0">
                                    <div className="mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Us</div>
                                    <h2 className="text-3xl md:text-4xl font-black text-text-heading font-display mb-4">
                                        Get in touch with us
                                    </h2>
                                    <p className="text-slate-500 mb-10">
                                        Fill out the form below to contact <span className="font-bold text-primary">{branch.name}</span> directly.
                                    </p>

                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Message</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Enter Your Message"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium resize-none"
                                            />
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <input type="checkbox" id="agree" className="mt-1 w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                                            <label htmlFor="agree" className="text-sm text-slate-500">
                                                I agree with <a href="#" className="underline hover:text-primary">Terms and Conditions</a>
                                            </label>
                                        </div>

                                        <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                                            Send Your Request
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Branch Details */}
                            <div className="w-full md:w-2/5 bg-slate-50 p-8 md:p-12 lg:p-16 border-l border-slate-100 overflow-y-auto">
                                <div className="h-full flex flex-col">
                                    <h3 className="text-lg font-bold text-text-heading mb-8">Branch Information</h3>

                                    {/* Benefit List (Placeholder for visual balance, or we can use generic benefits if data is sparse) */}
                                    {/* Actually, let's just show the rich contact info here as requested */}

                                    <div className="space-y-8">

                                        {/* Address */}
                                        <div className="relative pl-8 border-l-2 border-slate-200">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-900" />
                                            <h4 className="font-bold text-slate-900 mb-1 leading-none">Address</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed mt-2">
                                                {branch.address}
                                            </p>
                                            {branch.googleMapUrl && (
                                                <a
                                                    href={branch.googleMapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-3 hover:underline"
                                                >
                                                    Open in Maps <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Hotline */}
                                        {branch.hotline && (
                                            <div className="relative pl-8 border-l-2 border-slate-200">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary" />
                                                <h4 className="font-bold text-slate-900 mb-1 leading-none">Hotline</h4>
                                                <p className="text-xl font-black text-text-heading tracking-tight mt-2">{branch.hotline}</p>
                                            </div>
                                        )}

                                        {/* Phones */}
                                        {branch.phoneNumbers && branch.phoneNumbers.length > 0 && (
                                            <div className="relative pl-8 border-l-2 border-slate-200">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-400" />
                                                <h4 className="font-bold text-slate-900 mb-3 leading-none">Phone Numbers</h4>
                                                <div className="space-y-3">
                                                    {branch.phoneNumbers.map((phone, idx) => (
                                                        <div key={idx} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                                            {phone.label && (
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                                    {phone.label}
                                                                </p>
                                                            )}
                                                            <p className="font-bold text-slate-700 text-sm">{phone.number}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Email */}
                                        {branch.email && (
                                            <div className="relative pl-8 border-l-2 border-slate-200">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300" />
                                                <h4 className="font-bold text-slate-900 mb-1 leading-none">Email</h4>
                                                <a href={`mailto:${branch.email}`} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors block mt-2">
                                                    {branch.email}
                                                </a>
                                            </div>
                                        )}

                                        {branch.website && (
                                            <div className="relative pl-8 border-l-2 border-slate-200">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300" />
                                                <h4 className="font-bold text-slate-900 mb-1 leading-none">Website</h4>
                                                <a href={`https://${branch.website}`} target="_blank" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors block mt-2">
                                                    {branch.website}
                                                </a>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
