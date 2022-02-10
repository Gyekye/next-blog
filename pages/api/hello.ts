// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200);
  res.json({ name:"John" });
}

export default  handler;