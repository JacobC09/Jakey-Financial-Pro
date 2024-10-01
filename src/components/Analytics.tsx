"use client";

import { formatDate } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis
} from "recharts"

import {
    DollarSign,
    Group,
    Wallet,
    Activity
} from "lucide-react";

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

export default function Analytics() {
    return (
        <div className="grid gap-4">
            <div className="grid gap-4 grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <DollarSign className="size-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Subscriptions
                        </CardTitle>
                        <Group className="size-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <Wallet className="size-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Now
                        </CardTitle>
                        <Activity className="size-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Montly Expendature</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Bar
                                    dataKey="total"
                                    fill="currentColor"
                                    radius={[4, 4, 0, 0]}
                                    className="fill-primary"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>All Time Expenses</CardTitle>
                        <CardDescription>
                            You made a total of 24 transactions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Type</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-accent">
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline">{formatDate(new Date())}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="p-0 border-none">
                                                <Calendar
                                                    mode="default"
                                                    selected={new Date()}
                                                    defaultMonth={new Date()}
                                                    disableNavigation={true}
                                                    className="rounded-md border shadow"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                    <TableCell>
                                        Goody's Sandwhiches
                                    </TableCell>
                                    <TableCell>
                                        I was hungary
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Food</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline">{formatDate(new Date())}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="p-0 border-none">
                                                <Calendar
                                                    mode="default"
                                                    selected={new Date()}
                                                    defaultMonth={new Date()}
                                                    disableNavigation={true}
                                                    className="rounded-md border shadow"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                    <TableCell>
                                        Goody's Sandwhiches
                                    </TableCell>
                                    <TableCell>
                                        I was hungary
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Food</Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 