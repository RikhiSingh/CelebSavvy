"use client";

import { Menu, Sparkles, SquareArrowOutUpRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

interface NavbarProps {
    isPro: boolean;
};

export const Navbar = ({
    isPro
}: NavbarProps) => {
    const proModal = useProModal();

    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary-10 bg-secondary h-16">
            <div className="flex items-end">
                <MobileSidebar isPro={isPro} />
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                        font.className
                    )}>
                        CelebSavvy &nbsp;
                    </h1>
                </Link>
                <span className="hidden md:block text-base text-rose-400">
                    <Link href="https://rikhisingh.github.io/">
                        by RIKHI SINGH 
                    </Link>                    
                </span>
                <SquareArrowOutUpRight className="hidden md:block h-4 w-4 ml-1 mb-1" />
            </div>
            <div className="flex items-center gap-x-3">
                {!isPro && (

                    <Button onClick={proModal.onOpen} variant="premium" size="sm">
                        Upgrade
                        <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                    </Button>
                )}
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};