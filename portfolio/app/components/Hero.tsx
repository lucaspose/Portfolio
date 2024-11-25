import { Section } from './Section';
import { cn } from '@/lib/utils';
import { TailwindcssIcon } from './icons/Tailwindcss';
import { CplusplusIcon } from './icons/Cplusplus';
import { Cicon } from './icons/C';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border border-accent hover:bg-accent/50 p-1 py-0.5 rounded-sm text-primary",className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Lucas POSE</h2>
                <h3 className="text-3xl font-caption">Software Developer and Web Designer</h3>
                <p className="text-base">
                    I’m actually an 
                    Epitech 
                    Student and a passionate about development, whether it’s building modern websites with 
                    <Link href="https://tailwindcss.com/">
                    <Code className="inline-flex items-center gap-1"><TailwindcssIcon size={12} className="inline" />Tailwindcss</Code>
                    </Link>
                     and 
                     <Link href="https://nextjs.org/">
                     <Code className="inline-flex items-center gap-1">Next.js</Code>
                     </Link>
                     or crafting high-performance applications using 
                    <Code className="inline-flex items-center gap-1"><Cicon size={12} className="inline" />C</Code>
                    and
                    <Code className="inline-flex items-center gap-1"><CplusplusIcon size={12} className="inline" />C++</Code>
                    .
                    <br />
                    Living in
                    <Code className="inline-flex items-center gap-1">🇫🇷 France</Code>
                    
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dceec7ae0aeecf78e9c30d37d75a8be5-1732526400091/d431c970-8273-4be9-bd89-589732fdbeeb.jpg"
                className="w-full h-auto rounded-full max-w-xs max-md:w-56" 
                alt="Lucas POSE"
                />
            </div>
        </Section>
    )
}