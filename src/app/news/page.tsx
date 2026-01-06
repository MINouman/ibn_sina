"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight, Search } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blog-data";
import { BlogModal } from "@/components/modals/blog-modal";

export default function NewsPage() {
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleBlogClick = (blog: BlogPost) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen pt-32 pb-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-heading font-display mb-6">
                        News & <span className="text-primary">Blogs</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        Stay updated with the latest health tips, medical advancements, and news from Ibn Sina Trust.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mb-12">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-body"
                    />
                </div>

                {/* Blog Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => handleBlogClick(post)}
                                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.images[0]}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

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
                                        Read Full Article
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[32px] border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-primary font-bold hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}
            </div>

            <BlogModal
                blog={selectedBlog}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
