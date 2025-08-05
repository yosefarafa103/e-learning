import { IUser } from "@/types/user"
import User from "@/models/user.model"
import { dbConnection } from "@/lib/db";
export async function POST(req: Request) {

    if (!req.headers.get("haveAccess")) return Response.json("You Are Unauthorized To This EndPoint!", { status: 401 })
    await dbConnection()

    try {
        const { email, name, password, role }: IUser = await req.json();
        const user = await User.create({ email, name, password, role });
        console.log(user);
        return Response.json({
            status: "User Success",
            user
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