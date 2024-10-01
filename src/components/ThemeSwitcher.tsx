"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "./providers/ThemeProvider";

import {
    Sun,
    Moon,
} from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <Button variant="ghost" className="rounded-full p-0 size-10" onClick={
            () => setTheme(theme === "dark" ? "light" : "dark")
        }>
            {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </Button>
    );
}