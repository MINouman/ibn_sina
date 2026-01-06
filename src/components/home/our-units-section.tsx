"use client";

import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { BRANCH_LOCATIONS, BranchLocation } from "@/data/branches-location-data";
import { MapPin, Phone, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// TopoJSON for Bangladesh
const BD_TOPO_JSON = "https://raw.githubusercontent.com/techslides/D3-Maps/master/data/world/country/Bangladesh.topo.json";

export function OurUnitsSection() {
    const [selectedBranch, setSelectedBranch] = useState<BranchLocation | null>(null);
    const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([90.3563, 23.6850]);

    // Set default selected branch
    useMemo(() => {
        const defaultBranch = BRANCH_LOCATIONS.find(b => b.id === 'dhanmondi-9a');
        if (defaultBranch && !selectedBranch) {
            setSelectedBranch(defaultBranch);
        }
    }, [selectedBranch]);

    const handleSelectBranch = (branch: BranchLocation) => {
        setSelectedBranch(branch);
        setMapCenter(branch.coordinates);
    };

    return (
        <div id="our-units-map" className="relative bg-white py-12 lg:py-20 overflow-hidden scroll-mt-32">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                        <MapPin className="w-4 h-4" />
                        Nationwide Network
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-text-heading font-display mb-6 tracking-tight">
                        Our Units <span className="text-primary italic">Across Bangladesh</span>
                    </h2>
                    <p className="text-text-body text-lg max-w-2xl mx-auto">
                        Delivering world-class healthcare services through our extensive network of hospitals and diagnostic centers across the country.
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:h-[600px]">

                    {/* Left Column: Branch List */}
                    <div className="order-1 lg:order-none w-full lg:col-span-3 h-[300px] lg:h-full bg-white rounded-2xl lg:rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-4 lg:p-6 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-lg font-bold text-text-heading">All Branches</h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">{BRANCH_LOCATIONS.length} Locations Available</p>
                        </div>
                        <div className="overflow-y-auto flex-1 p-2 space-y-2 custom-scrollbar">
                            {BRANCH_LOCATIONS.map((branch) => (
                                <button
                                    key={branch.id}
                                    onClick={() => handleSelectBranch(branch)}
                                    className={`w-full text-left p-3 lg:p-4 rounded-xl transition-all duration-200 group relative ${selectedBranch?.id === branch.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-white hover:bg-slate-50 text-text-heading border border-transparent hover:border-slate-100"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-1 shrink-0 ${selectedBranch?.id === branch.id ? "text-white/80" : "text-primary "}`}>
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-bold leading-tight mb-1 ${selectedBranch?.id === branch.id ? "text-white" : "text-text-heading group-hover:text-primary"}`}>
                                                {branch.name}
                                            </h4>
                                            <p className={`text-[10px] uppercase tracking-wider font-bold ${selectedBranch?.id === branch.id ? "text-white/70" : "text-slate-400"}`}>
                                                {branch.address.split(",")[0]}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Center Column: Map Container */}
                    <div className="order-2 lg:order-none w-full lg:col-span-6 h-[400px] lg:h-full relative bg-slate-50/50 rounded-[32px] lg:rounded-[40px] border border-slate-100 overflow-hidden shadow-inner group cursor-grab active:cursor-grabbing">

                        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 bg-white/80 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-slate-200 shadow-sm max-w-[200px] lg:max-w-xs pointer-events-none select-none">
                            <p className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Locations</p>
                            <p className="text-2xl lg:text-3xl font-black text-primary">{BRANCH_LOCATIONS.length}+</p>
                            <p className="text-xs lg:text-sm text-slate-500 font-medium mt-1">Serving millions annually</p>
                        </div>

                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                scale: 4500,
                                center: [90.3563, 23.6850] // Center of Bangladesh
                            }}
                            className="w-full h-full"
                        >
                            <ZoomableGroup
                                center={mapCenter}
                                onMoveEnd={({ coordinates }) => setMapCenter(coordinates)}
                                minZoom={1}
                                maxZoom={1} // Disable zoom
                                filterZoomEvent={() => false} // Prevent zoom events
                            >
                                <Geographies geography={BD_TOPO_JSON}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#e2e8f0"
                                                stroke="#cbd5e1"
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { outline: "none" },
                                                    hover: { fill: "#cbd5e1", outline: "none", transition: "all 0.3s" },
                                                    pressed: { outline: "none" },
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>

                                {BRANCH_LOCATIONS.map((branch) => {
                                    const isSelected = selectedBranch?.id === branch.id;
                                    const isHovered = hoveredBranch === branch.id;
                                    return (
                                        <Marker
                                            key={branch.id}
                                            coordinates={branch.coordinates}
                                            onMouseEnter={() => setHoveredBranch(branch.id)}
                                            onMouseLeave={() => setHoveredBranch(null)}
                                            onClick={() => handleSelectBranch(branch)}
                                            className="cursor-pointer"
                                        >
                                            <g
                                                transform={`translate(-12, -24) ${isSelected ? 'translate(0, -8)' : ''}`}
                                                className={`transition-all duration-500 ease-out ${isSelected ? 'drop-shadow-xl scale-110' : 'hover:-translate-y-2 group-hover:drop-shadow-lg'}`}
                                            >
                                                {/* Pulse Effect */}
                                                <circle cx="12" cy="24" r="8" className={`animate-ping ${isSelected ? "fill-primary/50" : "fill-slate-400/30"}`} />
                                                {/* Pin Body */}
                                                <path
                                                    d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z"
                                                    className={`transition-colors duration-300 ${isSelected || isHovered ? "fill-primary" : "fill-slate-400"}`}
                                                />
                                                {/* Pin Center */}
                                                <circle cx="12" cy="12" r="4" fill="white" />
                                            </g>
                                        </Marker>
                                    );
                                })}
                            </ZoomableGroup>
                        </ComposableMap>
                        {/* Hover Tooltip - Quick Info */}
                        <AnimatePresence>
                            {hoveredBranch && !selectedBranch && (
                                (() => {
                                    const branch = BRANCH_LOCATIONS.find(b => b.id === hoveredBranch);
                                    if (!branch) return null;
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                                        >
                                            <div className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap">
                                                {branch.name}
                                            </div>
                                        </motion.div>
                                    );
                                })()
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Info Panel */}
                    <div className="order-3 lg:order-none w-full lg:col-span-3 lg:h-full flex flex-col justify-center">
                        <div className="bg-white rounded-2xl lg:rounded-[32px] p-6 lg:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 ring-1 ring-slate-50 relative overflow-hidden min-h-[400px] lg:min-h-[400px]">
                            {/* Empty Sate Background */}
                            <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 ${selectedBranch ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                    <MapPin className="w-8 h-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Explore Our Network</h3>
                                <p className="text-slate-400 text-sm">Select a location marker on the map to view detailed information about the unit.</p>
                            </div>

                            {/* Selected Info Content */}
                            <AnimatePresence mode="wait">
                                {selectedBranch && (
                                    <motion.div
                                        key={selectedBranch.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10 flex flex-col h-full"
                                    >
                                        <div className="inline-flex self-start px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-wider mb-4">
                                            {selectedBranch.type}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-black text-text-heading mb-6">{selectedBranch.name}</h3>

                                        <div className="space-y-6 flex-grow">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary shrink-0">
                                                    <MapPin className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Address</p>
                                                    <p className="text-text-body font-medium leading-relaxed text-sm lg:text-base">{selectedBranch.address}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary shrink-0">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Contact</p>
                                                    <p className="text-text-body font-medium text-sm lg:text-base">
                                                        {selectedBranch.hotline || (selectedBranch.phoneNumbers && selectedBranch.phoneNumbers[0]?.number) || "N/A"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-100">
                                            <a
                                                href={selectedBranch.googleMapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.name + " " + selectedBranch.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-[4px] font-bold hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
                                            >
                                                <Navigation className="w-4 h-4" />
                                                Get Directions
                                            </a>
                                            <button
                                                onClick={() => setSelectedBranch(null)}
                                                className="w-full mt-3 text-sm font-bold text-slate-400 hover:text-text-heading transition-colors"
                                            >
                                                Close Details
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
