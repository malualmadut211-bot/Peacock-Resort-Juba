import React from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SectionHeader({ label, title, subtitle, centered = true }: { label: string, title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      <span className="text-brand-teal uppercase text-xs font-bold tracking-[0.2em] block mb-4">{label}</span>
      <div className={cn("h-0.5 bg-brand-gold w-16 mb-6", centered && "mx-auto")} />
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">{title}</h2>
      {subtitle && <p className={cn("text-brand-gray-medium text-lg max-w-2xl", centered && "mx-auto")}>{subtitle}</p>}
    </div>
  );
}

export function Button({ children, variant = 'primary', className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-300";
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-teal-dark hover:scale-[1.02] shadow-md hover:shadow-lg",
    secondary: "bg-brand-gold text-black hover:bg-brand-gold-dark hover:scale-[1.02] shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white",
    ghost: "text-brand-gold hover:underline underline-offset-4 decoration-2"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, to, variant = 'primary', className }: { children: React.ReactNode, to: string, variant?: 'primary' | 'secondary' | 'outline' | 'ghost', className?: string }) {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-300";
  const variants = {
    primary: "bg-brand-teal text-white hover:bg-brand-teal-dark hover:scale-[1.02] shadow-md hover:shadow-lg",
    secondary: "bg-brand-gold text-black hover:bg-brand-gold-dark hover:scale-[1.02] shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white",
    ghost: "text-brand-gold hover:underline underline-offset-4 decoration-2"
  };

  return (
    <Link to={to} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  );
}
