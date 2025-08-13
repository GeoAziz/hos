
export type Branch = {
    id: string;
    slug: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    imageUrl: string;
    position: { lat: number; lng: number };
    services: string[];
    doctors: string[]; // Doctor names for simplicity
    hours: { day: string; time: string }[];
};

export const branchesData: Branch[] = [
    {
        id: "downtown-clinic",
        slug: "downtown-clinic",
        name: 'Downtown Clinic',
        address: '123 Health St, Medical City, MC 10001',
        phone: '(555) 123-4567',
        email: 'downtown@medibook.com',
        imageUrl: 'https://placehold.co/600x400.png',
        position: { lat: 34.0522, lng: -118.2437 },
        services: ['Cardiology', 'Neurology', 'Pediatrics', 'Emergency Care'],
        doctors: ["Dr. Evelyn Reed", "Dr. Marcus Chen", "Dr. Sofia Garcia"],
        hours: [
            { day: "Monday - Friday", time: "8:00 AM - 7:00 PM" },
            { day: "Saturday", time: "9:00 AM - 5:00 PM" },
            { day: "Sunday", time: "Closed" },
        ],
    },
    {
        id: "uptown-medical-center",
        slug: "uptown-medical-center",
        name: 'Uptown Medical Center',
        address: '456 Wellness Ave, Medical City, MC 10002',
        phone: '(555) 987-6543',
        email: 'uptown@medibook.com',
        imageUrl: 'https://placehold.co/600x400.png',
        position: { lat: 34.0722, lng: -118.2637 },
        services: ['General Check-up', 'Dermatology', 'Orthopedics', 'Advanced Imaging'],
        doctors: ["Dr. Olivia White", "Dr. Ben Carter"],
        hours: [
            { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
            { day: "Saturday", time: "10:00 AM - 4:00 PM" },
            { day: "Sunday", time: "Closed" },
        ],
    },
    {
        id: "seaside-health",
        slug: "seaside-health",
        name: 'Seaside Health',
        address: '789 Ocean View, Bayside, BS 20301',
        phone: '(555) 234-5678',
        email: 'seaside@medibook.com',
        imageUrl: 'https://placehold.co/600x400.png',
        position: { lat: 33.9522, lng: -118.3437 },
        services: ['Dermatology', 'Orthopedics', 'Physiotherapy', 'General Check-up'],
        doctors: ["Dr. Olivia White", "Dr. Ben Carter"],
         hours: [
            { day: "Monday - Saturday", time: "9:00 AM - 5:00 PM" },
            { day: "Sunday", time: "10:00 AM - 2:00 PM" },
        ],
    },
    {
        id: "mountainview-hospital",
        slug: "mountainview-hospital",
        name: 'Mountainview Hospital',
        address: '101 Peak Rd, Summit City, SC 30501',
        phone: '(555) 345-6789',
        email: 'mountainview@medibook.com',
        imageUrl: 'https://placehold.co/600x400.png',
        position: { lat: 34.1522, lng: -118.1437 },
        services: ['Emergency Care', 'Surgery', 'Radiology', 'Immunology'],
        doctors: [],
         hours: [
            { day: "Emergency", time: "Open 24/7" },
            { day: "Visiting Hours", time: "10:00 AM - 8:00 PM" },
        ],
    }
];

export const getBranches = (): Branch[] => {
    return branchesData;
};

export const getBranchBySlug = (slug: string): Branch | undefined => {
    return branchesData.find(branch => branch.slug === slug);
}
