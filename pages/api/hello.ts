// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await openai.createImage({
    prompt: req.body.prompt,
    size: "1024x1024",
    response_format: "url",
    n: 1,
    user: undefined,
  })

  res.status(200).json(response.data)
}
