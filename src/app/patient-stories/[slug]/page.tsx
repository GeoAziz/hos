
import { notFound } from 'next/navigation';
import { patientStories, getStoryBySlug } from '@/lib/stories-data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clapperboard, HeartHandshake, UserMd, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type StoryPageProps = {
    params: {
        slug: string;
    }
}

// Generate static pages for each story for better performance and SEO
export async function generateStaticParams() {
  return patientStories.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryPage({ params }: StoryPageProps) {
    const story = getStoryBySlug(params.slug);

    if (!story) {
        notFound();
    }

    return (
        <div className="bg-background">
            <header className="relative h-[50vh]">
                 <Image 
                    src={story.imageUrl}
                    alt={story.name}
                    fill
                    className="object-cover opacity-20"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                 <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center text-center">
                    <Badge variant="secondary" className="text-base mb-4">{story.category} Success Story</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">The Story of {story.name}</h1>
                 </div>
            </header>
            
            <div className="container mx-auto px-4 py-16 -mt-24">
                 <div className="max-w-4xl mx-auto">
                    <Card className="shadow-2xl">
                        <CardContent className="p-8 md:p-12">
                            <blockquote className="text-center text-xl md:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 py-4 mb-10">
                                "{story.quote}"
                            </blockquote>

                             <article className="prose prose-lg dark:prose-invert max-w-none">
                                 <div className="space-y-6">
                                    {story.story.trim().split('\n\n').map((paragraph, index) => {
                                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                            return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(2, -2)}</h3>;
                                        }
                                        return <p key={index}>{paragraph}</p>;
                                    })}
                                </div>
                            </article>
                            
                            <Card className="bg-green-50 border-green-200 mt-12">
                                <CardHeader className="flex-row items-center gap-4">
                                     <CheckCircle className="h-10 w-10 text-green-600 flex-shrink-0" />
                                     <div>
                                        <CardTitle className="text-green-900">A Positive Outcome</CardTitle>
                                        <CardDescription className="text-green-800">The result of our dedicated care.</CardDescription>
                                     </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-green-800 font-semibold">{story.outcome}</p>
                                </CardContent>
                            </Card>

                            {story.videoUrl && (
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                                        <Clapperboard className="h-8 w-8 text-primary" />
                                        Watch Their Story
                                    </h2>
                                    <div className="aspect-video">
                                        <iframe
                                            className="w-full h-full rounded-lg shadow-lg"
                                            src={story.videoUrl}
                                            title={`Patient Story: ${story.name}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            )}

                             <Card className="mt-12 bg-secondary">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Stethoscope className="h-7 w-7 text-primary" />
                                        Meet the Doctor
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col sm:flex-row items-center gap-6">
                                    <Avatar className="h-24 w-24">
                                        <AvatarImage src={story.doctor.imageUrl} alt={story.doctor.name} />
                                        <AvatarFallback>{story.doctor.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold">{story.doctor.name}</h3>
                                        <p className="text-muted-foreground mb-4">The specialist who led the care for {story.name}.</p>
                                        <Button asChild>
                                            <Link href={`/doctors/${story.doctor.id}`}>View Profile</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                        </CardContent>
                    </Card>

                    <div className="text-center mt-12">
                         <Button size="lg" asChild>
                           <Link href="/patient-stories">
                             View More Stories
                           </Link>
                        </Button>
                    </div>
                 </div>
            </div>
        </div>
    );
}
