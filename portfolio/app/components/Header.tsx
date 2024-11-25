import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Githubicon } from './icons/Githubicon';
import { FaInstagram } from "react-icons/fa";
import { LinkedinIcon } from './icons/LinkedInIcon';

export const Header = () => {
    return (
        <header className="sticky bg-slate-700 top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Mon Portfolio</h1>
                <div className="flex-1" />
                <ul>
                    <Link href="https://github.com/pitchounet1" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <Githubicon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.instagram.com/lucas_pse_/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <FaInstagram size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/lucas-pose-1063a4339/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}