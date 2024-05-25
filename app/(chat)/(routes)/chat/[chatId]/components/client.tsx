"use client";

import { Companion, Message } from "@prisma/client";

interface ChatClientProps{
    companion: Companion &{
        messages: Message[],
        _count:{
            messages:number;
        };
    };
};

export const ChatClient = () =>{
    return(
        <div>
            Chat Client
        </div>
    );
};