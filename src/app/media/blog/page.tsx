
'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts, Post } from "@/lib/blog-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const allCategories = [...new Set(blogPosts.map(post => post.category))];

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = filteredPosts[0];
    const otherPosts = filteredPosts.slice(1);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">MediBook Blog</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Health insights from our team of experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    <main className="md:col-span-8 lg:col-span-9">
                        {featuredPost && (
                             <Card className="mb-12 shadow-xl border-l-4 border-primary overflow-hidden">
                                <Link href={`/media/blog/${featuredPost.slug}`} className="grid md:grid-cols-2 items-center">
                                    <div className="relative h-80 w-full">
                                        <Image src={featuredPost.imageUrl} alt={featuredPost.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="p-8">
                                        <Badge variant="secondary" className="mb-4">{featuredPost.category}</Badge>
                                        <CardTitle className="text-3xl mb-4 leading-tight">{featuredPost.title}</CardTitle>
                                        <CardDescription className="text-base mb-2">
                                            <span>{featuredPost.date}</span> by <span className="text-primary">{featuredPost.author}</span>
                                        </CardDescription>
                                        <p className="text-muted-foreground text-lg mt-4">{featuredPost.excerpt}</p>
                                        <div className="flex items-center mt-6 text-primary font-semibold">
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </Link>
                            </Card>
                        )}
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {otherPosts.map(post => (
                                <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                    <Link href={`/media/blog/${post.slug}`}>
                                        <CardHeader className="p-0">
                                            <div className="relative h-56 w-full">
                                                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6 flex-grow">
                                            <Badge variant="outline" className="mb-2">{post.category}</Badge>
                                            <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                                            <CardDescription>
                                                <span>{post.date}</span> by <span className="text-primary">{post.author}</span>
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter className="p-6 pt-0">
                                            <div className="flex items-center text-sm text-primary font-semibold">
                                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardFooter>
                                    </Link>
                                </Card>
                            ))}
                        </div>

                         {filteredPosts.length === 0 && (
                            <div className="text-center py-20">
                                <h3 className="text-2xl font-semibold">No Posts Found</h3>
                                <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
                            </div>
                        )}

                    </main>

                    <aside className="md:col-span-4 lg:col-span-3 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Search</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input placeholder="Search articles..." className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                     <li>
                                        <Button 
                                            variant={selectedCategory === null ? 'default' : 'ghost'} 
                                            className="w-full justify-start"
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            All Categories
                                        </Button>
                                    </li>
                                    {allCategories.map(category => (
                                        <li key={category}>
                                            <Button 
                                                variant={selectedCategory === category ? 'default' : 'ghost'}
                                                className="w-full justify-start"
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}
