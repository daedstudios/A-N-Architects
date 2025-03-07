import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-left justify-top min-h-screen text-4xl">
      <Image src="/Logo.svg" alt="Vercel Logo" width={920} height={160} />
    </div>
  );
}
