"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Target,
    Compass,
    Award,
    ShieldCheck,
    FlaskConical,
    Trash2,
    Settings,
    Users,
    Cpu,
    ChevronRight,
    Headphones,
    Activity,
    Stethoscope,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

const trustees = [
    {
        name: "Prof. Abu Naseer Mohammad Abduz Zaher",
        role: "Chairman of the Board of Trustee",
        bio: "Former Chairman of Islami Bank Bangladesh Ltd., former managing director of Ibn Sina Pharmaceutical Industry Ltd., Founder Member of Manarat International School & College. A dignified social worker.",
        image: "https://i.pravatar.cc/300?img=68"
    },
    {
        name: "Professor Dr. Choudhury Mahmood Hasan",
        role: "Vice Chairman of the Board of Trustee",
        bio: "Professor and Former Dean of the Department of Pharmacy, University of Dhaka, Former Director General, Bangladesh Drug Administration. Former Chairman, Bangladesh Council of Scientific & Industrial Research (BCSIR). Educationist and Scientist.",
        image: "https://i.pravatar.cc/300?img=67"
    },
    {
        name: "Professor Dr. Shamsuddin Ahmad",
        role: "Member of Board of Trustee",
        bio: "Former Professor and Dean, Bangladesh University of Engineering and Technology (BUET), Former Professor of Islamic University of Technology (an organ of OIC) Gazipur A renowned academician",
        image: "https://i.pravatar.cc/300?img=60"
    },
    {
        name: "Prof. Dr. A.K.M. Sadrul Islam",
        role: "Member Administration of the Board of Trustee",
        bio: "Managing Director, Ibn Sina Pharmaceutical Industry Ltd. Former Professor and Chairman of the Department of Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET). Former Director, Islami Bank Bangladesh Limited. Educationist and Education patron.",
        image: "https://i.pravatar.cc/300?img=59"
    },
    {
        name: "Kazi Harun Or Rashid",
        role: "Member Finance of the Board of Trustee",
        bio: "Former Chairman Islami Bank Bangladesh Limited. Chairman Chauni Properties Limited. Vice Chairman Industrialists & Businessman Welfare Foundation. Former Member of Islami Bank Foundation. Vice Chairman of Uddam Foundation. Renowned Businessman & Social Worker.",
        image: "https://i.pravatar.cc/300?img=51"
    },
    {
        name: "Dr. Mohammad Ayub Miah",
        role: "Member Board of Trustee",
        bio: "Retired Secretary of Bangladesh Government. Renowned Educationist, Scholar & Social Worker",
        image: "https://i.pravatar.cc/300?img=12"
    },
    {
        name: "Prof. Colonel (Retd.) Dr. Zehad Khan",
        role: "Member of the Board of Trustee",
        bio: "Senior Interventional Cardiologist & Electrophysiologist. Director, Ibn Sina Pharmaceutical Industry Ltd. Honorary Professor of Medicine at multiple institutions. Former Teacher of Armed Forces Medical College.",
        image: "https://i.pravatar.cc/300?img=7"
    }
];

const qualityPolicies = [
    {
        title: "Sample Collection",
        icon: Users,
        desc: "2 separate collection booths for male and female. Samples are collected by experienced phlebotomists following standardized procedures with sterile disposable equipment."
    },
    {
        title: "Waste Disposal",
        icon: Trash2,
        desc: "Strictly follow internationally acceptable and nationally instructed guidelines. Color-coded bins are used for specific types of pathological wastes."
    },
    {
        title: "Internal Quality Control",
        icon: ShieldCheck,
        desc: "Every lab has its own Internal Quality Control System. Consultants ensure test results are without aberrations and conduct repeat tests if necessary."
    },
    {
        title: "External Quality Control",
        icon: Globe,
        desc: "Partners with BIORAD (USA) for an external quality control program for biochemistry tests to ensure world-class accuracy."
    },
    {
        title: "Medical Laboratory Scientists",
        icon: FlaskConical,
        desc: "Run by the country's leading medical laboratory scientists following internationally acceptable standard operating systems."
    },
    {
        title: "Reagents and Equipments",
        icon: Cpu,
        desc: "Zero tolerance on quality. Reagents and equipment are imported from world-famous companies like Siemens, GE, and Olympus."
    },
    {
        title: "Bio-Medical Engineering",
        icon: Settings,
        desc: "Headed by experienced Biomedical Engineers to ensure smooth running and accuracy of all clinical machineries."
    },
    {
        title: "Development Program",
        icon: Award,
        desc: "CLIP (Continuing Laboratory Improvement Program) includes Technologistic Skill, Instrumentation, and Quality Improvement."
    }
];

