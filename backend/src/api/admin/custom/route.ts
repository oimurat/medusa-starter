// import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ) {
//   res.sendStatus(200);
// }

import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  res.json({ message: "[GET] Hello world!" });
}

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  res.json({ message: "[POST] Hello world!" });
}