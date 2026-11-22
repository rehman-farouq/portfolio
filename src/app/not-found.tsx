import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Rehman Farouq",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="underline">Home</Link>
        <Link href="/blog" className="underline">Blog</Link>
        <Link href="/tools" className="underline">Free tools</Link>
      </div>
    </main>
  );
}
