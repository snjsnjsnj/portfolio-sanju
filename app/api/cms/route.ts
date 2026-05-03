import { NextRequest, NextResponse } from "next/server"
import { readCmsData, writeCmsData } from "@/lib/cms-store"

const CMS_PASSWORD = process.env.CMS_PASSWORD || "admin123"

function checkAuth(req: NextRequest) {
  return req.headers.get("x-cms-password") === CMS_PASSWORD
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  return NextResponse.json(readCmsData())
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  try {
    writeCmsData(await req.json())
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 })
  }
}
