import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { companionId: string } }
) {
    try {
        const body = await req.json();
        const user = await currentUser();
        const { src, name, description, instructions, seed, categoryId } = body;

        if (!params.companionId) {
            return new NextResponse("Companion ID is required", { status: 400 });
        };

        if (!user || !user.id || !user.firstName) {
            return new NextResponse("Unauthorized", { status: 401 });
        };

        if (!src || !name || !description || !instructions || !seed || !categoryId) {
            return new NextResponse("Missing Required Fields", { status: 400 });
        };

        const isPro = await checkSubscription();

        if (!isPro) {
            return new NextResponse("Pro Subscription is required", { status: 403 });
        };

        // Prevent users from accessing POST API if they don't have a valid subscription

        const companion = await prismadb.companion.update({
            where: {
                id: params.companionId,
                userId: user.id
            },
            data: {
                categoryId,
                userId: user.id,
                userName: user.firstName,
                src,
                name,
                description,
                instructions,
                seed
            }
        });

        return NextResponse.json(companion);

    } catch (error) {
        console.log("[COMPANION_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    };
};

// can delete even if their subscription expired
export async function DELETE(
    req: Request,
    { params }: { params: { companionId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        };

        const companion = await prismadb.companion.delete({
            where: {
                // only user who created that companion can delete that
                userId,
                id: params.companionId,
            }
        });

        return NextResponse.json(companion);
    } catch (error) {
        console.log("[COMPANION_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}