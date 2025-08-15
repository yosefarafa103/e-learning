import { dbConnection } from "@/lib/db";
import User from "@/models/user.model"
import z from "zod"
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
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

const updateSchema = z.object({
    name: z.string().optional(),
    role: z.string().optional(),
    subjects: z.array(z.string()).optional()
})
export async function PATCH(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await _request.json()
    try {
        await dbConnection();
        let user;
        if (updateSchema.safeParse(body).success) {
            if (body.subjects) {
                user = await User.findByIdAndUpdate(
                    id,
                    { $addToSet: { subjects: { $each: body.subjects } } },
                    { new: true }
                );
            } else {
                user = await User.findByIdAndUpdate(id, body, { new: true });
            }
            console.log("Valid");
        }
        return Response.json(
            {
                status: "User Update Success",
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