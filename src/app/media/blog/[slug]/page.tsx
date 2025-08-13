

import { notFound } from 'next/navigation';
import { blogPosts, Post } from '@/lib/blog-data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type BlogPostPageProps = {
    params: {
        slug: string;
    }
}

// Generate static pages for each blog post for better performance and SEO
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): Post | undefined {
    return blogPosts.find(p => p.slug === slug);
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2);

    return (
        <div className="bg-background">
            <header className="relative h-[60vh]">
                <Image 
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                 <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
                    <Badge variant="secondary" className="text-base w-fit mb-4">{post.category}</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{post.title}</h1>
                    <div className="flex items-center gap-4 mt-6">
                        <Avatar>
                            <AvatarImage src={`https://source.unsplash.com/100x100/?doctor,headshot,${post.author.split(" ").pop()}`} alt={post.author} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-lg">{post.author}</p>
                            <p className="text-muted-foreground">{post.date}</p>
                        </div>
                    </div>
                 </div>
            </header>
            
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    <article className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none">
                         <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>
                         <div className="space-y-6 text-lg">
                            {post.content.trim().split('\n\n').map((paragraph, index) => {
                                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                    return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(2, -2)}</h3>;
                                }
                                return <p key={index}>{paragraph}</p>;
                            })}
                        </div>
                    </article>

                    <aside className="lg:col-span-4 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Share This Post</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-2">
                                <Button variant="outline" size="icon"><Twitter className="h-5 w-5"/></Button>
                                <Button variant="outline" size="icon"><Facebook className="h-5 w-5"/></Button>
                                <Button variant="outline" size="icon"><Linkedin className="h-5 w-5"/></Button>
                            </CardContent>
                        </Card>
                        {relatedPosts.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Related Posts</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                     {relatedPosts.map(related => (
                                         <Link href={`/media/blog/${related.slug}`} key={related.slug} className="block group">
                                             <p className="font-semibold group-hover:text-primary transition-colors">{related.title}</p>
                                             <p className="text-sm text-muted-foreground">{related.excerpt.slice(0, 80)}...</p>
                                         </Link>
                                     ))}
                                </CardContent>
                            </Card>
                        )}
                    </aside>
                </div>
            </div>

        </div>
    );
}
