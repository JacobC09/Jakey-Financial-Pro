import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth, signIn } from "@/lib/auth";

export default async function SignUp() {
    const session = await auth();
    
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            {session && <p>{JSON.stringify(session)}</p>}
            <form action={async (form) => {
                "use server";

                const email = form.get("email");
                const password = form.get("password");

                console.log("submitted", email, password);

                try {
                    await signIn("credentials", { redirect: false, email, password });
                } catch (error) {
                    console.log(error.type);
                }

            }} className="flex flex-col gap-4">
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" defaultValue="jake@comay.ca" />
                <Label htmlFor="email">password</Label>
                <Input type="password" name="password" defaultValue="password" />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}
