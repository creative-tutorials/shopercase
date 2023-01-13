// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };
let userdb = [
  {
    name: "John X",
  },
  { name: "Alisa Neil" },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(userdb);
}
