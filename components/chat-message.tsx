"use client";

import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { BotAvatar } from "./bot-avatar";
import { UserAvatar } from "./user-avatar";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const QueueMessage = dynamic(() => import("./queue-message"), { ssr: false });

export interface ChatMessageProps {
    role: "system" | "user",
    content?: string;
    isLoading?: boolean;
    src?: string;
}

export const ChatMessage = ({
    role,
    content,
    isLoading,
    src,
}: ChatMessageProps) => {
    const { toast } = useToast();
    const { theme } = useTheme();

    const [showQueueMessage, setShowQueueMessage] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setShowQueueMessage(true);
        }
    }, [isLoading]);

    const onCopy = () => {
        // If not content to copy break
        if (!content) {
            return;
        };

        navigator.clipboard.writeText(content);
        toast({
            description: "Message copied to clipboard."
        });
    }

    return (
        <div className={cn(
            "group flex items-start gap-x-3 py-4 w-full",
            role === "user" && "justify-end"
        )}>
            {role !== "user" && src && <BotAvatar src={src} />}
            <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
                {isLoading
                    ? (
                        <>
                            <div className="flex flex-row items-center justify-center">
                                <BeatLoader size={5} color={theme === "light" ? "black" : "white"} />
                                {showQueueMessage && <QueueMessage initialQueueNumber={Math.floor(Math.random() * (40 - 20 + 1)) + 20} />}
                            </div>
                        </>
                    )
                    : content

                }
            </div>
            {role === "user" && <UserAvatar />}
            {role !== "user" && !isLoading && (
                <Button
                    onClick={onCopy}
                    // we gave group to parent div
                    className="opacity-0 group-hover:opacity-100 transition"
                    size="icon"
                    variant='ghost'
                >
                    <Copy className="w-4 h-4" />
                </Button>
            )}
        </div>
    )
}