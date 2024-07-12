import { revalidatePath } from "next/cache";

export default async function Page() {
  const submissions = await fetch(
    "https://kenkoooo.com/atcoder/atcoder-api/v3/from/1720766070",
    { next: { revalidate: 60 } }
  );
  const seasons = await fetch(
    "https://daily-smashmate.harukisb.net/api/seasons",
    { next: { revalidate: 60 } }
  );
  const currentTime = await fetch(
    "https://nextjs-cache-example.vercel.app/api/currentTime",
    {
      next: { revalidate: 60 },
    }
  );

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>{(await submissions.json()).length}</div>
      <div>{JSON.stringify(await seasons.json())}</div>
      <div>{JSON.stringify(await currentTime.json())}</div>
    </main>
  );
}
