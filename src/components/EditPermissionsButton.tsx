"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

import {
    Eye,
    EyeOffIcon
} from "lucide-react";

export default function EditPermissionsButton() {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    return (
        <Tooltip>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <TooltipTrigger asChild>
                    <Button onClick={() => setDialogOpen(true)} variant="ghost" className="size-10 p-0 rounded-full" >
                        <Eye className="size-5" />
                    </Button>
                </TooltipTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Permissions</DialogTitle>
                        <DialogDescription>
                            Select which accounts this guardian is able to view
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <Separator />
                        <div className="flex items-center gap-4 py-2 opacity-30 transition-opacity">
                            <Avatar>
                                <AvatarFallback>BM</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">Jake Comay</p>
                                <p className="text-sm">jake.@gmail.com</p>
                            </div>
                            <Button variant="ghost" className="ml-auto size-10 p-0 rounded-full">
                                <EyeOffIcon className="size-5" />
                            </Button>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4 py-2">
                            <Avatar>
                                <AvatarFallback>BM</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">Mango Comay</p>
                                <p className="text-sm">mango.comay@gmail.com</p>
                            </div>
                            <Button variant="ghost" className="ml-auto size-10 p-0 rounded-full">
                                <Eye className="size-5" />
                            </Button>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4 py-2">
                            <Avatar>
                                <AvatarFallback>BM</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">Zach Comay</p>
                                <p className="text-sm">zach.comay@gmail.com</p>
                            </div>
                            <Button variant="ghost" className="ml-auto size-10 p-0 rounded-full">
                                <Eye className="size-5" />
                            </Button>
                        </div>
                        <Separator />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <TooltipContent>
                <p>Edit Permissions</p>
            </TooltipContent>
        </Tooltip>
    );
}
