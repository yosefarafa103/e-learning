import { FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    title?: string;
    description?: string;
    onReset?: () => void;
};

export default function NotFoundState({
    title = "No Assignments Found",
    description = "Try adjusting your search or filter to find what you're looking for.",
    onReset,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="bg-muted p-4 rounded-full mb-4">
                <FileSearch className="w-10 h-10 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold text-primary mb-2">
                {title}
            </h3>

            <p className="text-sm text-muted-foreground max-w-md mb-4">
                {description}
            </p>

            {onReset && (
                <Button variant="outline" onClick={onReset}>
                    Reset Filters
                </Button>
            )}
        </div>
    );
}