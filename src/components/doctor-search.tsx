
'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { Doctor } from '@/lib/firestore-data';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

interface DoctorSearchProps {
    doctors: Doctor[];
    departments: string[];
}

export function DoctorSearch({ doctors, departments }: DoctorSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doctor => {
            const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDepartment = selectedDepartment === 'all' || doctor.specialty === selectedDepartment;
            return matchesSearch && matchesDepartment;
        });
    }, [doctors, searchTerm, selectedDepartment]);

    return (
        <div>
            <div className="mb-12 p-6 bg-secondary rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input
                        placeholder="Search by name or specialty..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="text-base"
                    />
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger className="text-base">
                            <SelectValue placeholder="Filter by department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Departments</SelectItem>
                            {departments.map(dept => (
                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => (
                        <Card key={doctor.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardHeader className="p-0 relative">
                                                             <div className="relative h-64 w-full">
                                                                 <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} fill className="object-cover" />
                                                             </div>
                               <Badge className="absolute top-4 right-4 flex gap-1 items-center" variant="destructive">
                                 <Star className="h-4 w-4" /> {doctor.rating.toFixed(1)}
                               </Badge>
                            </CardHeader>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <CardTitle className="text-2xl mb-1">{doctor.name}</CardTitle>
                                <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                                <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">{doctor.bio}</p>
                            </CardContent>
                             <CardFooter className="p-6 pt-0">
                                <Button className="w-full mt-auto" asChild>
                                    <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="md:col-span-3 text-center py-16">
                        <h3 className="text-2xl font-semibold">No Doctors Found</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
