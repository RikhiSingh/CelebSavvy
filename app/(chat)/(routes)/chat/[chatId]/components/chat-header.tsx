"use client";

import { Companion, Message } from "@prisma/client";

interface ChatHeaderProps{
    companion: Companion &{
        messages: Message[];
        _count:{
            messages: number;
        };
    };
};

export const ChatHeader = ({
    companion
}: ChatHeaderProps) =>{
    return(
        <div>
            Chat Header
        </div>
    )
}