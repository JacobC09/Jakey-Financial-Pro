import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import {
    PlusCircle
} from "lucide-react";

import AccountSwitcher from "@/components/AccountSwitcher";
import TransactionsTable from "@/components/TransactionsTable";
import Analytics from "@/components/Analytics";

const accounts: Account[] = [
    {
        name: "Zach Comay",
        initials: "ZC"
    },
    {
        name: "Jake Comay",
        initials: "AC"
    },
    {
        name: "Alex Comay",
        initials: "AC"
    },
    {
        name: "William Comay",
        initials: "WC"
    },
    {
        name: "Mango Comay",
        initials: "MC"
    }
];

export default async function Transactions() {
    return (
        <>
            <h1 className="text-4xl font-bold">Transactions</h1>
            <Tabs defaultValue="transactions" className="my-4 grid gap-4">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="transactions">Transactions</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-4">
                        <AccountSwitcher accounts={accounts} />
                        <Button className="gap-2">
                            <PlusCircle className="size-4" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Transaction
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="transactions">
                    <TransactionsTable />
                </TabsContent>
                <TabsContent value="analytics">
                    <Analytics />
                </TabsContent>
            </Tabs>
        </>
    );
}