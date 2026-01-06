"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder: string;
    icon?: React.ReactNode;
    className?: string;
}

export default function CustomSelect({ value, onChange, options, placeholder, icon, className }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = value || placeholder;

    return (
        <div ref={containerRef} className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between gap-3 px-6 py-4 rounded-2xl border transition-all duration-200 text-left ${isOpen
                    ? "bg-white border-primary ring-4 ring-primary/10 shadow-lg shadow-primary/5"
                    : "bg-gray-50 border-gray-100 hover:border-primary/30 hover:bg-white"
                    } ${className}`}
            >
                <div className="flex items-center gap-3 overflow-hidden">
                    {icon && <div className={`shrink-0 ${isOpen ? "text-primary" : "text-gray-400"}`}>{icon}</div>}
                    <span className={`truncate font-medium ${value ? "text-text-heading" : "text-gray-400"}`}>
                        {selectedLabel}
                    </span>
                </div>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-gray-400"}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 5, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full bg-white border border-gray-100 rounded-[20px] shadow-2xl shadow-primary/10 py-2 mt-1 max-h-[300px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                onChange("");
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm transition-colors ${value === "" ? "bg-blue-50 text-primary font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                }`}
                        >
                            {placeholder}
                        </button>
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-6 py-3 text-sm transition-colors ${value === option ? "bg-blue-50 text-primary font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
