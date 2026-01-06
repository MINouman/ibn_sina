"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAppointment } from "@/context/appointment-context";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Find A Doctor", href: "/doctors" },
    { name: "Our Services", href: "/services" },
    { name: "News and Blogs", href: "/news" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openModal } = useAppointment();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
                isScrolled ? "shadow-sm py-2" : "py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Ibn Sina Trust"
                            width={180}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                            return (
                                <div key={link.name} className="relative group">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-[13px] font-bold uppercase tracking-wide transition-colors flex items-center gap-1",
                                            isActive ? "text-primary" : "text-text-heading hover:text-primary"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white rounded-[4px] px-6 font-bold uppercase tracking-wider text-xs h-10 transition-all duration-300"
                            onClick={openModal}
                        >
                            Appointment
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Show on LG and below since nav is hidden on LG now */}
                    <button
                        className="xl:hidden p-2 text-text-heading"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-bold uppercase py-2 border-b border-gray-50 last:border-0",
                                            isActive ? "text-primary" : "text-text-heading"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Button
                                className="w-full mt-2 rounded-[4px] uppercase font-bold text-xs"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    openModal();
                                }}
                            >
                                Book Appointment
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
