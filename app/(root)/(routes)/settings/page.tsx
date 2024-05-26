import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center md:items-center md:justify-start h-full p-4 space-y-2 gap-4 ">
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