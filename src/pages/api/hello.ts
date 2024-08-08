// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {AppDataSource} from "./../../data-source"

 AppDataSource.initialize();

 async function getServerSideProps() {
  const users = await AppDataSource.query("SELECT * FROM users");

  return JSON.stringify(users);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await getServerSideProps();
  return res.json({result });
  
}
