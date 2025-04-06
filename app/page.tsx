import Navbar from "./_components/navbar";
import HeroSection from "./_components/home";
import CardSection from "./_components/Card";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <CardSection />
    </main>
  );
}
