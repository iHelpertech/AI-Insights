"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const latestTrends = [
  {
    title: "The Rise of Multimodal AI",
    description: "Explore how AI is combining text, image, and audio understanding for more comprehensive analysis.",
    category: "AI Research",
    link: "/blog/rise-of-multimodal-ai"
  },
  {
    title: "Ethical Considerations in AI Development",
    description: "Discussing the importance of ethics in AI and strategies for responsible AI development.",
    category: "AI Ethics",
    link: "/blog/ethical-considerations-ai-development"
  },
  {
    title: "AI in Healthcare: Latest Breakthroughs",
    description: "Discover how AI is revolutionizing diagnostics, drug discovery, and patient care.",
    category: "AI Applications",
    link: "/blog/ai-healthcare-breakthroughs"
  }
]

const LatestTrends = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Latest Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestTrends.map((trend, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{trend.title}</CardTitle>
              <CardDescription>{trend.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-4">{trend.category}</Badge>
              <Link href={trend.link} className="flex items-center text-primary hover:underline">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default LatestTrends