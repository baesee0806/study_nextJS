// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Test = {
  name: string
  id : any
}

export default function handler(

  req: NextApiRequest,
  res: NextApiResponse<Test>
) {
    const {query} = req;
    const {id} = query;

  res.status(200).json({ name: 'Test' , id })
}
