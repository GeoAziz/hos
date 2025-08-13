
import { getDoctors, Doctor } from '@/lib/firestore-data';
import { DoctorSearch } from '@/components/doctor-search';

export default async function DoctorsPage() {
    const doctors = await getDoctors();
    const departments = [...new Set(doctors.map(d => d.specialty))];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Find a Doctor</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Search our directory of dedicated and experienced professionals.
          </p>
        </div>
        <DoctorSearch doctors={doctors as Doctor[]} departments={departments} />
      </div>
    </div>
  );
}
