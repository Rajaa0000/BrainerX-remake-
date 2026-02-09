import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get('name') as string | null;

  if (!name) {
    return NextResponse.json(
      
      { success: false, message: "Name is required" },
    );
  }
   console.log(name);
  return NextResponse.json(
   
    { success: true, message:name }
  );
}
