import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
interface BodyType {
  price: number;
  courseTitle: string;
  courseDescription: string;
  imgs: string[];
  courseId: string;
}
export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const { price, courseDescription, courseTitle, imgs, courseId }: BodyType =
      await request.json();
    const successUrl =
      "https://e-learning-eight-tau.vercel.app/checkout/success?session_id={CHECKOUT_SESSION_ID}";
    const cancelUrl = "https://e-learning-eight-tau.vercel.app//api/checkout/fail";
    if (!successUrl || !cancelUrl) {
      throw new Error("Missing Stripe redirect URLs in environment variables.");
    }
    // @ts-ignore
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: courseTitle,
              description: courseDescription,
              images: imgs,
            },
            unit_amount: `${price}00`,
          },
          quantity: 1,
        },
      ],
      success_url: `${successUrl}&courseId=${courseId}`,
      cancel_url: `${cancelUrl}/cancel`,
    });
    // request.cookies.set("hasPayCourse", "1");
    return new Response(JSON.stringify({ session: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error: " + err.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  if (!sessionId) {
    return new Response(JSON.stringify({ error: "Missing session_id" }), {
      status: 400,
    });
  }
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return new Response(JSON.stringify(session), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
