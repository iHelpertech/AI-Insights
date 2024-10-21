"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const popularPrompts = [
  {
    title: "Creative Writing Starter",
    description: "Generate a unique story opening",
    prompt: "Write the opening paragraph of a science fiction story set in a world where dreams are shared collectively.",
    model: "GPT-3"
  },
  {
    title: "Code Explanation",
    description: "Simplify complex code snippets",
    prompt: "Explain the following code as if you were teaching a beginner programmer: [INSERT CODE HERE]",
    model: "Bard"
  },
  {
    title: "Image Generation Idea",
    description: "Create unique image concepts",
    prompt: "A surrealist painting of a library where books are flying and transforming into butterflies, in the style of Salvador Dali.",
    model: "Dall-E"
  }
]

const PopularPrompts = () => {
  const { toast } = useToast()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Prompt Copied!",
        description: "The prompt has been copied to your clipboard.",
      })
    })
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Popular Prompts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularPrompts.map((prompt, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{prompt.title}</CardTitle>
              <CardDescription>{prompt.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{prompt.prompt}</p>
              <div className="flex justify-between items-center">
                <Badge variant="outline">{prompt.model}</Badge>
                <Button variant="outline" size="sm" onClick={() => copyToClipboard(prompt.prompt)}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default PopularPrompts