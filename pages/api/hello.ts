// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const db = import("../../public/db.json");

// type Data = {
//   name: string;
// };
let userdb = [
  {
    name: "John X",
  },
  { name: "Alisa Neil" },
];
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await GetDB(res);
  } else {
    res.status(400).send("userdb");
  }
}
async function GetDB(res:any) {
  const aresult: any = await db;
  const xyz = aresult.default
  xyz.push({ name: "John", age: 27, status: "offline", gender: "Male" });
  res.status(200).send(xyz);
  const ahha = JSON.stringify(xyz);
  const parse = JSON.parse(ahha);
  console.log(parse)
}