function Globe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-white shadow-sm mb-6 animate-fade-in">
                        <Link href="/" className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest">Home</Link>
                        <ChevronRight className="w-3 h-3 text-gray-300" />
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">About Us</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-text-heading mb-6 tracking-tight leading-tight">
                        About The <span className="text-primary text-glow">Ibn Sina</span> Trust
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        A journey of trust, care, and humanity since 1980. We stand as a beacon of world-class healthcare in South Asia.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                    <div className="w-8 h-[2px] bg-primary"></div>
                                    Our Legacy
                                </h4>
                                <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-display leading-[1.1]">
                                    Serving Humanity <br /> With Excellence
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed">
                                <p>
                                    The Ibn Sina Trust started its journey in June 1980 with a noble vision <span className="text-primary font-bold">“To serve the humanity”</span>.
                                    By providing healthcare service to the people of Bangladesh at affordable cost, we materialised an ambition that has grown from 13 dedicated individuals to a powerhouse of medical care.
                                </p>
                                <p>
                                    Over the period of time, by the grace of almighty, the Ibn Sina Trust is now a name of <span className="font-bold text-text-heading underline decoration-primary decoration-2 underline-offset-4">‘TRUST’</span> in the sector of health care in Bangladesh and is one of the largest health service provider in South Asia.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-1">
                                    <div className="text-4xl font-bold text-text-heading">44+</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Experience</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-4xl font-bold text-text-heading">1M+</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Patients Yearly</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative">
                            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/hero/etactics-inc-JkWMM8x1sLo-unsplash.jpg"
                                    alt="Modern Hospital Facility"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[12px] border border-white/20 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-[4px] bg-primary flex items-center justify-center text-white">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-text-heading">ISO Certified Organization</div>
                                            <div className="text-xs text-gray-500">Global Standards of Healthcare</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-[12px] bg-blue-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-heading mb-4">Mission</h3>
                            <p className="text-gray-500 leading-relaxed">
                                To provide patient-focused healthcare powered by compassion, expertise, and innovation&mdash;making world-class medical care accessible to everyone.&quot;
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-primary p-10 rounded-[24px] shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-[12px] bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Compass className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                                <p className="text-white/90 leading-relaxed font-display italic">
                                    &quot;To be a leading healthcare provider recognized for redefining patient experiences and setting new benchmarks in medical excellence.&quot;
                                </p>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        </motion.div>

                        {/* Our Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-10 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-[12px] bg-blue-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-heading mb-4">Our Values</h3>
                            <p className="text-gray-500 leading-relaxed">
                                At Ibn Sina, our values guide every interaction and treatment—building trust with patients and driving excellence in care.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest shadow-sm">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-display tracking-tight">
                            Why Thousands Trust <span className="text-primary">Ibn Sina Trust</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Patients choose Ibn Sina because we combine expert medical care with compassion, modern technology, and a patient-first approach. From routine check-ups to advanced treatments, we make healthcare simple, reliable, and centered around your well-being.
                        </p>
                    </div>

                    <div className="relative max-w-[1000px] mx-auto min-h-[600px] hidden lg:flex items-center justify-center">
                        {/* Perfect center point for the whole diagram */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* SVG Connection Lines */}
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Left Branches */}
                                <g className="text-primary/20">
                                    {/* Top Left Branch */}
                                    <path
                                        d="M420 300 H350 Q320 300 320 270 V180 Q320 150 290 150 H240"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                    {/* Bottom Left Branch */}
                                    <path
                                        d="M420 300 H350 Q320 300 320 330 V420 Q320 450 290 450 H240"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />

                                    {/* Right Branches */}
                                    {/* Top Right Branch */}
                                    <path
                                        d="M580 300 H650 Q680 300 680 270 V180 Q680 150 710 150 H760"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                    {/* Bottom Right Branch */}
                                    <path
                                        d="M580 300 H650 Q680 300 680 330 V420 Q680 450 710 450 H760"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />

                                    {/* Connection Dots */}
                                    <circle cx="420" cy="300" r="3" className="fill-primary/40" />
                                    <circle cx="580" cy="300" r="3" className="fill-primary/40" />
                                    <circle cx="240" cy="150" r="2" className="fill-primary/40" />
                                    <circle cx="240" cy="450" r="2" className="fill-primary/40" />
                                    <circle cx="760" cy="150" r="2" className="fill-primary/40" />
                                    <circle cx="760" cy="450" r="2" className="fill-primary/40" />
                                </g>
                            </svg>
                        </div>

                        {/* Central Hub */}
                        <div className="z-20 relative">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl relative"
                            >
                                <Stethoscope className="w-20 h-20" />
                                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                                <div className="absolute inset-[-12px] rounded-full border-2 border-primary/10" />
                            </motion.div>
                        </div>

                        {/* Absolute Positioned Feature Nodes */}
                        <div className="absolute inset-0 z-30 pointer-events-none">
                            {/* Top Left */}
                            <div className="absolute left-[240px] top-[150px] -translate-x-full -translate-y-1/2 flex items-center gap-6 pointer-events-auto">
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-w-[240px] text-right">
                                    <h4 className="font-bold text-text-heading mb-1 text-sm">Modern Facilities & <br /> Technology</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Personalized check-ups and medical advice.</p>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary border border-gray-100 shrink-0"
                                >
                                    <Zap className="w-5 h-5" />
                                </motion.div>
                            </div>

                            {/* Bottom Left */}
                            <div className="absolute left-[240px] top-[450px] -translate-x-full -translate-y-1/2 flex items-center gap-6 pointer-events-auto">
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-w-[240px] text-right">
                                    <h4 className="font-bold text-text-heading mb-1 text-sm">Expert Team of <br /> Specialists</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Doctors, surgeons, and nurses committed.</p>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary border border-gray-100 shrink-0"
                                >
                                    <Users className="w-5 h-5" />
                                </motion.div>
                            </div>

                            {/* Top Right */}
                            <div className="absolute left-[760px] top-[150px] -translate-y-1/2 flex items-center gap-6 pointer-events-auto">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary border border-gray-100 shrink-0"
                                >
                                    <Activity className="w-5 h-5" />
                                </motion.div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-w-[240px] text-left">
                                    <h4 className="font-bold text-text-heading mb-1 text-sm">Transparent & <br /> Affordable</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Quality care without hidden costs.</p>
                                </div>
                            </div>

                            {/* Bottom Right */}
                            <div className="absolute left-[760px] top-[450px] -translate-y-1/2 flex items-center gap-6 pointer-events-auto">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary border border-gray-100 shrink-0"
                                >
                                    <Headphones className="w-5 h-5" />
                                </motion.div>
                                <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-w-[240px] text-left">
                                    <h4 className="font-bold text-text-heading mb-1 text-sm">24/7 Patient <br /> Support</h4>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">Because health doesn&apos;t wait for office hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout (simple list/grid) */}
                    <div className="lg:hidden grid gap-8 w-full max-w-lg mx-auto">
                        {[
                            { title: "Modern Facilities & Technology", desc: "Personalized check-ups and medical advice.", icon: Zap },
                            { title: "Transparent & Affordable", desc: "Quality care without hidden costs.", icon: Activity },
                            { title: "Expert Team of Specialists", desc: "Doctors, surgeons, and nurses committed.", icon: Users },
                            { title: "24/7 Patient Support", desc: "Because health doesn't wait for office hours.", icon: Headphones }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-heading mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trustees Section */}
            <section className="py-32 bg-gray-50/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-24 space-y-4">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Leadership</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-heading font-display">
                            Board of <span className="text-primary text-glow">Trustee</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            The leaders and forerunners who guide us towards a healthier future with their honorary dedication.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
                        {trustees.map((member, index) => (
                            <div key={index} className="flex flex-col items-center h-full">
                                {/* Circular Avatar with light blue background */}
                                <div className="relative w-40 h-40 rounded-full bg-blue-50 overflow-hidden z-10 -mb-20 border-[6px] border-white shadow-xl group cursor-default">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* White Card Content */}
                                <div className="bg-white w-full pt-24 pb-12 px-8 rounded-[24px] shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500 border border-gray-100/50 flex-1">
                                    <h3 className="text-xl font-bold text-text-heading mb-2 transition-colors duration-300 group-hover:text-primary leading-tight">
                                        {member.name}
                                    </h3>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                                        {member.role}
                                    </div>
                                    <p className="text-gray-500 text-[13px] leading-relaxed max-w-[280px]">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy Section */}
            <section className="py-24 bg-text-heading relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#0EA5E9_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Commitment</h4>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
                            Quality Policy
                        </h2>
                        <p className="text-blue-100 text-lg">
                            The quality of laboratory tests at Ibn Sina Diagnostic Centre is ensured at every steps from sample collection to reporting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {qualityPolicies.map((policy, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 p-8 rounded-[12px] hover:border-primary transition-all duration-500 ease-in-out group cursor-default"
                            >
                                <div className="w-12 h-12 rounded-[4px] bg-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                                    <policy.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 transition-colors duration-500 ease-in-out">
                                    {policy.title}
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed transition-colors duration-500 ease-in-out">
                                    {policy.desc}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </main >
    );
}


