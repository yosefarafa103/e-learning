import { dbConnection } from "@/lib/db";
import Group from "@/models/group.model";
import { NextResponse } from "next/server";
export async function GET(
    request: Request,
    { params }: { params: Promise<{ groupId: string }> }
) {
    try {
        await dbConnection();
        const groupId = (await params).groupId;
        const group = await Group.findById(groupId)
            .populate("teacher")
            .populate("students");
        if (!group) {
            return NextResponse.json({ message: "Group not found" }, { status: 404 });
        }
        return NextResponse.json(group, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching group:", error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
