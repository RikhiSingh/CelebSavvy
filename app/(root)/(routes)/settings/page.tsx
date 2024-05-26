import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div className="h-full p-4 space-y-2 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-medium text-center">
                Settings
            </h3>
            <div className="text-muted-foreground text-sm">
                {isPro ? "You are currently on a Pro Plan" : "You are currently on a Free Plan"}
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    );
}

export default SettingsPage;