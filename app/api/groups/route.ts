import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import Group from "@/models/group.model";
export async function POST(req: Request) {
  try {
    await dbConnection();
    const { name, description, teacherId } = await req.json();
    if (!name || !teacherId) {
      return NextResponse.json(
        { error: "Some Fileds Required!" },
        { status: 400 }
      );
    }

    const teacher = await User.findById(teacherId);
    if (!teacher) {
      return NextResponse.json({ error: "Teacher Not Found" }, { status: 404 });
    }

    const newGroup = await Group.create({
      name,
      description,
      teacher: teacher._id,
      students: [],
    });

    return NextResponse.json(
      {
        message: "Group Added Successfully",
        group: newGroup,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Failed To Create Group", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function GET(req: Request) {
  try {
    await dbConnection();

    const { searchParams } = new URL(req.url);
    const teacherId = searchParams.get("teacherId");

    let groups;

    if (teacherId) {
      groups = await Group.find({ teacher: teacherId })
        .populate("teacher", "name email")
        .populate("students", "name email");
    } else {
      groups = await Group.find()
        .populate("teacher", "name email")
        .populate("students", "name email");
    }

    return NextResponse.json(
      {
        count: groups.length,
        groups,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Failed to fetch groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await dbConnection();

    const { searchParams } = new URL(req.url);
    const groupId = searchParams.get("id");

    if (!groupId) {
      return NextResponse.json({ error: "Missing group id" }, { status: 400 });
    }

    const { name, description, students } = await req.json();

    const group = await Group.findById(groupId);
    if (!group) {
      return NextResponse.json({ error: "Group not found" }, { status: 404 });
    }

    if (name) group.name = name;
    if (description) group.description = description;

    if (Array.isArray(students) && students.length > 0) {
      const validStudents = await User.find({ _id: { $in: students } });
      const validIds = validStudents.map((s) => s._id.toString());
      group.students = [
        ...new Set([...group.students.map(String), ...validIds]),
      ];
    }

    await group.save();

    return NextResponse.json(
      {
        message: "Group updated successfully ✅",
        group,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Failed to update group:", error);
    return NextResponse.json(
      { error: "Failed to update group" },
      { status: 500 }
    );
  }
}
