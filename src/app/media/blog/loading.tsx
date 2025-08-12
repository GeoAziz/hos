import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <Skeleton className="h-10 w-1/2 mx-auto" />
                    <Skeleton className="h-6 w-1/3 mx-auto mt-4" />
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    <main className="md:col-span-8">
                        <div className="space-y-12">
                            {[...Array(3)].map((_, i) => (
                                <Card key={i} className="flex flex-col md:flex-row overflow-hidden shadow-lg">
                                    <Skeleton className="relative md:w-1/3 h-64 md:h-auto" />
                                    <div className="md:w-2/3 p-6 flex flex-col">
                                        <CardHeader className="p-0">
                                           <Skeleton className="h-8 w-full mb-2" />
                                           <Skeleton className="h-4 w-1/2" />
                                        </CardHeader>
                                        <CardContent className="p-0 pt-4 flex-grow space-y-2">
                                            <Skeleton className="h-4 w-full" />
                                            <Skeleton className="h-4 w-5/6" />
                                        </CardContent>
                                        <CardFooter className="p-0 pt-4">
                                            <Skeleton className="h-6 w-24" />
                                        </CardFooter>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </main>

                    <aside className="md:col-span-4 space-y-8">
                        <Card>
                            <CardHeader>
                                <Skeleton className="h-6 w-1/3" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-10 w-full" />
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <Skeleton className="h-6 w-1/2" />
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                   <Skeleton className="h-5 w-3/4" />
                                   <Skeleton className="h-5 w-2/3" />
                                   <Skeleton className="h-5 w-3/4" />
                                   <Skeleton className="h-5 w-1/2" />
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}
