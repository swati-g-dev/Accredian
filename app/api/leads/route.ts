import { NextRequest, NextResponse } from "next/server";

// In-memory store (replace with DB in production)
const leads: object[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "name, email, and company are required" },
        { status: 400 }
      );
    }

    const lead = { ...body, createdAt: new Date().toISOString() };
    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully", lead },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ leads, total: leads.length });
}