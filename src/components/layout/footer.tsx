"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-text-heading text-white pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                    {/* Brand Column (Left) */}
                    <div className="lg:w-1/3 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="p-2 bg-white/5 rounded-lg inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Ibn Sina Trust"
                                    width={160}
                                    height={45}
                                    className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Committed to providing affordable, high-quality healthcare services to all sections of society with the latest technology and expert medical professionals.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-lg hover:bg-primary transition-all duration-300 text-slate-400 hover:text-white border border-slate-800 hover:border-primary">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-lg hover:bg-primary transition-all duration-300 text-slate-400 hover:text-white border border-slate-800 hover:border-primary">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-lg hover:bg-primary transition-all duration-300 text-slate-400 hover:text-white border border-slate-800 hover:border-primary">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800/50 rounded-lg hover:bg-primary transition-all duration-300 text-slate-400 hover:text-white border border-slate-800 hover:border-primary">
                                <Youtube className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns (Right) */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Company */}
                        <div>
                            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Company</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Latest News
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Patient Care */}
                        <div>
                            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Patient Care</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/doctors" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Find a Doctor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/appointment" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Book Appointment
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#faq" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Patient Guide
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <span>House # 48, Road # 9/A, Dhanmondi, Dhaka-1209, Bangladesh</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm group hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                    <span>+880 9610010615</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm group hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                    <span>info@ibnsinatrust.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Ibn Sina Trust. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-slate-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="text-slate-500 hover:text-primary text-sm transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
