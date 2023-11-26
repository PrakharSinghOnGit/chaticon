import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-backgroundColor flex min-h-screen flex-col justify-between">
      <Link href={"chaticon"}>Go to App</Link>
    </main>
  );
}
