import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import {
    PlusCircle,
    X,
} from "lucide-react";

import EditPermissionsButton from "@/components/EditPermissionsButton";

export default async function Guardians() {
    await (new Promise((resolve) => setTimeout(resolve, 2000)));

    return (
        <>
            <h1 className="text-4xl font-bold">Guardians</h1>
            <div className="my-4">
                <Button className="gap-2">
                    <PlusCircle className="size-4" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Guardian
                    </span>
                </Button>
            </div>
            <TooltipProvider delayDuration={0}>
                <Card className="p-6">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>BM</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold">Beth McConnell</p>
                            <p className="text-sm">beth.mcconnell.comay@gmail.com</p>
                        </div>
                        <div className="ml-auto mr-2 flex gap-2">
                            <EditPermissionsButton />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" className="size-10 p-0 rounded-full">
                                        <X className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete Guardian</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </Card>
            </TooltipProvider>
        </>
    );
}