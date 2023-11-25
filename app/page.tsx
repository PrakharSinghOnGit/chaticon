import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Link href={"chaticon"}>Go to App</Link>
    </main>
  );
}
