export async function GET(

) {
  const date = new Date();
  return Response.json({ isoString: date.toISOString() })
}