"use client";

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

const ThemeProviderContext = createContext<Theme, (theme: Theme) => void>({theme: "system", setTheme: () => null});

export default function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "jakey-financial-ui-theme",
    ...props
}: {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if (localStorage !== undefined) {
            setTheme(localStorage.getItem(storageKey))
        }
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeProviderContext)
}
