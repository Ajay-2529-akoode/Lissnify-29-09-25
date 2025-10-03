"use client";
import Link from "next/link";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function ListenerPage() {
  // Get meta data for the listener page
  const metaData = getMetaData('listener');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFB88C] to-[#FFF8B5]">
      <MetaHead meta={metaData} />
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="rounded-3xl bg-white/90 shadow-xl border border-white/40 p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6">Share Your Light</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular mb-8">
            Become a supportive listener. Offer empathy and guidance based on your
            lived experience and help someone feel less alone.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/support/relationship"
              className="px-5 py-3 rounded-full bg-[#9C27B0] text-white font-semibold hover:opacity-90 transition"
            >
              Support relationships
            </Link>
            <Link
              href="/support/loneliness"
              className="px-5 py-3 rounded-full bg-[#4CAF50] text-white font-semibold hover:opacity-90 transition"
            >
              Help with loneliness
            </Link>
            <Link
              href="/support/career"
              className="px-5 py-3 rounded-full bg-[#FF9800] text-white font-semibold hover:opacity-90 transition"
            >
              Career stress
            </Link>
          </div>

          <div className="mt-10">
            {/* <Link href="/" className="text-[#2E2E2E] underline">
              ← Back to Home
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}


