
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

                <div className="grid md:grid-cols-12 gap-12">
                    <main className="md:col-span-8 lg:col-span-9">
                        <Card className="mb-12 shadow-xl border-l-4 border-primary overflow-hidden">
                            <div className="grid md:grid-cols-2 items-center">
                                <Skeleton className="relative h-80 w-full" />
                                <div className="p-8 space-y-4">
                                    <Skeleton className="h-5 w-1/4" />
                                    <Skeleton className="h-8 w-full" />
                                    <Skeleton className="h-8 w-3/4" />
                                    <Skeleton className="h-5 w-1/2" />
                                    <Skeleton className="h-5 w-full mt-4" />
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-5 w-5/6" />
                                </div>
                            </div>
                        </Card>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {[...Array(2)].map((_, i) => (
                                <Card key={i} className="overflow-hidden shadow-lg flex flex-col">
                                    <CardHeader className="p-0">
                                        <Skeleton className="h-56 w-full" />
                                    </CardHeader>
                                    <CardContent className="p-6 flex-grow space-y-3">
                                        <Skeleton className="h-5 w-1/3" />
                                        <Skeleton className="h-6 w-full" />
                                        <Skeleton className="h-5 w-1/2" />
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Skeleton className="h-6 w-24" />
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </main>

                    <aside className="md:col-span-4 lg:col-span-3 space-y-8">
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
                                   {[...Array(4)].map((_, i) => (
                                      <Skeleton key={i} className="h-9 w-full" />
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
