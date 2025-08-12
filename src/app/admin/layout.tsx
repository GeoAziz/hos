
'use client';

import { ProtectedRoute, useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Hospital, LayoutDashboard, Calendar, MessageSquare, LogOut, BarChart3, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function AdminSidebar() {
    const { logout, user } = useAuth();
    const pathname = usePathname();

    const navItems = [
        { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
        { href: '/admin/inquiries', label: 'Inquiries', icon: Mail },
    ];

    return (
        <aside className="w-64 flex-shrink-0 bg-secondary border-r p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-8">
                <Hospital className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">MediBook</span>
            </div>
            <nav className="flex-grow">
                <ul className="space-y-2">
                    {navItems.map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Button
                                    asChild
                                    variant={isActive ? 'default' : 'ghost'}
                                    className="w-full justify-start"
                                >
                                    <Link href={item.href}>
                                        <item.icon className={cn(
                                            "mr-2 h-4 w-4",
                                            !isActive && "text-primary"
                                        )} />
                                        {item.label}
                                    </Link>
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="mt-auto">
                 <div className="p-2 mb-2 border-t">
                    <p className="text-sm font-semibold">{user?.email}</p>
                    <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
                <Button variant="outline" className="w-full justify-start" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
        <div className="flex h-screen bg-background">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
    </ProtectedRoute>
  );
}
