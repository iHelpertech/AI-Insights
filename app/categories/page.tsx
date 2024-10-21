import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  {
    name: "Text Generation",
    description: "Tools for creating various types of text content using AI.",
    toolCount: 5,
  },
  {
    name: "Image Analysis",
    description: "AI-powered tools for analyzing and understanding images.",
    toolCount: 3,
  },
  {
    name: "Data Visualization",
    description: "Tools to create insightful visualizations from complex data.",
    toolCount: 4,
  },
  {
    name: "Natural Language Processing",
    description: "Advanced tools for processing and understanding human language.",
    toolCount: 6,
  },
  {
    name: "Machine Learning",
    description: "Tools and resources for building and deploying ML models.",
    toolCount: 7,
  },
  {
    name: "AI Ethics",
    description: "Resources and tools for ethical AI development and deployment.",
    toolCount: 2,
  },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Tool Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-4">{category.toolCount} Tools</Badge>
              <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                Explore Category
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}