import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};

const CompanionIdPage = async ({
    params
}: CompanionIdPageProps) => {
    // TODO Check subscription

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (
        <div>
            <CompanionForm
                initialData={companion}
                categories={categories}
            />
        </div>
    );
}

export default CompanionIdPage;