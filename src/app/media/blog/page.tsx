
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Importance of Regular Health Check-ups",
        date: "July 26, 2024",
        author: "Dr. Evelyn Reed",
        excerpt: "Regular health check-ups can help find problems before they start. They also can help find problems early, when your chances for treatment and cure are better.",
        imageUrl: "https://placehold.co/600x400.png",
    },
    {
        title: "Eating for a Healthy Heart: A Guide by Our Cardiologists",
        date: "July 22, 2024",
        author: "Dr. Evelyn Reed",
        excerpt: "A healthy diet is one of the best weapons you have to fight cardiovascular disease. Our experts share tips on what to eat to keep your heart in top shape.",
        imageUrl: "https://placehold.co/600x400.png",
    },
    {
        title: "Understanding Your Child's Vaccination Schedule",
        date: "July 18, 2024",
        author: "Dr. Sofia Garcia",
        excerpt: "Vaccinations are a key part of keeping your child healthy. Here’s a guide to understanding the recommended vaccination schedule and why it’s important.",
        imageUrl: "https://placehold.co/600x400.png",
    },
    {
        title: "5 Common Neurological Disorders: Signs and Symptoms",
        date: "July 15, 2024",
        author: "Dr. Marcus Chen",
        excerpt: "From migraines to epilepsy, our lead neurologist discusses the common signs and symptoms of neurological disorders and when to seek help.",
        imageUrl: "https://placehold.co/600x400.png",
    }
];

export default function BlogPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">MediBook Blog</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Health insights from our team of experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    <main className="md:col-span-8">
                        <div className="space-y-12">
                            {blogPosts.map(post => (
                                <Card key={post.title} className="flex flex-col md:flex-row overflow-hidden shadow-lg">
                                    <div className="relative md:w-1/3 h-64 md:h-auto">
                                        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="md:w-2/3 p-6 flex flex-col">
                                        <CardHeader className="p-0">
                                            <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                                            <CardDescription>
                                                <span>{post.date}</span> by <span className="text-primary">{post.author}</span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0 pt-4 flex-grow">
                                            <p className="text-muted-foreground">{post.excerpt}</p>
                                        </CardContent>
                                        <CardFooter className="p-0 pt-4">
                                            <Button variant="link" className="p-0">
                                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </main>

                    <aside className="md:col-span-4 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Search</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2">
                                    <Input placeholder="Search articles..." />
                                    <Button>Go</Button>
                                </div>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="hover:text-primary cursor-pointer">Cardiology</li>
                                    <li className="hover:text-primary cursor-pointer">Pediatrics</li>
                                    <li className="hover:text-primary cursor-pointer">Neurology</li>
                                    <li className="hover:text-primary cursor-pointer">Wellness</li>
                                    <li className="hover:text-primary cursor-pointer">Hospital News</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}
