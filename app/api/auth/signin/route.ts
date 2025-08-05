import { IUser } from "@/types/user"
import User from "@/models/user.model"
import { dbConnection } from "@/lib/db";
import bcrybt from "bcrypt"
import jwt from "jsonwebtoken"
import { randomBytes } from "crypto"
import { cookies } from "next/headers";
export async function POST(req: Request) {
    if (!req.headers.get("haveAccess")) return Response.json("You Are Unauthorized To This EndPoint!", { status: 401 })
    await dbConnection()
    try {
        const { email, password, }: Pick<IUser, "email" | "password"> = await req.json();
        const user = await User.findOne({ email: email })
        const isMatchPasword = await bcrybt.compare(password, user?.password!);
        const Cookies = await cookies();
        const token = jwt.sign({ userId: user!._id }, process.env.JWT_SECRET!)
        console.log(token);
        Cookies.set("token", token, { maxAge: 2_592_000 })
        if (!isMatchPasword) return Response.json({
            status: "Failed To Create User",
            err: "Incorrect Credentials"
        }, { status: 404 })
        return Response.json({
            status: "User Success",
            token
        }, {
            status: 201,
        })
    } catch (error: any) {
        console.log("Err: " + error);
        return Response.json({
            status: "Failed To Create User",
            err: error
        }, { status: 404 })
    }
}