"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Bird,
    LayoutDashboardIcon,
    Eye,
    Settings
} from "lucide-react"

export default function Sidebar() {
    const pathname = usePathname();
    const currentLink = "flex items-center rounded-md gap-4 px-8 py-4 bg-secondary hover:bg-secondary/80 transition";
    const normalLink = "flex items-center rounded-md gap-4 px-8 py-4 hover:bg-muted transition";

    return (
        <nav className="h-screen sticky bg-background border-r-2">
            <div className="flex items-center p-8 pb-4 pr-12 gap-6">
                <Bird className="size-8" />
                <div>
                    <p className="font-bold text-2xl">Jakey Financial</p>
                    <p className="text-muted-foreground text-sm">Financial managment system</p>
                </div>
            </div>
            <div className="px-4 flex flex-col gap-2 mt-8">
                <p className="text-xs my-1 ml-8 tracking-widest">MENU</p>
                <Link href="./transactions" className={pathname === "/transactions" ? currentLink : normalLink}>
                    <LayoutDashboardIcon className="size-5" />
                    <span className="text-sm font-medium">Transactions</span>
                </Link>
                <Link href="./guardians" className={pathname === "/guardians" ? currentLink : normalLink}>
                    <Eye className="size-5" />
                    <span className="text-sm font-medium">Guardians</span>
                </Link>
                <Link href="./settings" className={pathname === "/settings" ? currentLink : normalLink}>
                    <Settings className="size-5" />
                    <span className="text-sm font-medium">Settings</span>
                </Link>
            </div>
        </nav>
    );
}