"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredTools = [
  {
    name: "AI Text Generator",
    description: "Create high-quality content with our free AI-powered text generator.",
    category: "Text Generation",
    link: "/tools/ai-text-generator"
  },
  {
    name: "Image Analysis Tool",
    description: "Analyze and extract insights from images using advanced AI algorithms.",
    category: "Image Analysis",
    link: "/tools/image-analysis-tool"
  },
  {
    name: "Data Visualization AI",
    description: "Transform complex data into beautiful, interactive visualizations.",
    category: "Data Analysis",
    link: "/tools/data-visualization-ai"
  }
]

const FeaturedTools = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Featured Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTools.map((tool, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-4">{tool.category}</Badge>
              <Link href={tool.link} className="flex items-center text-primary hover:underline">
                Explore Tool <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturedTools