
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
        id: "bungoma",
        slug: "bungoma",
        name: 'MediBook Bungoma',
        address: 'Moi Avenue, Bungoma',
        phone: '+254 700 123 456',
        email: 'bungoma@medibook.com',
        imageUrl: '/images/branch-bungoma.jpg',
        position: { lat: 0.5694, lng: 34.5584 },
        services: ['General OP', 'Pharmacy', 'Laboratory', 'Maternity'],
        doctors: ["Dr. Evelyn Reed"],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    },
    {
        id: "migori",
        slug: "migori",
        name: 'MediBook Migori',
        address: 'Hospital Road, Migori',
        phone: '+254 700 234 567',
        email: 'migori@medibook.com',
        imageUrl: '/images/branch-migori.jpg',
        position: { lat: -1.0634, lng: 34.4752 },
        services: ['Dental', 'Optical', 'Physiotherapy', 'General Surgery'],
        doctors: ["Dr. Marcus Chen"],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    },
    {
        id: "kikuyu",
        slug: "kikuyu",
        name: 'MediBook Kikuyu',
        address: 'Gitaru Road, Kikuyu',
        phone: '+254 700 345 678',
        email: 'kikuyu@medibook.com',
        imageUrl: '/images/branch-kikuyu.jpg',
        position: { lat: -1.2483, lng: 36.6633 },
        services: ['Pediatrics', 'OB/Gyn', 'Radiology', 'ICU'],
        doctors: ["Dr. Sofia Garcia"],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    },
    {
        id: "meru",
        slug: "meru",
        name: 'MediBook Meru',
        address: 'Tom Mboya Street, Meru',
        phone: '+254 700 456 789',
        email: 'meru@medibook.com',
        imageUrl: '/images/branch-meru.jpg',
        position: { lat: 0.0478, lng: 37.6493 },
        services: ['Orthopedics', 'ENT', 'Dermatology', 'Urology'],
        doctors: ["Dr. Ben Carter"],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    },
    {
        id: "mlolongo",
        slug: "mlolongo",
        name: 'MediBook Mlolongo',
        address: 'Mombasa Road, Mlolongo',
        phone: '+254 700 567 890',
        email: 'mlolongo@medibook.com',
        imageUrl: '/images/branch-mlolongo.jpg',
        position: { lat: -1.3784, lng: 36.9458 },
        services: ['Gastroenterology', 'Laboratory', 'Pharmacy', 'General OP'],
        doctors: ["Dr. Olivia White"],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    },
    {
        id: "eldoret",
        slug: "eldoret",
        name: 'MediBook Eldoret',
        address: 'Oloo Street, Eldoret',
        phone: '+254 700 678 901',
        email: 'eldoret@medibook.com',
        imageUrl: '/images/branch-eldoret.jpg',
        position: { lat: 0.5143, lng: 35.2698 },
        services: ['CT Scan', 'MRI', 'Ultrasound', 'Critical Care'],
        doctors: [],
        hours: [
            { day: "Monday - Sunday", time: "Open 24/7" },
        ],
    }
];

export const getBranches = (): Branch[] => {
    return branchesData;
};

export const getBranchBySlug = (slug: string): Branch | undefined => {
    return branchesData.find(branch => branch.slug === slug);
}
