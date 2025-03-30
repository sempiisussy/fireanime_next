import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Calendar, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { API_BASE_IMG_URL, getAnimeDetails } from "@/lib/api"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const response = await getAnimeDetails(params.slug)
    const anime = response.data

    return {
      title: `${anime.title} - FireAnime`,
      description: anime.desc.substring(0, 160),
    }
  } catch (error) {
    return {
      title: "Anime - FireAnime",
      description: "View anime details and episodes",
    }
  }
}

export default async function AnimePage({ params }: { params: { slug: string } }) {
  let anime

  try {
    const response = await getAnimeDetails(params.slug)
    anime = response.data
  } catch (error) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <div
        className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${anime.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="container relative z-10 h-full flex items-end pb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="hidden md:block w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg relative">
              <Image
                src={anime.poster ? `${API_BASE_IMG_URL}/img/posters/small-${anime.poster}.webp` : "/placeholder.svg"}
                alt={anime.title}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{anime.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {anime.generes.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{anime.vote_avg.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>
                    {anime.start}
                    {anime.end ? ` - ${anime.end}` : ""}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl line-clamp-3 md:line-clamp-none">{anime.desc}</p>
              {anime.anime_seasons.length > 0 && anime.anime_seasons[0].anime_episodes.length > 0 && (
                <Button asChild size="lg">
                  <Link href={`/anime/${anime.slug}/1/1`}>
                    <Play className="mr-2 h-5 w-5" /> Watch Now
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="episodes" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="episodes" className="space-y-6">
            {anime.anime_seasons.map((season) => (
              <div key={season.id} className="space-y-4">
                <h3 className="text-xl font-bold">Season {season.season}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {season.anime_episodes.map((episode) => (
                    <Link
                      key={episode.id}
                      href={`/anime/${anime.slug}/${season.season}/${episode.episode}`}
                      className="group"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={episode.image ? `${API_BASE_IMG_URL}/img/thumbs/${episode.image}` : `${API_BASE_IMG_URL}/img/posters/small-${anime.backdrop}.webp`}
                          alt={`Episode ${episode.episode}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-12 w-12" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="font-medium">Episode {episode.episode}</h4>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span>{episode.view_count.toLocaleString()} views</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="details">
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-xl font-bold mb-2">Synopsis</h3>
                <p className="text-muted-foreground">{anime.desc}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Title</p>
                    <p className="text-muted-foreground">{anime.title}</p>
                  </div>
                  {anime.alternate_titles && (
                    <div>
                      <p className="text-sm font-medium">Alternative Titles</p>
                      <p className="text-muted-foreground">{anime.alternate_titles}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">Release Year</p>
                    <p className="text-muted-foreground">{anime.start}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-muted-foreground">{anime.end ? "Completed" : "Ongoing"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Genres</p>
                    <p className="text-muted-foreground">{anime.generes.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

