
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Check, Archive, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { updateInquiryStatus } from '@/app/admin/inquiries/actions';

interface InquiryActionsProps {
  inquiryId: string;
}

export function InquiryActions({ inquiryId }: InquiryActionsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleStatusUpdate = async (status: 'new' | 'read' | 'archived') => {
    setIsSubmitting(true);
    try {
      const result = await updateInquiryStatus(inquiryId, status);
      if (result.success) {
        toast({
          title: 'Success',
          description: result.message,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost" disabled={isSubmitting}>
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => handleStatusUpdate('read')} disabled={isSubmitting}>
          <Eye className="mr-2 h-4 w-4" />
          Mark as Read
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleStatusUpdate('archived')} disabled={isSubmitting}>
          <Archive className="mr-2 h-4 w-4" />
          Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
