import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ChatIdPageProps {
    params: {
        chatId: string;
    };
};

const ChatIdPage = async ({
    params
}: ChatIdPageProps) => {
    const { userId } = auth();

    if(!userId){
        return redirectToSignIn();
    };

    const companion = await prismadb.companion.findUnique({
        where:{
            id:params.chatId
        },
        include:{
            messages:{
                orderBy:{
                    createdAt: "asc",
                },
                // only load message messages between current user and this chat companion
                where:{
                    userId,
                }
            },
            // messages count from all users
            _count:{
                select:{
                    messages: true
                }
            }
        }
    });

    if(!companion){
        return redirect("/");
    };

    return (
        <div>
            Chat ID Page
        </div>
    );
}

export default ChatIdPage;