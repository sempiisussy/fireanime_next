import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getGenres } from "@/lib/api"

export const metadata = {
  title: "Anime Genres - FireAnime",
  description: "Browse anime by genre categories.",
}


export default async function GenresPage() {
  let genres = []

  try {
    const response = await getGenres()
    genres = response.data
  } catch (error) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">Failed to load genres</p>
      </div>
    )
  }

  if (genres.length === 0) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">No genres available</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Browse by Genre</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <Link key={genre} href={`/genre/${btoa(genre).replaceAll('=', '')}`}>
            <Card className="hover:bg-muted transition-colors">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <h2 className="text-lg font-medium text-center">{genre}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

