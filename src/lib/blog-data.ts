

export type Post = {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: 'Wellness' | 'Medical Breakthroughs' | 'Community Health' | 'Expert Insights';
    excerpt: string;
    content: string; // Markdown or simple text for now
    imageUrl: string;
};

export const blogPosts: Post[] = [
    {
        slug: "understanding-and-managing-type-2-diabetes",
        title: "Understanding and Managing Type 2 Diabetes",
        date: "August 05, 2024",
        author: "Dr. Evelyn Reed",
        category: "Wellness",
        excerpt: "Type 2 diabetes is a common condition that causes the level of sugar (glucose) in the blood to become too high. Learn about the best ways to manage it through lifestyle changes and medical care.",
        imageUrl: "/images/blog-diabetes-management.jpg",
        content: `
Type 2 diabetes is a chronic condition that affects how your body metabolizes sugar (glucose), your body's main source of fuel. With type 2 diabetes, your body either resists the effects of insulin — a hormone that regulates the movement of sugar into your cells — or doesn't produce enough insulin to maintain normal glucose levels.

**Key Management Strategies:**

1.  **Healthy Eating:** Focus on a diet rich in fruits, vegetables, and whole grains. Monitor carbohydrate intake and choose foods with a low glycemic index.
2.  **Regular Exercise:** Aim for at least 30 minutes of moderate aerobic activity most days of the week. Physical activity helps lower your blood sugar.
3.  **Medication and Insulin Therapy:** Some people with type 2 diabetes can achieve their target blood sugar levels with diet and exercise alone, but many also need diabetes medications or insulin therapy.
4.  **Regular Monitoring:** Check your blood sugar levels regularly as advised by your doctor to ensure you are within your target range.

Living with diabetes can be challenging, but with the right support and management plan from our endocrinology department, you can live a long and healthy life.
        `,
    },
    {
        slug: "the-silent-killer-what-you-need-to-know-about-hypertension",
        title: "The Silent Killer: What You Need to Know About Hypertension",
        date: "August 01, 2024",
        author: "Dr. Marcus Chen",
        category: "Community Health",
        excerpt: "High blood pressure (hypertension) often has no symptoms, but it's a major risk factor for heart disease and stroke. Here's how to prevent and control it.",
        imageUrl: "/images/blog-hypertension.jpg",
        content: `
Hypertension, or high blood pressure, is a serious medical condition that significantly increases the risks of heart, brain, kidney, and other diseases. It's often called the "silent killer" because it typically has no warning signs or symptoms.

**Understanding the Numbers:**
A blood pressure reading has two numbers. The first, systolic, represents the pressure in your blood vessels when your heart beats. The second, diastolic, represents the pressure in your vessels when your heart rests between beats. A reading of 130/80 mm Hg or higher is considered high blood pressure.

**Prevention and Control:**

*   **Reduce Salt Intake:** Limiting sodium in your diet is one of the most effective ways to lower blood pressure.
*   **Eat a Balanced Diet:** The DASH (Dietary Approaches to Stop Hypertension) diet, which is rich in fruits, vegetables, and low-fat dairy products, is highly recommended.
*   **Limit Alcohol:** Drinking too much alcohol can raise your blood pressure.
*   **Get Active:** Regular physical activity makes your heart stronger, so it can pump more blood with less effort.
*   **Maintain a Healthy Weight:** Losing even a small amount of weight if you're overweight or obese can help lower your blood pressure.

Regular check-ups at MediBook can help you monitor your blood pressure and get the right advice to manage it effectively.
        `,
    },
    {
        slug: "debunking-common-myths-about-vaccinations",
        title: "Debunking Common Myths About Vaccinations",
        date: "July 28, 2024",
        author: "Dr. Sofia Garcia",
        category: "Expert Insights",
        excerpt: "Vaccines are one of the most successful public health interventions in history, yet they are surrounded by myths and misinformation. Let's clear the air on some common misconceptions.",
        imageUrl: "/images/blog-vaccination.jpg",
        content: `
Vaccines save millions of lives each year. They work by training your immune system to create antibodies, just as it does when it's exposed to a disease, but without you having to get sick.

**Myth 1: Vaccines cause autism.**
This is one of the most damaging myths. The 1998 study that raised concerns has been completely discredited and retracted. Numerous large-scale studies worldwide have found no link between vaccines and autism.

**Myth 2: Natural immunity is better than vaccine-acquired immunity.**
While natural infection can provide strong immunity, it comes with the risk of serious complications. For example, a natural measles infection can lead to pneumonia or encephalitis. Vaccines provide immunity without the risks of the disease itself.

**Myth 3: Vaccines contain unsafe toxins.**
Ingredients like formaldehyde or aluminum are present in vaccines in tiny, safe amounts—often less than what you would find naturally in the environment or in your diet. They play essential roles in ensuring the vaccine's safety and effectiveness.

At MediBook Pediatrics, we are committed to providing you with accurate, evidence-based information. Please talk to us about any concerns you have regarding your child's vaccinations.
        `,
    },
    {
        slug: "advancements-in-minimally-invasive-surgery",
        title: "The Revolution in the OR: Advancements in Minimally Invasive Surgery",
        date: "July 22, 2024",
        author: "Dr. Ben Carter",
        category: "Medical Breakthroughs",
        excerpt: "Minimally invasive surgery is transforming patient recovery. With smaller incisions, less pain, and shorter hospital stays, it's a game-changer in modern medicine.",
        imageUrl: "/images/blog-surgery.jpg",
        content: `
Minimally invasive surgery (MIS) uses advanced technology to perform operations through small incisions. Unlike traditional open surgery, which requires large cuts, MIS techniques offer significant benefits for patients.

**Types of MIS:**
*   **Laparoscopy:** A thin, lighted tube with a camera (laparoscope) is inserted through a small incision, allowing surgeons to see inside the body on a monitor.
*   **Robotic Surgery:** This provides surgeons with a high-definition, 3D view of the surgical site and allows them to use tiny, wristed instruments that bend and rotate far greater than the human hand.

**Patient Benefits:**
*   **Less Pain:** Smaller incisions mean less trauma to the body.
*   **Reduced Scarring:** Incisions are much smaller and less noticeable.
*   **Shorter Hospital Stay:** Patients can often go home sooner.
*   **Faster Recovery Time:** Patients can return to their normal activities more quickly.

At MediBook, our surgical teams are highly skilled in a wide range of minimally invasive procedures, from orthopedic to general surgery, ensuring you receive the most advanced and effective care.
        `,
    },
    {
        slug: "the-importance-of-regular-eye-check-ups",
        title: "More Than Just Glasses: The Importance of Regular Eye Check-ups",
        date: "July 19, 2024",
        author: "Dr. Olivia White",
        category: "Wellness",
        excerpt: "An eye exam can detect much more than just vision problems. It's a window into your overall health, capable of spotting signs of diabetes, high blood pressure, and more.",
        imageUrl: "/images/blog-eye-exam.jpg",
        content: `
Many people think of eye exams as just a way to get a new prescription for glasses or contacts. However, a comprehensive eye exam is a critical part of your overall healthcare routine.

**What Can an Eye Exam Detect?**
Your eyes provide a clear view of your blood vessels, nerves, and connective tissues. This allows our ophthalmologists to detect early signs of serious health conditions, including:

*   **Diabetes:** Tiny blood vessels in the retina can leak blood or yellow fluid, a condition known as diabetic retinopathy.
*   **Hypertension:** The eye's blood vessels can show damage from high blood pressure, such as bending or tearing.
*   **High Cholesterol:** A yellow or blue ring around the cornea can be a sign of high cholesterol in younger patients.
*   **Autoimmune Disorders:** Conditions like lupus or rheumatoid arthritis can cause inflammation in the eyes.
*   **Glaucoma and Macular Degeneration:** These common eye diseases often have no early symptoms and can only be detected through a thorough exam.

Don't wait for symptoms to appear. Schedule regular eye check-ups at our Specialty Clinic to protect both your vision and your overall health.
        `,
    }
];
