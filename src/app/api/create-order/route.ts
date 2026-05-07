import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  throw new Error("Razorpay environment variables are missing");
}

const razorpay = new Razorpay({
  key_id,
  key_secret,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);

    return NextResponse.json(
      {
        error: "Failed to create order",
      },
      {
        status: 500,
      }
    );
  }
}