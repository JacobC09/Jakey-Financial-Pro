"use client";

import { useState } from "react";
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
} from "@/components/ui/select";
import {
    CaretSortIcon,
    CheckIcon,
    PlusCircledIcon,
} from "@radix-ui/react-icons"

export type Account = {
    name: string,
    initials: string
};


export default function AccountSwitcher({ accounts }: { accounts: Account[] }) {
    const [open, setOpen] = useState<boolean>(false);
    const [showNewAccountDialog, setShowNewAccountDialog] = useState<boolean>(false)
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[0])

    return (
        <Dialog open={showNewAccountDialog} onOpenChange={setShowNewAccountDialog}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a team"
                        className={cn("w-[200px] justify-between", "className")}
                    >
                        <Avatar className="mr-2 size-6">
                            <AvatarFallback className="text-xs">{selectedAccount.initials}</AvatarFallback>
                        </Avatar>
                        {selectedAccount.name}
                        <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandList>
                            <CommandInput placeholder="Search accounts..." />
                            <CommandEmpty>No team found.</CommandEmpty>

                            {accounts.map((account) => (
                                <CommandItem
                                    key={account.name}
                                    onSelect={() => {
                                        setSelectedAccount(account);
                                        setOpen(false);
                                    }}
                                    className="text-sm"
                                >
                                    <Avatar className="mr-2 size-6">
                                        <AvatarFallback className="text-xs">{account.initials}</AvatarFallback>
                                    </Avatar>
                                    {account.name}
                                    {selectedAccount.name === account.name &&
                                        <CheckIcon
                                            className="ml-auto size-4"
                                        />
                                    }
                                </CommandItem>
                            ))}

                        </CommandList>
                        <CommandSeparator />
                        <CommandList>
                            <CommandGroup>
                                <DialogTrigger asChild>
                                    <CommandItem
                                        onSelect={() => {
                                            setOpen(false)
                                            setShowNewAccountDialog(true)
                                        }}
                                    >
                                        <PlusCircledIcon className="mr-2 h-5 w-5" />
                                        Create Team
                                    </CommandItem>
                                </DialogTrigger>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create team</DialogTitle>
                    <DialogDescription>
                        Add a new team to manage products and customers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setShowNewAccountDialog(false)}>
                        Cancel
                    </Button>
                    <Button type="submit">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}