export interface Doctor {
    id: string;
    name: string;
    image: string;
    qualifications: string;
    specialty: string;
    languagesSpoken: string[];
    designation: string;
    institute: string;
    department: string;
    branchName: string;
    branchAddress: string;
    appointmentContact: string;
    chamberTime: string;
    offDays: string[];
    floorNumber: string;
    roomNumber: string;
    fee: number;
    experience: number;
}

export const departments = [
    "Neurology",
    "Cardiology",
    "Oncology",
    "Dermatology",
    "Surgery",
    "Gynecology",
    "Orthopedics",
    "Medicine & Nephrology",
    "Pediatrics",
    "ENT"
];

export const branches = [
    "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
    "Ibn Sina Specialized Hospital, Dhanmondi",
    "Ibn Sina Medical College Hospital, Kallyanpur",
    "Ibn Sina Diagnostic & Consultation Center, Uttara",
    "Ibn Sina Diagnostic & Consultation Center, Mirpur",
    "Ibn Sina Diagnostic & Consultation Center, Malibagh",
    "Ibn Sina Diagnostic & Consultation Center, Badda",
    "Ibn Sina Diagnostic & Consultation Center, Keraniganj"
];

export const mockDoctors: Doctor[] = [
    {
        id: "1",
        name: "Dr. Hasinatul Zannat",
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, FCPS(Medicine), MD(Nephrology)",
        specialty: "Nephrology & Medicine",
        languagesSpoken: ["English", "Bangla"],
        designation: "Consultant",
        institute: "National Institute of Kidney Diseases & Urology",
        department: "Medicine & Nephrology",
        branchName: "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
        branchAddress: "House 48, Road 9/A, Dhanmondi, Dhaka-1209",
        appointmentContact: "10615, +88 09610010615",
        chamberTime: "6:00 pm to 8:30 pm",
        offDays: ["Thursday", "Friday"],
        floorNumber: "IPD-4th Floor",
        roomNumber: "508",
        fee: 1500,
        experience: 12
    },
    {
        id: "2",
        name: "Dr. Topon Kumar",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, FCPS(Neurology)",
        specialty: "Neurology Specialist",
        languagesSpoken: ["English", "Bangla"],
        designation: "Senior Consultant",
        institute: "Dhaka Medical College Hospital",
        department: "Neurology",
        branchName: "Ibn Sina Specialized Hospital, Dhanmondi",
        branchAddress: "House 68, Road 15/A, Dhanmondi, Dhaka-1209",
        appointmentContact: "10615",
        chamberTime: "5:00 pm to 9:00 pm",
        offDays: ["Friday"],
        floorNumber: "3rd Floor",
        roomNumber: "302",
        fee: 1200,
        experience: 15
    },
    {
        id: "3",
        name: "Dr. Albert Miles",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, MD(Cardiology)",
        specialty: "Interventional Cardiology",
        languagesSpoken: ["English", "Bangla"],
        designation: "Associate Professor",
        institute: "National Heart Foundation",
        department: "Cardiology",
        branchName: "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
        branchAddress: "House 48, Road 9/A, Dhanmondi, Dhaka-1209",
        appointmentContact: "10615",
        chamberTime: "4:00 pm to 8:00 pm",
        offDays: ["Friday", "Monday"],
        floorNumber: "2nd Floor",
        roomNumber: "215",
        fee: 2000,
        experience: 20
    },
    {
        id: "4",
        name: "Dr. Gabriel Holt",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, MD(Neurology)",
        specialty: "Neuromedicine",
        languagesSpoken: ["English", "Bangla"],
        designation: "Consultant",
        institute: "NINS",
        department: "Neurology",
        branchName: "Ibn Sina Specialized Hospital, Dhanmondi",
        branchAddress: "House 68, Road 15/A, Dhanmondi, Dhaka-1209",
        appointmentContact: "10615",
        chamberTime: "7:00 pm to 10:00 pm",
        offDays: ["Thursday"],
        floorNumber: "4th Floor",
        roomNumber: "410",
        fee: 1000,
        experience: 8
    },
    {
        id: "5",
        name: "Dr. Lois Saunders",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, FCPS(Oncology)",
        specialty: "Clinical Oncology",
        languagesSpoken: ["English", "Bangla"],
        designation: "Senior Consultant",
        institute: "NICRH",
        department: "Oncology",
        branchName: "Ibn Sina Diagnostic & Consultation Center, Uttara",
        branchAddress: "House 52, Road 13, Sector 10, Uttara, Dhaka",
        appointmentContact: "10615",
        chamberTime: "6:00 pm to 9:00 pm",
        offDays: ["Friday"],
        floorNumber: "5th Floor",
        roomNumber: "504",
        fee: 1800,
        experience: 18
    },
    {
        id: "6",
        name: "Dr. Owen Larson",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=200&h=200",
        qualifications: "MBBS, MD(Dermatology)",
        specialty: "Skin & VD Specialist",
        languagesSpoken: ["English", "Bangla"],
        designation: "Consultant",
        institute: "BSMMU",
        department: "Dermatology",
        branchName: "Ibn Sina Diagnostic & Consultation Center, Mirpur",
        branchAddress: "Plot 11, Haji Road, Mirpur-1, Dhaka",
        appointmentContact: "10615",
        chamberTime: "5:30 pm to 8:30 pm",
        offDays: ["Friday", "Tuesday"],
        floorNumber: "2nd Floor",
        roomNumber: "208",
        fee: 1400,
        experience: 10
    }
];
