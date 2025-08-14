

export type Post = {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: 'Wellness' | 'Medical Breakthroughs' | 'Hospital News' | 'Patient Stories';
    excerpt: string;
    content: string; // Markdown or simple text for now
    imageUrl: string;
};

export const blogPosts: Post[] = [
    {
        slug: "the-importance-of-regular-health-check-ups",
        title: "The Importance of Regular Health Check-ups",
        date: "July 26, 2024",
        author: "Dr. Evelyn Reed",
        category: "Wellness",
        excerpt: "Regular health check-ups can help find problems before they start. They also can help find problems early, when your chances for treatment and cure are better.",
        imageUrl: "blog-health-checkup.jpg",
        content: `
Regular health check-ups are one of the most important steps you can take to manage your health. They are a cornerstone of preventive medicine, helping to identify potential health issues before they become serious problems.

**Why are they so important?**

1.  **Early Detection:** Many chronic diseases like diabetes, hypertension, and heart disease can develop silently without any obvious symptoms in their early stages. Regular screenings can detect these conditions early, making treatment more effective.
2.  **Preventive Care:** Check-ups provide an opportunity to receive important preventive services, such as vaccinations and cancer screenings (e.g., mammograms, colonoscopies).
3.  **Health Education:** It's a dedicated time to discuss your health concerns with a professional, get personalized advice on diet, exercise, and lifestyle, and build a trusted relationship with your doctor.
4.  **Baseline for the Future:** Regular check-ups establish a baseline of your health metrics. Over time, this data helps your doctor spot trends or changes that might indicate an emerging health issue.

Don't wait until you're sick to see a doctor. Schedule your annual check-up today and take a proactive step towards a longer, healthier life.
        `,
    },
    {
        slug: "eating-for-a-healthy-heart",
        title: "Eating for a Healthy Heart: A Guide by Our Cardiologists",
        date: "July 22, 2024",
        author: "Dr. Evelyn Reed",
        category: "Wellness",
        excerpt: "A healthy diet is one of the best weapons you have to fight cardiovascular disease. Our experts share tips on what to eat to keep your heart in top shape.",
        imageUrl: "blog-healthy-food.jpg",
        content: `
A heart-healthy diet is a powerful tool in preventing cardiovascular disease. It's not about deprivation; it's about making smart, enjoyable choices.

**Key Principles of a Heart-Healthy Diet:**

*   **Load up on Fruits and Vegetables:** They are rich in vitamins, minerals, and fiber, and low in calories.
*   **Choose Whole Grains:** Opt for whole-wheat bread, brown rice, and oatmeal over refined grains.
*   **Lean Proteins:** Include fish (especially fatty fish like salmon), poultry without skin, and legumes.
*   **Limit Unhealthy Fats:** Reduce intake of saturated and trans fats found in red meat and processed foods. Choose healthy fats like those in avocados, nuts, and olive oil.
*   **Reduce Sodium:** Too much salt can lead to high blood pressure. Read labels and cook with herbs and spices instead of salt.

Making small, consistent changes to your diet can have a big impact on your heart health over time.
        `,
    },
    {
        slug: "understanding-vaccination-schedules",
        title: "Understanding Your Child's Vaccination Schedule",
        date: "July 18, 2024",
        author: "Dr. Sofia Garcia",
        category: "Patient Stories",
        excerpt: "Vaccinations are a key part of keeping your child healthy. Here’s a guide to understanding the recommended vaccination schedule and why it’s important.",
        imageUrl: "blog-vaccine-child.jpg",
        content: `
Vaccinations are safe and effective, and they are a critical part of your child's health journey. They work by preparing your child's immune system to fight off serious diseases.

The vaccination schedule is carefully designed to provide protection when children are most vulnerable. It's important to follow the schedule recommended by your pediatrician to ensure your child gets the best possible defense against preventable diseases like measles, mumps, and polio.

If you have questions or concerns about vaccines, please talk to us. We are here to provide you with a personalized schedule and address any worries you may have.
        `,
    },
    {
        slug: "medibook-opens-new-advanced-imaging-center",
        title: "MediBook Opens New Advanced Imaging Center",
        date: "July 15, 2024",
        author: "MediBook Staff",
        category: "Hospital News",
        excerpt: "We are thrilled to announce the opening of our new Advanced Imaging Center, featuring the latest in MRI and CT scan technology to provide faster, more accurate diagnoses.",
        imageUrl: "mri-machine.jpg",
        content: `
In our commitment to providing the best possible care, MediBook is proud to announce the grand opening of our new Advanced Imaging Center at the Downtown Clinic.

This state-of-the-art facility is equipped with the latest diagnostic technology, including a high-field MRI, a 128-slice CT scanner, and advanced ultrasound machines. This technology allows for faster, clearer, and more accurate imaging, leading to better diagnostic confidence and improved patient outcomes.

The center is now open and accepting appointments. We believe this investment will significantly enhance the quality of care we provide to our community.
        `,
    },
    {
        slug: "ai-in-medicine-a-new-frontier",
        title: "AI in Medicine: A New Frontier in Diagnostics",
        date: "July 10, 2024",
        author: "Dr. Marcus Chen",
        category: "Medical Breakthroughs",
        excerpt: "Artificial Intelligence is no longer science fiction. It's transforming how we diagnose diseases, from analyzing medical images to predicting patient outcomes.",
        imageUrl: "blog-hero.jpg",
        content: `
Artificial intelligence (AI) is rapidly changing the landscape of medicine. At MediBook, we are at the forefront of adopting these new technologies to enhance patient care.

AI algorithms can now analyze medical images like X-rays and MRIs with a level of detail that can sometimes surpass the human eye, helping to detect diseases earlier and more accurately. Furthermore, AI is being used to analyze large datasets to identify patterns and predict patient risk, allowing for more personalized and proactive treatment plans.

While AI will never replace the compassionate care of a human doctor, it is becoming an invaluable tool that assists our medical team in making faster, more informed decisions for your health.
        `,
    }
];
