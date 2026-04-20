'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

export function Logo({
  className,
  iconOnly = false,
  customCompanyName,
}: {
  className?: string;
  iconOnly?: boolean;
  customCompanyName?: string | null;
}) {
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <ShieldCheck className="w-8 h-8 text-primary" />
      {!iconOnly && (
         <span className="font-headline font-bold text-lg text-white">
           {customCompanyName || 'AI Field Reports'}
         </span>
      )}
    </div>
  );
}
