import { dbConnection } from "@/lib/db";
import User from "@/models/user.model";

export async function GET() {
  console.log("Users");
  
  try {
    await dbConnection();
    const users = await User.find();
    return Response.json(
      {
        status: "User Success",
        users,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Err:", error);
    return Response.json(
      {
        status: "error",
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
