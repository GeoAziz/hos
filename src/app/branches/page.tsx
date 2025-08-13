
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getBranches, Branch } from '@/lib/branches-data';

export default function BranchesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const branches = getBranches();

    const filteredBranches = useMemo(() => {
        return branches.filter(branch => 
            branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            branch.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [branches, searchTerm]);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Our Branches</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Find the MediBook location nearest to you.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="w-full max-w-lg relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search by name or city..." 
                            className="pl-10 text-base"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBranches.map(branch => (
                        <Card key={branch.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                             <CardHeader className="p-0">
                                <div className="relative h-64 w-full">
                                    <Image src={branch.imageUrl} alt={branch.name} fill className="object-cover" />
                                </div>
                             </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <CardTitle className="text-2xl mb-2">{branch.name}</CardTitle>
                                <p className="flex items-start text-muted-foreground mb-2">
                                    <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                    {branch.address}
                                </p>
                                <p className="flex items-center text-muted-foreground mb-4">
                                    <Phone className="h-4 w-4 mr-2 text-primary" />
                                    {branch.phone}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {branch.services.slice(0, 3).map(service => (
                                        <span key={service} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{service}</span>
                                    ))}
                                    {branch.services.length > 3 && <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">...</span>}
                                </div>
                            </CardContent>
                             <CardFooter className="p-6 pt-0 mt-auto">
                                <div className="flex gap-2 w-full">
                                    <Button asChild className="flex-1">
                                      <Link href={`/branches/${branch.slug}`}>View Details</Link>
                                    </Button>
                                    <Button variant="outline" asChild className="flex-1">
                                      <Link href="/#appointment">Book Now</Link>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                 {filteredBranches.length === 0 && (
                    <div className="text-center py-16 md:col-span-3">
                        <h3 className="text-2xl font-semibold">No Branches Found</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
