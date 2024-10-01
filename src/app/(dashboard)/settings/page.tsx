import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Settings() {
    return (
        <>
            <h1 className="text-4xl font-bold">Settings</h1>
            <p>Manage your profile settings</p>
            <Separator className="my-4" />
            <div>
                <Label>Name</Label>
                <Input className="mb-4 w-[200px]" defaultValue="Jake Comay"></Input>
                
                <Label>Email</Label>
                <Input type="email" className="mb-4 w-[200px]" defaultValue="jake.comay@gmail.com"></Input>
                
                <Label>Password</Label>
                <Input type="password" className="mb-4 w-[200px]" defaultValue="Jake Comay"></Input>
                
                <Button className="inline" disabled>Update</Button>
            </div>
        </>
    );
}