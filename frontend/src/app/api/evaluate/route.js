import { NextResponse } from "next/server";

export async function POST(request) {
  const apiUrl = process.env.BACKEND_API_URL || process.env.NEXT_PUBLIC_API_URL;
  const hfToken = process.env.HF_TOKEN;

  if (!apiUrl) {
    return NextResponse.json(
      { error: "Backend API URL is not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const headers = { "Content-Type": "application/json" };
  if (hfToken) {
    headers["Authorization"] = `Bearer ${hfToken}`;
  }

  const upstream = await fetch(`${apiUrl}/evaluate-response`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = await upstream.json();

  return NextResponse.json(data, { status: upstream.status });
}
