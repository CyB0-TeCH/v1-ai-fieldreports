'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export function Logo({
  className,
  iconOnly = false,
  variant = 'default',
  customLogoUrl,
  customCompanyName,
}: {
  className?: string;
  iconOnly?: boolean;
  variant?: 'default' | 'codeGuardian';
  customLogoUrl?: string | null;
  customCompanyName?: string | null;
}) {
  const defaultLogo = (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className={cn("transition-all group-hover:scale-110", className)}
        overflow="visible"
      >
        <defs>
          <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--secondary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent-blue))' }} />
          </linearGradient>
           <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="hsl(var(--secondary))" floodOpacity="0.5"/>
          </filter>
        </defs>

        <g filter="url(#shadow)">
            <path d="M50 10 L90 25 V60 C90 78 50 90 50 90 C50 90 10 78 10 60 V25 Z" fill="url(#shield-gradient)" />
            <path d="M50 15 L82 28 V58 C82 72 50 82 50 82 C50 82 18 72 18 58 V28 Z" fill="hsl(var(--sidebar-background))" stroke="hsl(var(--border))" strokeWidth="1" />
        </g>
        <path d="M35 30 h25 a5 5 0 0 1 5 5 v30 a5 5 0 0 1 -5 5 h-25 a5 5 0 0 1 -5 -5 v-30 a5 5 0 0 1 5 -5 Z" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--border))" strokeWidth="1.5" />
        <g transform="translate(-2, 0)">
            <path d="M42 42 h16" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" />
            <path d="M42 48 h10" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" />
            <path d="M42 58 v-6 h4 v6" stroke="hsl(var(--accent-blue))" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <path d="M48 58 v-10 h4 v10" stroke="hsl(var(--accent-blue))" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <path d="M54 58 v-8 h4 v8" stroke="hsl(var(--accent-blue))" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        </g>
        <g transform="translate(18, 12) rotate(15 50 50)">
            <circle cx="50" cy="50" r="14" stroke="hsl(var(--primary))" strokeWidth="5" fill="none" />
            <path d="M62 62 L72 72" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>
      {!iconOnly && (
         <span className="font-headline font-bold text-lg text-white transition-colors group-hover:text-primary-foreground/80">{customCompanyName || 'AI Field Reports'}</span>
      )}
    </>
  );

  return (
    <div className={cn("flex items-center gap-2 group", className)}>
        {defaultLogo}
    </div>
  );
}
