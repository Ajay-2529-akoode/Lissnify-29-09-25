"use client";
import CategoryCard from "@/Components/CategoryCard";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";
import { categories } from "./data";

export default function ListenersLandingPage() {
  // Get meta data for the listeners page
  const metaData = getMetaData('listeners');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFB88C] to-[#FFF8B5]">
      <MetaHead meta={metaData} />
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] mb-8 sm:mb-10">Find a Listener by Category</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} href={`/listeners/${cat.id}`} />
          ))}
        </div>
      </section>
    </main>
  );
}


