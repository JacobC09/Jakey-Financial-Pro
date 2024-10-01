import { formatDate } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar"; 
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

import {
    X
} from "lucide-react"

export default function Transactions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Transactions</CardTitle>
                <CardDescription>Your recent expendatures</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Disputed</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
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
                            <TableCell>
                                <Button>
                                    Dispute
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" className="size-10 p-0 rounded-full">
                                    <X className="size-5" />
                                </Button>
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
                            <TableCell>
                                <Button>
                                    Dispute
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" className="size-10 p-0 rounded-full">
                                    <X className="size-5" />
                                </Button>
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
                            <TableCell>
                                <Button>
                                    Dispute
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" className="size-10 p-0 rounded-full">
                                    <X className="size-5" />
                                </Button>
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
                            <TableCell>
                                <Button>
                                    Dispute
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" className="size-10 p-0 rounded-full">
                                    <X className="size-5" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}