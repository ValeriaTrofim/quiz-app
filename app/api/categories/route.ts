import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const categories = await prisma.category.findMany({});

  return NextResponse.json(categories);
}
