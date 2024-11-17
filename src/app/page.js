import Navbar from "./pages/navbar";
import Hero from "./pages/Hero";

export default function Home() {
  return (
    <div className="text-white flex flex-col gap-[36px] w-full">
  <Navbar />
  <Hero />
</div>
  );
}
