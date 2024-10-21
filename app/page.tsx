import FeaturedTools from '@/components/FeaturedTools'
import PopularPrompts from '@/components/PopularPrompts'
import LatestTrends from '@/components/LatestTrends'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to AI iHelper Tech</h1>
      <FeaturedTools />
      <PopularPrompts />
      <LatestTrends />
    </div>
  )
}