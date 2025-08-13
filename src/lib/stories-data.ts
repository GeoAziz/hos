
export type Story = {
    id: string;
    slug: string;
    name: string;
    category: string;
    imageUrl: string;
    quote: string; // Short version for carousel/cards
    story: string; // Full story in markdown format
    outcome: string; // A brief summary of the positive result
    videoUrl?: string; // Optional YouTube embed URL
    doctor: {
        name: string;
        id: string; // ID to link to the doctor's profile
        imageUrl: string;
    }
};

export const patientStories: Story[] = [
    {
        id: "sarah-l-recovery",
        slug: "sarah-l-recovery",
        name: "Sarah L.",
        category: "Cardiology",
        imageUrl: "https://source.unsplash.com/800x600/?woman,portrait,happy",
        quote: "The care I received was exceptional. The doctors were knowledgeable and the staff was incredibly supportive.",
        story: `
Sarah, a 54-year-old teacher, arrived at MediBook experiencing persistent chest pain and shortness of breath. She was worried, with a family history of heart conditions.

**How MediBook Helped**

Our cardiology team, led by Dr. Evelyn Reed, immediately conducted a series of diagnostic tests, including an ECG and an angiogram. The results showed a significant blockage in one of her main coronary arteries.

Dr. Reed performed a minimally invasive angioplasty, inserting a stent to open the blocked artery. The procedure was a success. Sarah spent two days in our cardiac recovery unit, where our nursing staff provided constant care and education on lifestyle changes.

`,
        outcome: "Sarah made a full recovery and is now back to teaching, living a heart-healthy and active lifestyle.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video
        doctor: {
            name: "Dr. Evelyn Reed",
            id: "dr-evelyn-reed-cardiology",
            imageUrl: "https://source.unsplash.com/400x400/?doctor,woman,professional,headshot"
        }
    },
    {
        id: "john-d-knee-surgery",
        slug: "john-d-knee-surgery",
        name: "John D.",
        category: "Orthopedics",
        imageUrl: "https://source.unsplash.com/800x600/?man,portrait,outdoors",
        quote: "Thanks to Dr. Carter, I was back on my feet in record time. I never thought I'd be able to hike again.",
        story: `
John, an avid 62-year-old hiker, suffered a severe knee injury during a mountain trek. The pain was debilitating, and he feared he would never be able to pursue his passion again.

**How MediBook Helped**

Dr. Ben Carter, our chief orthopedic surgeon, diagnosed a torn ACL and recommended arthroscopic surgery. He explained the procedure in detail, reassuring John and his family.

The surgery was performed at our Uptown Medical Center. Post-operation, John began a personalized physiotherapy program at our state-of-the-art rehab facility. The therapists worked with him daily, helping him regain strength and mobility.
`,
        outcome: "Within three months, John was not only walking without pain but was also cleared to begin light hiking. He has since completed several trails, pain-free.",
        doctor: {
            name: "Dr. Ben Carter",
            id: "dr-ben-carter-orthopedics",
            imageUrl: "https://source.unsplash.com/400x400/?doctor,male,surgeon,headshot"
        }
    },
    {
        id: "emily-r-pediatrics",
        slug: "emily-r-pediatrics",
        name: "Emily R.",
        category: "Pediatrics",
        imageUrl: "https://source.unsplash.com/800x600/?mother,child,happy",
        quote: "Dr. Garcia is amazing with kids! She made my son feel comfortable and took the time to answer all of my questions.",
        story: `
Emily's 5-year-old son, Leo, had been suffering from recurrent, severe allergies that other clinics struggled to diagnose and manage effectively.

**How MediBook Helped**

Emily brought Leo to see Dr. Sofia Garcia in our Pediatrics department. Dr. Garcia's warm and playful approach immediately put Leo at ease. After a comprehensive consultation, she ordered a specific set of allergy tests.

The tests identified a rare allergy to a common food additive. Dr. Garcia provided Emily with a detailed management plan, including dietary changes and a new, more effective medication. She also connected Emily with a support group for parents of children with similar conditions.
`,
        outcome: "Leo's allergic reactions have completely subsided. He is now a happy, energetic child who can participate fully in school and activities.",
        doctor: {
            name: "Dr. Sofia Garcia",
            id: "dr-sofia-garcia-pediatrics",
            imageUrl: "https://source.unsplash.com/400x400/?doctor,female,pediatrician,headshot"
        }
    },
];

export const getStoryBySlug = (slug: string): Story | undefined => {
    return patientStories.find(story => story.slug === slug);
}
