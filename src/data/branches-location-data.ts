export interface BranchLocation {
    id: string;
    name: string;
    coordinates: [number, number]; // [longitude, latitude]
    address: string;
    type: "Hospital" | "Diagnostic Center" | "Medical College" | "Consultation Center" | "Cancer Center" | "Medical Check-Up Unit";
    phoneNumbers?: { label?: string; number: string }[];
    hotline?: string;
    email?: string;
    emails?: string[];
    googleMapUrl?: string; // location map
    website?: string;
}

export const BRANCH_LOCATIONS: BranchLocation[] = [
    {
        id: "dhanmondi-9a",
        name: "Ibn Sina Diagnostic & Imaging Markaz, Dhanmondi",
        coordinates: [90.36970, 23.74538],
        address: "House 48, Road 9/A, Dhanmondi, Dhaka-1209",
        type: "Diagnostic Center",
        phoneNumbers: [
            { number: "+88 02 48115270-2" },
            { number: "+88 02 48114040-1" },
            { number: "+88 02 9101950-2" },
            { number: "+88 02 9102024-5" },
            { number: "+88 02 88111231, 88111234, 88111247" },
            { number: "88111152, 88111884" }
        ],
        hotline: "+88 09610010615"
    },
    {
        id: "dhanmondi-specialized",
        name: "Ibn Sina Specialized Hospital, Dhanmondi",
        coordinates: [90.37250, 23.75150],
        address: "House#68, Road#15/A, Dhanmondi, Dhaka-1209",
        type: "Hospital",
        phoneNumbers: [
            { label: "Information & Doctor Serial", number: "0182-3039800, 09610009630" },
            { label: "Test and Report", number: "55029101-9" },
            { label: "Cardiac Service", number: "01771241673" },
            { label: "Customer Care", number: "01824666536" },
            { label: "Emergency Customer Care", number: "01766633012" },
            { label: "Momota (Gynae)", number: "01817144611" },
            { label: "ICU", number: "01817144612" },
            { label: "CCU", number: "01775918016" }
        ]
    },
    {
        id: "zigatola",
        name: "Ibn Sina Medical Imaging Center, Zigatola",
        coordinates: [90.37332, 23.73905],
        address: "House#58, Road#2/A, Dhaka-1209",
        type: "Diagnostic Center",
        googleMapUrl: "https://maps.app.goo.gl/S1cCKjnyv4iNM6GQ9",
        phoneNumbers: [
            { label: "Mobile", number: "01711625173, 01322002008, 01322002009" }
        ],
        hotline: "09610009625 (7:00 AM to 11:00 PM)",
        email: "imiczist@gmail.com"
    },
    {
        id: "kallyanpur-mch",
        name: "Ibn Sina Medical College Hospital, Kallyanpur",
        coordinates: [90.35922, 23.77833],
        address: "1/1, Mirpur Road, Kallyanpur, Dhaka-1216",
        type: "Medical College",
        phoneNumbers: [
            { label: "Serial/Information & Customer Service", number: "+02 41002171-7" },
            { label: "Doctor Serial / Information", number: "01311-799593, 01844-141173, 01703-725590" }
        ],
        email: "ismchoffice@gmail.com"
    },
    {
        id: "doyagonj",
        name: "Ibn Sina D.Lab & Consultation Center, Doyagonj",
        coordinates: [90.42214, 23.71036],
        address: "28, Doyagonj (Hut lane), Gandaria, Dhaka-1204",
        type: "Consultation Center",
        phoneNumbers: [
            { label: "Information (Test)", number: "02-47118925, 02-47118927, 02-47118528 (07 AM to 11 PM)" },
            { label: "Doctor Serial: Hotline", number: "09610009615, 10615" },
            { label: "Sample Collection Home Service", number: "01841211162" }
        ]
    },
    {
        id: "badda",
        name: "Ibn Sina Diagnostic & Consultation Center, Badda",
        coordinates: [90.42080, 23.78319],
        address: "Cha-72/1, Progoti Soroni, Uttar Badda, Dhaka-1212",
        type: "Diagnostic Center",
        hotline: "09610009614 (07 AM to 11 PM) [For Patient Serial, Test & Report]"
    },
    {
        id: "uttara",
        name: "Ibn Sina Diagnostic & Consultation Center, Uttara",
        coordinates: [90.38841, 23.87330],
        address: "House#52, Garib-E-Newaz Avenue, Sector#13, Uttara, Dhaka-1230",
        type: "Diagnostic Center",
        hotline: "09610009612",
        email: "istuttara@gmail.com"
    },
    {
        id: "lalbagh",
        name: "Ibn Sina Diagnostic Center Lalbagh Ltd.",
        coordinates: [90.38643, 23.72137],
        address: "27/4 Dhakeshwari Road, Lalbagh, Dhaka-1211",
        type: "Diagnostic Center",
        phoneNumbers: [
            { label: "For Serial", number: "09610009633, 9634641-5" },
            { label: "Pharmacy", number: "01955 276098" },
            { label: "Customer Service", number: "01784 382464" }
        ],
        email: "ibnsinalalbagh@gmail.com"
    },
    {
        id: "jashore",
        name: "Ibn Sina Hospital & Diagnostic Center, Jashore",
        coordinates: [89.20782, 23.16794],
        address: "House: 68, Jail Road, Daratana, Ghope, Jashore",
        type: "Hospital",
        hotline: "09610009624",
        phoneNumbers: [
            { label: "Customer Service", number: "01706 363640, 01706 363641, 01929-454545" }
        ],
        email: "Jessore.dlab@ibnsinatrust.com"
    },
    {
        id: "bogura",
        name: "Ibn Sina Diagnostic & Consultation Center, Bogura",
        coordinates: [89.36148, 24.83333],
        address: "House#1103/1116, Kanojgari, Sherpur Road, Bogura Sadar, Bogura",
        type: "Diagnostic Center",
        hotline: "09610009617 (Contact Time: 07:00 AM to 11:00 PM)",
        phoneNumbers: [
            { label: "Office & Info", number: "02589903141, 02589903142 (07 AM to 11 PM)" },
            { label: "Doctor Serial", number: "+8801701-560011, +8801701-560012 (07 AM to 11 PM)" },
            { label: "Sample Collection (Home Service)", number: "+8801709649458 (07 AM to 11 PM)" },
            { label: "Sample Collection Booth", number: "+8801752561600" }
        ],
        email: "ibnsinabogra@gmail.com"
    },
    {
        id: "bogura-hospital",
        name: "Ibn Sina Hospital & Diagonstic Center, Bogura",
        coordinates: [89.37000, 24.84200],
        address: "House#1566/1568, Colony, Sherpur Road, Sadar-5800, Bogura",
        type: "Hospital",
        phoneNumbers: [
            { number: "09610009618, 10615" }
        ],
        email: "ibnsinahospitalbogura@gmail.com"
    },
    {
        id: "malibagh",
        name: "Ibn Sina Diagnostic & Consultation Center, Malibagh",
        coordinates: [90.41066, 23.75108],
        address: "House# 479, DIT Road (Near Malibagh Rail Gate), Malibagh, Dhaka-1217",
        type: "Diagnostic Center",
        hotline: "0961 000 9611",
        phoneNumbers: [
            { label: "Mobile", number: "01844141718, 01844141717" },
            { label: "Telephone", number: "02-58315770" }
        ],
        email: "ibnsinamalibagh@gmail.com"
    },
    {
        id: "mirpur",
        name: "Ibn Sina Diagnostic & Consultation Center, Mirpur",
        coordinates: [90.35502, 23.80819],
        address: "House#11, Haji Road, Avenue 3, Rupnagar, Mirpur-2, Dhaka-1216",
        type: "Diagnostic Center",
        hotline: "09610009621",
        phoneNumbers: [
            { label: "Phone", number: "02-58051251-5" },
            { label: "For Serial", number: "01847262996, 01847262998" }
        ],
        email: "ibnsinamirpur@gmail.com"
    },
    {
        id: "savar",
        name: "Ibn Sina Diagnostic & Consultation Center, Savar",
        coordinates: [90.25613, 23.85237],
        address: "House# B, 31/6 Jaleshwar, Aricha Road, Savar, Dhaka-1340",
        type: "Diagnostic Center",
        hotline: "09610009613",
        phoneNumbers: [
            { label: "Phone", number: "02224445255-9 (7:00 AM to 11:00 PM)" },
            { label: "Sample Collection Home Services", number: "01729591481" }
        ],
        email: "ibnsinasavar@gmail.com"
    },
    {
        id: "chittagong",
        name: "Ibn Sina Diagnostic & Consultation Center, Chattogram",
        coordinates: [91.83393, 22.36256],
        address: "H#12/A, Road#02, Katalganj R/A, Panchlaish, Chattogram",
        type: "Diagnostic Center",
        hotline: "09610009622",
        phoneNumbers: [
            { label: "Phone", number: "+02334455151-4" },
            { label: "For Serial", number: "09610009622, 01886610115" },
            { label: "Customer Care", number: "01886610117 (7:00 AM to 11:00 PM)" }
        ],
        email: "ibnsinactg18@gmail.com"
    },
    {
        id: "keraniganj",
        name: "Ibn Sina Diagnostic & Consultation Center, Keraniganj Ltd.",
        coordinates: [90.39492, 23.70274],
        address: "House# Maa Plaza, Kadomtoli Mor, Zinzira, Keranijanj, Dhaka-1310",
        type: "Diagnostic Center",
        hotline: "09610009619",
        email: "info.iskg@ibnsinatrust.com"
    },
    {
        id: "cumilla",
        name: "Ibn Sina Diagnostic & Consultation Center, Cumilla",
        coordinates: [91.17500, 23.44982],
        address: "House#29, Kot Bari Road, Tomsom Bridge, Cumilla-3500",
        type: "Diagnostic Center",
        googleMapUrl: "https://goo.gl/maps/CztoboEV62rVVJaa6",
        hotline: "09610009620",
        phoneNumbers: [
            { label: "Phone", number: "02-334404470-73, 01841-212275-76" }
        ],
        email: "idic.cumilla@gmail.com"
    },
    {
        id: "jatrabari",
        name: "Ibn Sina Diagnostic & Consultation Center, Jatrabari",
        coordinates: [90.43608, 23.71132],
        address: "House# 79/1E, Demra Road, Uttar Jatrabari, Dhaka-1204",
        type: "Diagnostic Center",
        hotline: "09610009626",
        phoneNumbers: [
            { label: "Doctor Serial", number: "02223343852, 02223343853, 02223343854, 02223343855, 02223343856" }
        ],
        email: "jatrabari.dlab@ibnsinatrust.com",
        website: "ibnsinatrust.com"
    },
    {
        id: "rajshahi",
        name: "Ibn Sina Diagnostic & Consultation Center, Rajshahi",
        coordinates: [88.57622, 24.36881],
        address: "House# 223&224, Kazihata (Opposite side of Television Centre), Rajpara, Rajshahi",
        type: "Diagnostic Center",
        hotline: "09610009636",
        email: "ibnsinarajshahi@ibnsinatrust.com"
    },
    {
        id: "noakhali",
        name: "Ibn Sina Hospital & Diagnostic Center, Noakhali",
        coordinates: [91.08581, 22.87218],
        address: "Hospital Road (Opposite of Sadar Hospital), Maijdee Court, Noakhali",
        type: "Hospital",
        googleMapUrl: "https://maps.app.goo.gl/3WQeA5Ye2nEJyrzo7",
        phoneNumbers: [
            { number: "09610009623, 01804419823, 01804419824" }
        ],
        email: "ibnsinanoakhali@gmail.com"
    },
    {
        id: "dhanmondi-cancer",
        name: "Ibn Sina Cancer Diagnostic Center, Dhanmondi",
        coordinates: [90.37050, 23.74600],
        address: "House-47, Road-10/A, Satmasjid Road, Dhaka 1205",
        type: "Cancer Center",
        phoneNumbers: [
            { number: "09610009637, 10615" }
        ],
        email: "info@ibnsinatrust.com"
    },
    {
        id: "sylhet",
        name: "Ibn Sina Diagnostic & Consultation Center, Sylhet",
        coordinates: [91.85874, 24.89874],
        address: "Sylhet",
        type: "Diagnostic Center"
    },
    {
        id: "dhanmondi-checkup",
        name: "Ibn Sina Medical Check-Up Unit",
        coordinates: [90.40740, 23.74706],
        address: "Dhanmondi, Dhaka",
        type: "Medical Check-Up Unit"
    }
];
