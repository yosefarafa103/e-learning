import { NextResponse } from "next/server";
import Stripe from "stripe";
import User from "@/models/user.model"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: Request, response: NextResponse) {
  const sig = req.headers.get('stripe-signature');
  let event;
  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await User.findByIdAndUpdate(event.data.object.metadata!.userId, {
      $addToSet: { enrolled_courses: { $each: event.data.object.metadata!.courseId } }
    })
    console.log('Checkout session completed:', session);
  }

  return new NextResponse('ok', { status: 200 });

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
