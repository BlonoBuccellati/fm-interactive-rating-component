import { NextRequest, NextResponse } from "next/server";

import { FormSchema } from "@/screens/interactive-rating-form/lib/schema";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const result = FormSchema.safeParse(payload);
  if (!result.success) {
    const errors = result.error.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }));
    return NextResponse.json({ errors }, { status: 400 });
  }

  const validData = result.data;
  console.log(payload);
  return NextResponse.json({ message: "OK", data: validData });
}
