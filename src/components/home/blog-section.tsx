"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User, Calendar } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blog-data";
import { BlogModal } from "../modals/blog-modal";
import { Button } from "../ui/button";

export function BlogSection() {
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBlogClick = (blog: BlogPost) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-text-heading font-display mb-6 leading-tight">
                            Our guide to health & <br />
                            <span className="text-primary">wellness</span>
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                            Dedicated to helping you lead a healthier, more balanced life with practical tips, in-depth insights, and expert advice for every day of your wellness journey.
                        </p>
                    </div>
                    <Link href="/news">
                        <Button
                            variant="outline"
                            className="group border-primary text-primary hover:bg-primary hover:text-white rounded-[4px] px-8 h-12 font-bold uppercase tracking-wider text-xs transition-all duration-300"
                        >
                            View All Blogs
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleBlogClick(post)}
                            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.images[0]}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                {/* Tag Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest rounded-[4px] shadow-sm border border-white/20">
                                        {post.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5 text-primary" />
                                        BY {post.author}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        {post.date}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-text-heading mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-primary font-bold text-sm">
                                    Read More
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10" />

            <BlogModal
                blog={selectedBlog}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
