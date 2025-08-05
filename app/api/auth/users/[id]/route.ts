import { dbConnection } from "@/lib/db";
import User from "@/models/user.model"
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    console.log(id);
    try {
        await dbConnection();
        const user = await User.findById(id);
        return Response.json(
            {
                status: "User Found Success",
                user,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Err:", error);
        return Response.json(
            {
                status: "User Not Found",
            },
            { status: 404 }
        );
    }
}
