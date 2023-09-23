import Marque from "@/components/common/Marque";
import Navbar from "@/components/common/Navbar";
import Book from "@/components/home/Book";
import Hero from "@/components/home/Hero";
import Stat from "@/components/home/Stat";
import Testimonial from "@/components/home/Testimonial";
import Who from "@/components/home/Who";
import Why from "@/components/home/Why";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <Who />
      <Book />
      <Stat />
      <Why />
      <Testimonial />
      <Marque />
    </div>
  );
}
