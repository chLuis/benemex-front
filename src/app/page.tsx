import Hero from "@/components/hero";
import HomeProducts from "@/components/home-products";

export default async function Home() {
  return (
    <main className="flex flex-col mx-auto min-h-screen w-full overflow-clip">
      <Hero />
      <HomeProducts />
    </main>
  );
}
