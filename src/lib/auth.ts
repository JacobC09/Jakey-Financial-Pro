import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./db";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                console.log("Credentials", credentials);
                return { user: {role: "admin"} };
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        session({ session, user, token}) {
            console.log("User:", user);
            return session;
        },
    }
});