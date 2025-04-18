import { notFound } from "next/navigation"
import { formatDistanceToNow, format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from your database
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: "1",
      title: "The Future of AI: Beyond ChatGPT",
      content: `
        <p class="mb-4">Artificial Intelligence has come a long way since its inception, and with the advent of large language models like ChatGPT, we're witnessing a revolutionary change in how we interact with machines. However, the future holds even more promise.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Current Landscape</h2>
        <p class="mb-4">Today's AI landscape is dominated by transformer-based models that have shown remarkable capabilities in understanding and generating human language. These models have found applications in various fields, from content creation to code generation.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Beyond Language Models</h2>
        <p class="mb-4">The next frontier of AI extends far beyond language processing. We're seeing emerging technologies in:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Multimodal AI systems that can process text, images, and sound simultaneously</li>
          <li>Advanced reasoning systems that can solve complex problems</li>
          <li>AI that can learn from minimal data</li>
          <li>Systems that can explain their decision-making process</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Ethical Considerations</h2>
        <p class="mb-4">As AI continues to evolve, we must carefully consider its ethical implications. This includes issues of bias, privacy, and the impact on employment.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
        <p class="mb-4">The future of AI promises even more exciting developments. We can expect to see:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>More sophisticated reasoning capabilities</li>
          <li>Better integration with physical systems</li>
          <li>More efficient training methods</li>
          <li>Enhanced human-AI collaboration</li>
        </ul>

        <p class="mb-4">As we move forward, it's crucial to maintain a balance between innovation and responsibility, ensuring that AI development benefits humanity as a whole.</p>
      `,
      tags: "ai,technology,future",
      published: true,
      createdAt: new Date("2024-03-15"),
      updatedAt: new Date("2024-03-15"),
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
      excerpt: "Exploring the next frontier of AI technology and its implications for society, business, and human interaction.",
    },
    {
      id: "2",
      title: "Building Scalable Web Applications with Next.js",
      content: `
        <p class="mb-4">Next.js has revolutionized how we build web applications, offering a powerful framework that combines the best of React with server-side capabilities.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Evolution of Web Development</h2>
        <p class="mb-4">Web development has come a long way from static HTML pages. Modern applications demand performance, scalability, and excellent user experience.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Key Features of Next.js</h2>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Server-side rendering and static site generation</li>
          <li>Automatic code splitting</li>
          <li>Built-in API routes</li>
          <li>Excellent developer experience</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <p class="mb-4">When building scalable applications with Next.js, consider:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Proper component architecture</li>
          <li>State management strategies</li>
          <li>Performance optimization</li>
          <li>Testing methodologies</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Future of Next.js</h2>
        <p class="mb-4">The framework continues to evolve with new features and improvements, making it an excellent choice for modern web development.</p>
      `,
      tags: "nextjs,react,webdev",
      published: true,
      createdAt: new Date("2024-03-10"),
      updatedAt: new Date("2024-03-10"),
      readTime: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
      excerpt: "Learn how to leverage Next.js features to build fast, scalable, and maintainable web applications.",
    },
    // Add more posts here...
  ];

  const post = posts.find(post => post.id === id);
  if (!post) return null;
  return post;
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      {/* Back button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>

      {/* Hero Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{format(post.createdAt, 'MMMM d, yyyy')}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex gap-2">
          {post.tags.split(',').map((tag) => (
            <span
              key={tag}
              className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Footer */}
      <div className="mt-16 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Last updated: {formatDistanceToNow(post.updatedAt, { addSuffix: true })}
          </div>
          <Link 
            href="/blog" 
            className="text-primary hover:underline"
          >
            More articles
          </Link>
        </div>
      </div>
    </article>
  )
}