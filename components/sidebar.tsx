"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface SidebarPro {
    isPro: boolean;
};

export const Sidebar = ({
    isPro
}: SidebarPro) => {
    const pathname = usePathname();
    const router = useRouter();
    const proModal = useProModal();

    const routes = [
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false,
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: true,
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false,
        },
    ];

    const onNavigate = (url: string, pro: boolean) => {
        if (pro && !isPro) {
            return proModal.onOpen();
        }
        return router.push(url);
    }

    return (
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex flex-1 justify-center">
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div
                            onClick={() => onNavigate(route.href, route.pro)}
                            key={route.href}
                            className={cn(
                                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                pathname === route.href && "bg-primary/10 text-primary"
                            )}
                        >
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="space-y-2">
                    <Link href="https://github.com/RikhiSingh" target="_blank" passHref>
                        <Button size="lg" variant="ghost" className="w-full">
                            <Image
                                src="/github.svg"
                                alt="Github"
                                height={40}
                                width={40}
                                className="rounded pb-8"
                            />
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/rikhi-singh/" target="_blank" passHref>
                        <Button size="lg" variant="ghost" className="w-full">
                            <Image
                                src="/linkedIn.png"
                                alt="LinkedIn"
                                height={43}
                                width={43}
                                className="rounded pb-8 ml-1"
                            />
                        </Button>
                    </Link>
                    <Link href="https://www.instagram.com/rikhi_singh/" target="_blank" passHref>
                        <Button size="lg" variant="ghost" className="w-full">
                            <Image
                                src="/igLogo.svg"
                                alt="Instagram"
                                height={40}
                                width={40}
                                className="rounded pb-8"
                            />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};