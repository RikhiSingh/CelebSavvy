import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    };

    const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
            userId: userId,
        },
        select: {
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true,
            stripeSubscriptionId: true,
        }
    });

    // has ever subscribed
    if (!userSubscription) {
        return false;
    };

    //                                                    If entire day after expiry
    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

    // as boolean
    return !!isValid;
}