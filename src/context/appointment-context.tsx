"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppointmentContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <AppointmentContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </AppointmentContext.Provider>
    );
}

export function useAppointment() {
    const context = useContext(AppointmentContext);
    if (context === undefined) {
        throw new Error("useAppointment must be used within an AppointmentProvider");
    }
    return context;
}
