import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full m-h-screen">
            <Sidebar />
            <div className="flex-1 px-10 bg-muted/40">
                <Navbar />
                <main className="grid gap-2">
                    {children}
                </main>
            </div>
        </div>
    );
}
