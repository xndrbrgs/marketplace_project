import db from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
        throw new Error("Something went wrong...")
    }

    let dbUser = await db.user.findUnique({
        where: {
            id: user.id
        }
    })

    if (!dbUser) {
        dbUser = await db.user.create({
            data: {
                id: user.id,
                name: user.given_name ?? "",
                email: user.email ?? "",
                profilePicture: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
        })
    }

    return NextResponse.redirect("http://localhost:3000")
}