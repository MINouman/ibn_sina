import {
    Ambulance,
    Stethoscope,
    Baby,
    Activity,
    Heart,
    Microscope,
    Droplets,
    Scissors,
    Brain,
    Dna,
    Scan,
    ClipboardList,
    TestTube,
    CheckCircle2,
    Search,
    type LucideIcon
} from "lucide-react";

export interface ServiceFacility {
    name: string;
    price?: string;
}

export interface HospitalService {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    category: "Hospital Services" | "Specialized Centers" | "Diagnostic Services" | "Health Packages";
    details?: {
        facilities?: string[];
        rates?: { item: string; price: string }[];
        features?: string[];
        emergencyServices?: string[];
    };
    availableBranches?: string[];
}

export const BRANCHES = [
    "Dhanmondi",
    "Gulshan",
    "Uttara",
    "Keraniganj",
    "Mirpur",
    "Badda"
];

export const servicesData: HospitalService[] = [
    {
        id: "ward-cabin",
        title: "Ward/Cabin Information",
        icon: Stethoscope,
        description: "Comfortable and diverse accommodation options for patients at Ibn Sina Specialized Hospital, Dhanmondi.",
        category: "Hospital Services",
        details: {
            rates: [
                { item: "General Cabin AC", price: "4000-8000" },
                { item: "VIP Cabin", price: "15000" },
                { item: "Male Ward", price: "3000" },
                { item: "Female Ward", price: "3000" },
                { item: "Stroke Ward", price: "3000" },
                { item: "Oncology Ward", price: "3000" },
                { item: "Cardiac Ward", price: "3000" },
                { item: "ICU General", price: "8000" },
                { item: "ICU Stroke", price: "8000" },
                { item: "CCU", price: "8000" },
                { item: "CICU", price: "8000" },
                { item: "Post Cath", price: "3500" },
                { item: "Inquabetor", price: "4200" },
                { item: "Warmer", price: "4500" },
                { item: "NICU Open Cot", price: "3000" },
                { item: "HDU", price: "6000" },
                { item: "Admission Fee", price: "1200" },
                { item: "Neuro Ward", price: "3500" },
                { item: "LOR", price: "4000" }
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara", "Mirpur"]
    },
    {
        id: "emergency",
        title: "Emergency",
        icon: Ambulance,
        description: "24/7 world-class Accident & Emergency Centre with specialized trauma and cardiac care.",
        category: "Hospital Services",
        details: {
            features: [
                "6-bedded modern emergency unit",
                "Trauma and non-trauma medical/surgical emergencies 24/7",
                "Full-time experienced physicians and specialized nurses",
                "24-hour cardiac emergency care with defibrillators and monitors",
                "Ground floor Level-1 location with separate entrance"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Badda"]
    },
    {
        id: "obstetrics-gynae",
        title: "Obstetrics and Gynae (MOMOTA)",
        icon: Baby,
        description: "Comprehensive gynecology and obstetrics department 'MOMOTA' with built-in labor OT and NICU.",
        category: "Hospital Services",
        details: {
            features: [
                "Outdoor service for pregnant patients",
                "Dedicated Operation Theatre for MOMOTA",
                "Cesarean and normal delivery facilities",
                "Breast feeding and antenatal counseling",
                "24-hour emergency care by expert consultants"
            ],
            facilities: [
                "Labor Room",
                "Post Operative Ward",
                "NICU",
                "Vaccination Center"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara", "Keraniganj"]
    },
    {
        id: "stroke-icu",
        title: "Stroke ICU",
        icon: Brain,
        description: "The only center in Bangladesh providing regular neuro-interventions with full-support Stroke ICU.",
        category: "Specialized Centers",
        details: {
            features: [
                "6-bedded dedicated Stroke ICU",
                "Supervised by Prof. M. A. Hayee (pioneer in Neuro-Intervention)",
                "24/7 supervision by highly trained consultants",
                "Advanced neuro-imaging and neuro-intervention (coiling, stenting)",
                "Fully equipped with modern ventilators and monitors"
            ],
            facilities: [
                "Cerebral DSA",
                "Stenting & Coiling",
                "CPAP & BiPAP machines",
                "Portable X-ray, USG, and Echo within ICU",
                "24-hour ABG analysis"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan"]
    },
    {
        id: "nicu",
        title: "NICU",
        icon: Baby,
        description: "Comprehensive care for newborns, handling premature, LBW, and critically ill neonates.",
        category: "Hospital Services",
        details: {
            features: [
                "18-bedded advanced unit",
                "Managed by specialized consultants and trained staff",
                "24-hour intensive monitoring and care",
                "Treatment for birth asphyxia, sepsis, and heart diseases"
            ],
            facilities: [
                "Radiant Warmer & Incubator",
                "HFOV (High Frequency Oscillatory Ventilation)",
                "Neonatal and infant ventilators",
                "Phototherapy unit",
                "Transcutaneous bilirubino meter"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur", "Badda"]
    },
    {
        id: "picu",
        title: "PICU",
        icon: Activity,
        description: "Highly specialized pediatric intensive care for children from 1 month to 16 years of age.",
        category: "Hospital Services",
        details: {
            features: [
                "6-bedded specialized unit",
                "24/7 doctor and nurse support",
                "Directly supervised by highly experienced consultants",
                "Multidisciplinary team approach"
            ],
            facilities: [
                "CPAP & BiPAP",
                "High Flow Nasal Canula",
                "Modern ventilators"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara"]
    },
    {
        id: "blood-bank",
        title: "Blood Bank",
        icon: Droplets,
        description: "Government registered 24-hour secure blood transfusion service with component therapy.",
        category: "Diagnostic Services",
        details: {
            features: [
                "Modern state-of-the-art facility",
                "Blood component therapy (RBC, FFP, Platelets)",
                "Platelet Apheresis available",
                "Strictly maintained storage temperatures",
                "Routine screening for infections (Hepatitis, HIV, Malaria)"
            ],
            facilities: [
                "Packed Red Cells",
                "Fresh Frozen Plasma",
                "Cryoprecipitate",
                "Storage for up to 35 days (RBC) and 1 year (FFP)"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Keraniganj", "Mirpur"]
    },
    {
        id: "dialysis",
        title: "Dialysis Center",
        icon: Activity,
        description: "Well-established center since 1980, providing 24/7 dialysis for both hepatitis positive and negative patients.",
        category: "Specialized Centers",
        details: {
            rates: [
                { item: "Bicarbonate Dialysis (with new set)", price: "3500" },
                { item: "Positive Case Dialysis", price: "4000" },
                { item: "SLED Dialysis (4 Hours)", price: "5600" },
                { item: "SLED Dialysis (6 Hours)", price: "7500" }
            ],
            features: [
                "18 B-BRAUN (Germany) computerized machines",
                "Dedicated machines for ICU and hepatitis positive patients",
                "Separate rooms for positive cases with one-time use dialyzers",
                "24-hour experienced doctor and nurse presence"
            ]
        },
        availableBranches: ["Dhanmondi", "Badda"]
    },
    {
        id: "surgery",
        title: "Surgery",
        icon: Scissors,
        description: "Advanced surgical support featuring C-arm, operating microscopes, and various specialist surgical services.",
        category: "Hospital Services",
        details: {
            features: [
                "8 operation theatres (5 General, 2 Neuro, 2 Gynae)",
                "Advanced Laparoscopic surgery",
                "Neuro and Spine surgery",
                "Knee and Hip replacement",
                "Urology, Orthopedic, and Vascular surgery"
            ],
            facilities: [
                "Modular OTs",
                "Anesthesia machines with ventilators",
                "Arthroscopy & Endoscopy suites"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara", "Gulshan"]
    },
    {
        id: "neurosurgery",
        title: "Neurosurgery Center",
        icon: Brain,
        description: "Expert treatment for brain and spinal cord disorders using world-class surgical instruments.",
        category: "Specialized Centers",
        details: {
            features: [
                "Full-time specialist neurosurgeons",
                "Multidisciplinary neurosurgery team",
                "24-hour service by skilled registrar and medical officers",
                "25% discount on all tests"
            ],
            facilities: [
                "Treatment for Aneurysms, Brain Tumors, and Infections",
                "Spinal Disorder management",
                "Hydrocephalus treatment"
            ]
        },
        availableBranches: ["Dhanmondi"]
    },
    {
        id: "cardiac-center",
        title: "Cardiac Center",
        icon: Heart,
        description: "One-stop center for cardiac ailments, providing interventional procedures and complex cardiac surgeries.",
        category: "Specialized Centers",
        details: {
            features: [
                "State-of-the-art Cathlab",
                "Over 8000 patients served annually",
                "Interventional procedures (Angiograms, Angioplasties, Pacemakers)",
                "Bypass surgery and valve replacements",
                "24-hour ECG, ECHO, ETT services"
            ],
            facilities: [
                "CICU & CCU",
                "Paediatric Cardiac Care",
                "Diagnostic Doppler studies"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur"]
    },
    {
        id: "oncology",
        title: "Oncology & Palliative Care",
        icon: Dna,
        description: "Dedicated 24/7 care for cancer patients with specially trained staff and palliative support.",
        category: "Specialized Centers",
        details: {
            features: [
                "24/7 indoor and outdoor services",
                "Dedicated beds and cabins",
                "Specially trained physicians and nurses",
                "Day care service available",
                "Central oxygen supply in all rooms"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara"]
    },
    {
        id: "cssd",
        title: "CSSD",
        icon: Microscope,
        description: "Central Sterile Services Department ensuring zero tolerance for any infective substance.",
        category: "Hospital Services",
        details: {
            features: [
                "Modern Autoclave units",
                "Strict infection control policies",
                "Supports all surgical OTs round the clock"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara", "Mirpur", "Badda"]
    },
    {
        id: "radiology-imaging",
        title: "Radiology & Imaging",
        icon: Scan,
        description: "Advanced imaging services including MRI, CT Scan, X-Ray, and Mammography with state-of-the-art digital technology.",
        category: "Diagnostic Services",
        details: {
            features: [
                "1.5T & 3T MRI (Brain, Spine, Joint, MRA, MRV)",
                "Multi-slice CT Scan (Angio, Cardiac, Urogram)",
                "Digital X-Ray and Mammography",
                "Gamma Camera (Bone Scan, Thyroid Scan, DTPA)",
                "Advanced USG & 4D Anomalies Scan"
            ],
            facilities: [
                "MRI (Whole Body, Advance)",
                "CT Scan (3D Imaging, Coronary Angio)",
                "Digital X-Ray (Chest, KUB, Spine)",
                "Mammography (Bilateral/Single)",
                "Gamma Camera (DMSA, Bone Scan)",
                "USG (W/A, Pregnancy, Doppler)"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara", "Keraniganj", "Mirpur", "Badda"]
    },
    {
        id: "pathology-services",
        title: "Pathology Services",
        icon: Microscope,
        description: "Comprehensive laboratory testing covering Biochemistry, Haematology, Immunology, and PCR molecular diagnostics.",
        category: "Diagnostic Services",
        details: {
            features: [
                "Fully automated biochemistry and hormone analysis",
                "Advanced Haematology (CBC, Blood Film, Coagulation)",
                "Immunology & Serology (Viral markers, Tumor markers)",
                "Microbiology (Culture & Sensitivity, AFB)",
                "Molecular Lab (HBV DNA, Gene Xpert PCR)"
            ],
            facilities: [
                "Biochemistry (LFT, RFT, Lipid Profile, GTT)",
                "Haematology (CBC, PCV, Platelet Count)",
                "Immunology (FT3, FT4, TSH, PSA, H-HCG)",
                "Serology (CRP, ASO Titre, Widal Test, VDRL)",
                "PCR Lab (MTB DNA, HBV Quantitative)",
                "Histopathology & Cytology (FNAC, Biopsy)"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara", "Keraniganj", "Mirpur", "Badda"]
    },
    {
        id: "specialized-diagnostics",
        title: "Specialized Diagnostics",
        icon: TestTube,
        description: "Specialized investigative procedures including Endoscopy, Colonoscopy, NCV/EMG, and Cardiac diagnostics.",
        category: "Diagnostic Services",
        details: {
            features: [
                "Gastroenterology (ERCP, Colonoscopy, Gastroscopy)",
                "Neuro-diagnostics (EEG, NCV/EMG, RNS)",
                "Cardiac testing (ECG, ETT, Holter, Echo)",
                "Respiratory (Spirometry, Lung Function Test)",
                "Specialized Fibroscan with CAP"
            ],
            facilities: [
                "ERCP (Diagnostic & Therapeutic)",
                "Colonoscopy & Band Ligation",
                "NCV/EMG (Upper & Lower Limbs)",
                "ECG, ETT, & Halter Monitoring",
                "Fibroscan (Liver Stiffness)",
                "EEG (Digital, 24-hour monitoring)"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan"]
    },
    {
        id: "hcp-01",
        title: "Basic Health Check-up",
        icon: ClipboardList,
        description: "Essential health screening for adult males and females, covering core blood, urine, and imaging tests.",
        category: "Health Packages",
        details: {
            features: [
                "Complete blood screening (CBC, ESR)",
                "Organ function tests (SGPT, Creatinine)",
                "Screening for HBsAg and TSH",
                "Imaging: Chest X-Ray and Whole Abdomen USG"
            ],
            rates: [
                { item: "Original Rate", price: "8015" },
                { item: "Package Rate", price: "5200" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "CBC with ESR, Fasting Blood Sugar",
                "Fasting Lipid Profile, Serum Bilirubin",
                "SGPT, Uric Acid, Serum Creatinine",
                "Urine R/M/E, TSH, Blood Grouping",
                "X-Ray Chest P/A, USG Whole Abdomen, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara", "Mirpur"]
    },
    {
        id: "hcp-02",
        title: "Executive Health Check-up (Male < 40)",
        icon: ClipboardList,
        description: "Comprehensive screening for young professional males, including 2H ABF and prostate USG.",
        category: "Health Packages",
        details: {
            features: [
                "Full metabolic profile",
                "Cardiovascular health screening (ECG, Lipid)",
                "Urogenital USG (Prostate & PVR)",
                "Liver and kidney function tests"
            ],
            rates: [
                { item: "Original Rate", price: "8276" },
                { item: "Package Rate", price: "5250" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "CBC, FBS & 2H ABF, Lipid Profile",
                "HBsAg, Bilirubin, SGPT, Uric Acid",
                "Creatinine, Urine R/M/E, TSH, Blood Group",
                "X-Ray Chest, USG W/A (PVR/Prostate), ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-03",
        title: "Executive Health Check-up (Female < 40)",
        icon: ClipboardList,
        description: "Specialized health screening for young females, including PAP Smear and infection tests.",
        category: "Health Packages",
        details: {
            features: [
                "Female-specific screenings (PAP Smear)",
                "Full metabolic and organ profile",
                "Infection screening (PTV/High Vaginal Swab)",
                "Advanced imaging (USG W/A)"
            ],
            rates: [
                { item: "Original Rate", price: "11076" },
                { item: "Package Rate", price: "7200" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "CBC, FBS, Lipid Profile, HBsAg",
                "Bilirubin, SGPT, Uric Acid, Creatinine",
                "Urine R/M/E, TSH, Blood Group, X-Ray Chest",
                "USG Whole Abdomen, PAP Smear, ECG, PTV"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-04",
        title: "Executive Health Check-up (Male > 40)",
        icon: ClipboardList,
        description: "Advanced screening for senior males focused on prostate health (PSA) and age-related risks.",
        category: "Health Packages",
        details: {
            features: [
                "Prostate Cancer Screening (PSA)",
                "Full metabolic and organ profile",
                "Urogenital USG (Prostate & PVR)",
                "Comprehensive diagnostic series"
            ],
            rates: [
                { item: "Original Rate", price: "12144" },
                { item: "Package Rate", price: "7550" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "PSA Test, CBC, FBS & 2H ABF, Lipid Profile",
                "HBsAg, Bilirubin, SGPT, Uric Acid, Creatinine",
                "Urine R/M/E, TSH, Blood Group, X-Ray Chest",
                "USG W/A (PVR/Prostate), ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-05",
        title: "Executive Health Check-up (Female > 40)",
        icon: ClipboardList,
        description: "Comprehensive post-menopausal screening including bone markers and female health checks.",
        category: "Health Packages",
        details: {
            features: [
                "Bone health markers (Calcium, Phosphorus)",
                "Female health (PAP Smear, PTV)",
                "Full metabolic and organ profile",
                "Comprehensive diagnostic series"
            ],
            rates: [
                { item: "Original Rate", price: "16944" },
                { item: "Package Rate", price: "10900" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Serum Calcium, Phosphorus, Alkaline Phosphatase",
                "PAP Smear, PTV, CBC, FBS, Lipid Profile",
                "HBsAg, Bilirubin, SGPT, Uric Acid, Creatinine",
                "Urine R/M/E, TSH, Blood Group, X-Ray Chest",
                "USG W/A, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-06",
        title: "Comprehensive Health Check-up (Male > 40)",
        icon: ClipboardList,
        description: "Highly detailed 24-test package for males including vitamins, H. Pylori, and full thyroid profile.",
        category: "Health Packages",
        details: {
            features: [
                "Micronutrient profile (Vitamin D, B12, Ferritin)",
                "H. Pylori Stool Antigen screening",
                "Full Thyroid Profile (T3, T4, TSH)",
                "Inflammation marker (CRP Qualitative)"
            ],
            rates: [
                { item: "Original Rate", price: "20194" },
                { item: "Package Rate", price: "12750" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "HbA1C, Vitamin D, B12, Serum Ferritin, CRP",
                "H. Pylori Stool Ag, T3, T4, TSH, PSA",
                "CBC, FBS & 2H ABF, Lipid Profile, HBsAg",
                "Bilirubin, SGPT, Uric Acid, Creatinine, Urine",
                "Blood Group, X-Ray Chest, USG W/A, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-07",
        title: "Comprehensive Health Check-up (Female > 40)",
        icon: ClipboardList,
        description: "Ultimate female screening including Bone Mineral Density (BMD) and 26 essential tests.",
        category: "Health Packages",
        details: {
            features: [
                "Bone Mineral Density (BMD) screening",
                "Micronutrient profile (Vitamin D, B12)",
                "H. Pylori Stool Antigen screening",
                "Full Thyroid Profile (T3, T4, TSH)"
            ],
            rates: [
                { item: "Original Rate", price: "24794" },
                { item: "Package Rate", price: "16000" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "BMD Test, Vitamin D, B12, Thyroid Profile (T3/T4/TSH)",
                "H. Pylori Stool Ag, PAP Smear, PTV, Calcium",
                "Phosphorus, Alkaline Phosphatase, HbA1C, CBC, FBS",
                "Lipid Profile, HBsAg, Bilirubin, SGPT, Uric Acid",
                "Creatinine, Urine R/M/E, X-Ray Chest, USG W/A, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-08",
        title: "Cardiac Check-up Package - 1",
        icon: Heart,
        description: "Specialized screening for individuals suspected of cardiac issues, featuring Echo and TMT.",
        category: "Health Packages",
        details: {
            features: [
                "Advanced cardiovascular stress testing (TMT)",
                "Heart structure analysis (Echo Color Doppler)",
                "Core metabolic screening",
                "Full-time cardiologist medical opinion"
            ],
            rates: [
                { item: "Original Rate", price: "7372" },
                { item: "Package Rate", price: "5050" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Echo Color Doppler, TMT, ECG",
                "CBC with ESR, Fasting Blood Sugar",
                "Fasting Lipid Profile, Serum Creatinine",
                "Urine R/M/E, X-Ray Chest P/A"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Mirpur"]
    },
    {
        id: "hcp-09",
        title: "Cardiac Check-up Package - 2",
        icon: Heart,
        description: "Intensive screening for patients already suffering from heart diseases, including liver and kidney checks.",
        category: "Health Packages",
        details: {
            features: [
                "Comprehensive organ function (Liver/Kidney)",
                "Heart structure analysis (Echo Color Doppler)",
                "Viral markers (HBsAg) and metabolic screen",
                "Specialized cardiac nursing support"
            ],
            rates: [
                { item: "Original Rate", price: "8372" },
                { item: "Package Rate", price: "5800" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Echo Color Doppler, ECG, X-Ray Chest",
                "CBC, FBS, Lipid Profile, HBsAg",
                "Serum Bilirubin, SGPT, Uric Acid",
                "Serum Creatinine, Urine R/M/E"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Mirpur"]
    },
    {
        id: "hcp-10",
        title: "Liver Check-up Package - 1",
        icon: Droplets,
        description: "Essential liver health screening for suspected cases, including Hepatitis viral markers.",
        category: "Health Packages",
        details: {
            features: [
                "Full Liver Function Test (LFT) profile",
                "Hepatitis B & C screening (Elisa)",
                "Imaging: Whole Abdomen USG",
                "Expert gastro-medical opinion"
            ],
            rates: [
                { item: "Original Rate", price: "5204" },
                { item: "Package Rate", price: "3500" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "CBC, SGPT, SGOT, Alkaline Phosphatase",
                "Serum Bilirubin, HBsAg (Elisa), Anti HCV",
                "Urine R/M/E, USG Whole Abdomen"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-11",
        title: "Liver Check-up Package - 2",
        icon: Droplets,
        description: "In-depth screening for patients with chronic liver issues, including coagulation and protein levels.",
        category: "Health Packages",
        details: {
            features: [
                "Coagulation profile (PT/INR)",
                "Protein and Albumin level analysis",
                "Full-batch viral and metabolic markers",
                "Advanced abdominal imaging"
            ],
            rates: [
                { item: "Original Rate", price: "10797" },
                { item: "Package Rate", price: "7200" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "PT/INR, Serum Albumin, Serum Protein",
                "CBC, SGPT, SGOT, Alkaline Phosphatase",
                "Serum Bilirubin, HBsAg, Anti HCV",
                "Urine R/M/E, USG Whole Abdomen"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-12",
        title: "Primary Diabetic Check-up",
        icon: Activity,
        description: "Essential monitoring for diabetic patients covering blood sugar, lipids, and heart checks.",
        category: "Health Packages",
        details: {
            features: [
                "Fasting and 2H After Meal (PP) sugars",
                "Cardiovascular health (ECG, Lipid)",
                "Kidney screen (Creatinine)",
                "Quick and affordable diabetic review"
            ],
            rates: [
                { item: "Original Rate", price: "3090" },
                { item: "Package Rate", price: "1950" },
                { item: "Doctor Fee", price: "300" }
            ],
            facilities: [
                "Fasting & 2H PP Blood Sugar, HbA1C",
                "Fasting Lipid Profile, Serum Creatinine",
                "CBC with ESR, Urine R/M/E, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur"]
    },
    {
        id: "hcp-13",
        title: "Standard Diabetic Check-up",
        icon: Activity,
        description: "Comprehensive diabetic screening including HbA1C, electrolytes, and micro-albumin checks.",
        category: "Health Packages",
        details: {
            features: [
                "Long-term sugar control (HbA1C)",
                "Renal health markers (Electrolytes, Micro Albumin)",
                "Full body imaging (USG, X-Ray)",
                "Detailed diagnostic analysis"
            ],
            rates: [
                { item: "Original Rate", price: "6758" },
                { item: "Package Rate", price: "4300" },
                { item: "Doctor Fee", price: "300" }
            ],
            facilities: [
                "HbA1C, Serum Electrolytes, Urine Micro Albumin",
                "Fasting Blood Sugar, Lipid Profile, Creatinine",
                "CBC, Urine R/M/E, X-Ray Chest, USG Whole Abdomen, ECG"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur"]
    },
    {
        id: "hcp-14",
        title: "Thyroid Check-up Package",
        icon: Stethoscope,
        description: "Complete thyroid assessment including hormonal assays and gland imaging.",
        category: "Health Packages",
        details: {
            features: [
                "Full thyroid hormone profile (T3, T4, TSH)",
                "Antibody screening (Anti-Thyroid Ab)",
                "Imaging: Thyroid USG",
                "Endocrinology focus"
            ],
            rates: [
                { item: "Original Rate", price: "6561" },
                { item: "Package Rate", price: "4150" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "TSH, FT3, FT4, Anti-Thyroid Antibody",
                "USG of Thyroid Gland"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara"]
    },
    {
        id: "hcp-15",
        title: "Renal/Kidney Screening",
        icon: Microscope,
        description: "Comprehensive kidney health assessment including electrolytes, micro-albumin, and KUB imaging.",
        category: "Health Packages",
        details: {
            features: [
                "Kidney filtration markers (Urea, Creatinine)",
                "Electrolyte balance analysis",
                "Advanced imaging (X-Ray KUB, USG W/A)",
                "Detection of early renal changes"
            ],
            rates: [
                { item: "Original Rate", price: "6279" },
                { item: "Package Rate", price: "4000" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Blood Urea, Serum Creatinine, Uric Acid",
                "Serum Electrolytes, Urine Micro Albumin",
                "CBC with ESR, Fasting Blood Sugar",
                "Urine R/M/E, X-Ray KUB, USG W/A (PVR/Prostate)"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara", "Mirpur"]
    },
    {
        id: "hcp-16",
        title: "Cancer Screening (Male)",
        icon: Search,
        description: "Early detection screening for common cancers in males including prostate (PSA) and gastro-intestinal markers.",
        category: "Health Packages",
        details: {
            features: [
                "Prostate Cancer Marker (PSA)",
                "Stool Occult Blood for GI screening",
                "Viral markers (HBsAg, Anti HCV)",
                "Full-body diagnostic imaging"
            ],
            rates: [
                { item: "Original Rate", price: "7115" },
                { item: "Package Rate", price: "4350" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "PSA, Stool Occult Blood, HBsAg, Anti HCV",
                "CBC, SGPT, Serum Creatinine, Urine R/M/E",
                "X-Ray Chest P/A, USG Whole Abdomen"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-17",
        title: "Cancer Screening (Female)",
        icon: Search,
        description: "Comprehensive early detection for female-specific cancers (Ovary, Breast) and general markers.",
        category: "Health Packages",
        details: {
            features: [
                "Ovarian Cancer Marker (CA-125)",
                "Breast Cancer Marker (CA 15-3)",
                "Bilateral Breast Imaging (USG)",
                "Stool Occult Blood screening"
            ],
            rates: [
                { item: "Original Rate", price: "9933" },
                { item: "Package Rate", price: "5900" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "CA-125, CA 15-3, USG Breast (Bilateral)",
                "Stool Occult Blood, HBsAg, Anti HCV",
                "CBC, SGPT, Serum Creatinine, Urine R/M/E",
                "X-Ray Chest P/A, USG Whole Abdomen"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan", "Uttara"]
    },
    {
        id: "hcp-18",
        title: "Pre-Employment Health Check",
        icon: CheckCircle2,
        description: "Standard medical fitness certification including vision tests and basic infection screening.",
        category: "Health Packages",
        details: {
            features: [
                "Certified Vision & Physical Test",
                "Screening for HBsAg and VDRL",
                "Blood group and core health check",
                "Official medical fitment report"
            ],
            rates: [
                { item: "Original Rate", price: "3433" },
                { item: "Package Rate", price: "2250" },
                { item: "Doctor Fee", price: "300" }
            ],
            facilities: [
                "Vision Test, Physical Exam, Blood Grouping",
                "HBsAg, VDRL, CBC, Random/Fasting Sugar",
                "Urine R/M/E, X-Ray Chest P/A"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur"]
    },
    {
        id: "hcp-19",
        title: "Pre-Marital Check-up",
        icon: Droplets,
        description: "Specialized screening for couples covering Thalassemia (Hb Electrophoresis) and viral infection markers.",
        category: "Health Packages",
        details: {
            features: [
                "Thalassemia screening (Hb Electrophoresis)",
                "Hepatitis (B & C) and HIV screening",
                "VDRL and core health analysis",
                "Pelvis imaging (USG)"
            ],
            rates: [
                { item: "Original Rate", price: "6483" },
                { item: "Package Rate", price: "4100" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Hb Electrophoresis, HBsAg (Elisa), Anti HCV",
                "HIV Antibody, VDRL, Blood Grouping",
                "Urine R/M/E, USG Pelvis"
            ]
        },
        availableBranches: ["Dhanmondi", "Gulshan"]
    },
    {
        id: "hcp-20",
        title: "Child Health Check-up (Ages 4-16)",
        icon: Baby,
        description: "Dedicated pediatric screening covering growth, nutritional markers, and core health.",
        category: "Health Packages",
        details: {
            features: [
                "Iron and Ferritin status analysis",
                "Full cholesterol and metabolic profile",
                "Core infection and blood screening",
                "Specialized pediatric medical opinion"
            ],
            rates: [
                { item: "Original Rate", price: "7565" },
                { item: "Package Rate", price: "4900" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Serum Iron, TIBC, Ferritin, Total Cholesterol",
                "CBC, ESR, Fasting Sugar, Creatinine",
                "Blood Grouping, HBsAg, Urine R/E, Stool R/E"
            ]
        },
        availableBranches: ["Dhanmondi", "Uttara"]
    },
    {
        id: "hcp-21",
        title: "Smoker Health Check Package",
        icon: Activity,
        description: "Specialized respiratory and cardiac screening for smokers, including Lung Function and Sputum tests.",
        category: "Health Packages",
        details: {
            features: [
                "Lung Function Test (Spirometry/PFT)",
                "In-depth Sputum and respiratory screening",
                "Advanced heart checks (Echo, ECG)",
                "Chest imaging for early changes"
            ],
            rates: [
                { item: "Original Rate", price: "4661" },
                { item: "Package Rate", price: "3100" },
                { item: "Doctor Fee", price: "500" }
            ],
            facilities: [
                "Spirometry (PFT), Sputum for AFB/GM Stain",
                "Echo Cardiogram, ECG, X-Ray Chest P/A",
                "CBC with ESR, Serum IgE"
            ]
        },
        availableBranches: ["Dhanmondi", "Mirpur"]
    }
];
