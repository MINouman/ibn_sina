"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Paperclip, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/data/blog-data";
import { useEffect, useState } from "react";

interface BlogModalProps {
    blog: BlogPost | null;
    isOpen: boolean;
    onClose: () => void;
}

export function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setCurrentImageIndex(0); // Reset index when opening
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!blog) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % blog.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + blog.images.length) % blog.images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all border border-white/20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="overflow-y-auto">
                            {/* Header Image / Carousel */}
                            <div className="relative w-full h-[400px] md:h-[600px] bg-gray-900 group">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={blog.images[currentImageIndex]}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                {/* Carousel Navigation */}
                                {blog.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all border border-white/20 opacity-0 group-hover:opacity-100"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all border border-white/20 opacity-0 group-hover:opacity-100"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>

                                        {/* Dots Indicator */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                            {blog.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "w-8 bg-primary" : "w-1.5 bg-white/30"}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="px-4 py-1.5 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-[4px] shadow-sm border border-white/20">
                                            {blog.tag}
                                        </span>
                                        <div className="flex items-center gap-4 text-white/80 text-sm">
                                            <div className="flex items-center gap-1.5">
                                                <User className="w-4 h-4" />
                                                {blog.author}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                {blog.date}
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight">
                                        {blog.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 md:p-14">
                                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                                    {blog.content}
                                </div>

                                {/* Attachments Placeholder */}
                                <div className="mt-12 pt-10 border-t border-gray-100">
                                    <h4 className="text-lg font-bold text-text-heading mb-4 flex items-center gap-2">
                                        <Paperclip className="w-5 h-5 text-primary" />
                                        Attachments (1)
                                    </h4>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors cursor-pointer group">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Paperclip className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-text-heading">Health_Guide_2024.pdf</div>
                                                <div className="text-xs text-gray-400">2.4 MB</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
