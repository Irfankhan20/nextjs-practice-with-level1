import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const data = await dbConnect("practice_data").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(data);
}

export async function DELETE(req, { params }) {
  const p = await params;
  const data = await dbConnect("practice_data").deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(data);
}

export async function PATCH(req, { params }) {
  console.log(req);
  const p = await params;
  const updatedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const data = await dbConnect("practice_data").updateOne(
    filter,
    { $set: { ...updatedData } },
    { upsert: true }
  );
  return Response.json(data);
}
