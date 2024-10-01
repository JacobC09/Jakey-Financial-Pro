import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar";
import {
    Bell,
    BellDot
} from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover"

import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-end gap-2 py-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="rounded-full p-0 size-10">
                        <BellDot className="size-5" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <p className="mb-2"><span className="font-bold">Dan Comay</span> has invited you to become a supervisor</p>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline">Decline</Button>
                        <Button size="sm">Accept</Button>
                    </div>
                </PopoverContent>
            </Popover>

            <ThemeSwitcher />
            
            <Button variant="ghost" className="rounded-full p-0 size-10">
                <Avatar>
                    <AvatarFallback>JC</AvatarFallback>
                </Avatar>
            </Button>
    
        </nav>
    );
}