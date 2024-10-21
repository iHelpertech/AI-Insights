import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function AITextGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Text Generator</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generate Text with AI</CardTitle>
          <CardDescription>Enter a prompt and let our AI generate text for you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Textarea placeholder="Enter your prompt here..." rows={4} />
            </div>
            <Button type="submit">Generate Text</Button>
          </form>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Generated Text</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your generated text will appear here...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}