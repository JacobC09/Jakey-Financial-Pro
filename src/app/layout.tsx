import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import ThemeProvider from "@/components/providers/ThemeProvider";
import AuthSessionProvider from "@/components/providers/AuthSessionProvider"

import "./globals.css";

export const metadata: Metadata = {
    title: "Jakey Financial Pro",
    description: "A financial managment service",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>
                {/* <AuthSessionProvider> */}
                    <ThemeProvider defaultTheme="system">
                        {children}
                    </ThemeProvider>
                {/* </AuthSessionProvider> */}
            </body>
        </html>
    );
}
