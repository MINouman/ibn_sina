import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppointmentProvider } from "@/context/appointment-context";
import { AppointmentModal } from "@/components/modals/appointment-modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
    title: "Ibn Sina Trust - Affordable Healthcare",
    description: "Serving Humanity Through Affordable Healthcare Since 1980",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.variable, jakarta.variable, "font-sans min-h-screen flex flex-col")}>
                <AppointmentProvider>
                    <Navbar />
                    <main className="flex-1 pt-20">
                        {children}
                    </main>
                    <AppointmentModal />
                    <Footer />
                </AppointmentProvider>
            </body>
        </html>
    );
}
