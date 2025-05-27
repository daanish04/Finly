import { seedTransactions } from "@/actions/seed";

export async function GET() {
  const response = await seedTransactions();
  return Response.json(response);
}
