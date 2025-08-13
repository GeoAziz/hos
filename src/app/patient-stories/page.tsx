
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { patientStories, Story } from "@/lib/stories-data";
import { Badge } from "@/components/ui/badge";

export default function PatientStoriesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Patient Success Stories</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Discover the real-life impact of our care.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {patientStories.map((story: Story) => (
                        <Card key={story.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardHeader className="p-0">
                                <div className="relative h-64 w-full">
                                    <Image src={story.imageUrl} alt={story.name} fill className="object-cover" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <Badge variant="secondary" className="mb-2 w-fit">{story.category}</Badge>
                                <CardTitle className="text-2xl mb-2">{story.name}'s Story</CardTitle>
                                <p className="text-muted-foreground flex-grow">"{story.quote}"</p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0 mt-4">
                               <Button asChild className="w-full">
                                   <Link href={`/patient-stories/${story.slug}`}>
                                     Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                   </Link>
                               </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
