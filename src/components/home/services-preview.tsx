import { Microscope, Stethoscope, FileText, Activity } from "lucide-react";

const features = [
    {
        icon: Microscope,
        title: "Advanced equipment",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt facilisis.",
    },
    {
        icon: Stethoscope,
        title: "Qualified doctors",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt facilisis.",
    },
    {
        icon: FileText,
        title: "Certified services",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt facilisis.",
    },
    {
        icon: Activity,
        title: "Emergency care",
        description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt facilisis.",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Why Choose Us?</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-display">
                        Offer for you
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-primary rounded-[20px] p-8 flex flex-col items-start text-left group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mb-6 rounded-[4px] bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <feature.icon strokeWidth={1.5} className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>

                            <p className="text-blue-50 text-sm leading-relaxed mb-8 flex-grow">
                                {feature.description}
                            </p>

                            <button className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:gap-2 transition-all">
                                More details <span className="ml-1 text-lg leading-none">&rsaquo;</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
