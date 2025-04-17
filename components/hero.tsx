import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to My Portfolio
      </h1>
      <p className="mx-auto mt-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        I'm a passionate developer building amazing web experiences.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/projects">
            View Projects
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
            Read Blog
          </Link>
        </Button>
      </div>
    </section>
  )
}