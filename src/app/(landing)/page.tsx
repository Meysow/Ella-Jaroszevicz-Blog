import { BlogList } from "@/components/blog/blog-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PortraitPeint from "../../../public/images/portrait-peint.png";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <Image
              src={PortraitPeint}
              alt="Author"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <p className="text-xl text-muted-foreground">
              Tech enthusiast, software engineer, and writer with over 10 years
              of experience in the industry. Passionate about sharing knowledge
              and helping others learn about technology.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <BlogList />
        </section>

        {/* Latest Posts Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
          <BlogList />
        </section>
      </div>
    </div>
  );
}
