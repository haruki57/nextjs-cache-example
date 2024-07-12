export default async function Page() {
  const submissions = await fetch(
    "https://kenkoooo.com/atcoder/atcoder-api/v3/from/1720766070"
  );
  const seasons = await fetch(
    "https://daily-smashmate.harukisb.net/api/seasons"
  );
  const currentTime = await fetch(
    `https://${process.env.VERCEL_URL}/api/currentTime`
  );

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>{(await submissions.json()).length}</div>
      <div>{JSON.stringify(await seasons.json())}</div>
      <div>{JSON.stringify(await currentTime.json())}</div>
    </main>
  );
}
