import HeroSlider from "@/components/hero-slider"
import AnimeGrid from "@/components/anime-grid"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getBest, getNewestEpisodes, searchAnime } from "@/lib/api"
import AnimeEpisodeGrid from "@/components/anime-episode-grid"

export const metadata = {
  title: "FireAnime - Home",
  description: "Watch the latest anime episodes and explore new series.",
}

export default async function HomePage() {
  // Fetch data server-side
  const trendingResponse = await getBest(1)
  const newReleasesResponse = await getNewestEpisodes(1)

  const trendingAnime = trendingResponse.data.slice(0, 12)
  const newReleases = newReleasesResponse.data.slice(0, 12)

  return (
    <div className="flex flex-col">
      <HeroSlider />

      <div className="container py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Button variant="ghost" asChild>
              <Link href="/search?sort=trending" className="flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <AnimeGrid animes={trendingAnime} />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">New Releases</h2>
            <Button variant="ghost" asChild>
              <Link href="/search?sort=newest" className="flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <AnimeEpisodeGrid animes={newReleases} />
        </div>
      </div>
    </div>
  )
}

