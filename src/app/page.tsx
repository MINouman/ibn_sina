import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ServicesPreview } from "@/components/home/services-preview";
import { Doctors } from "@/components/home/doctors";
import { Notices } from "@/components/home/notices";
import { BlogSection } from "@/components/home/blog-section";
import { Gallery } from "@/components/home/gallery";
import { OurUnitsSection } from "@/components/home/our-units-section";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <Stats />
      <OurUnitsSection />
      <ServicesPreview />
      <Doctors />
      <Notices />
      <BlogSection />
      <Gallery />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Need Emergency Care?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our emergency department is open 24/7. We are equipped to handle all medical emergencies with expert care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+8809610010615" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-[4px] hover:bg-gray-100 transition-colors">
              Call 24/7 Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
