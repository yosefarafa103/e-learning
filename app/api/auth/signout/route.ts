import { cookies } from "next/headers";
export async function POST(request: Request) {
    (await cookies()).delete("token")
    return new Response("Signed out", { status: 200 });
}
