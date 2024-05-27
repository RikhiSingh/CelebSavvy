"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";

export const PopUp = () => {
    const { toast } = useToast();

    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false); // State to control dialog visibility

    useEffect(() => {
        setIsMounted(true);
        setOpen(true); // Show the dialog when the component mounts
    }, []);

    if (!isMounted) {
        return null;
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-center text-2xl">
                        Important INFO!
                    </DialogTitle>
                    <DialogDescription className="text-center space-y-2 text-base" >
                        Chat only working for<span className="text-sky-500 mx-1 font-medium">Premium</span>Users!
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <div className="flex justify-between">
                    <p className="text-base font-normal">
                        Due to paid API calls, chatting with AI chatbots requires a premium subscription.
                        <br />
                        <br />
                        However, you can create as many AI chatbots as you want.
                        <br />
                        <Separator className="m-2" />
                        Use the test credit card number <span className="text-sky-500 mx-1 font-medium">4242 4242 4242 4242</span> with Stripe for testing purposes (Other Info can be random).
                    </p>
                </div>
                <Button variant="premium" onClick={() => setOpen(false)}>
                    Got it!
                </Button>
            </DialogContent>
        </Dialog>
    )
}
