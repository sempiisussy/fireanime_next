import { getAnimeFromGenre } from "@/lib/api"
import AnimeGrid from "@/components/anime-grid"
import AnimePagination from "@/components/pagination-universal";

export async function generateMetadata(props: {
  params: Promise<{ genre: string }>
}) {
  const params = await props.params;
  let genre = ""
  try {
    genre = atob(params.genre)
  } catch (err) {
    return {
      title: `Anime from the Genre - FireAnime`,
      description: `Browse anime by genre category.`,
    }
  }

  return {
    title: `Anime from the Genre ${genre} - FireAnime`,
    description: `Browse anime by genre category ${genre}.`,
  }
}

export default async function GenrePage(props: {
  params: Promise<{ genre: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await props.params;
  const searchParams = await props.searchParams
  let genre = ""

  try {
    genre = atob(params.genre)
  } catch (err) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">Failed to load animes</p>
      </div>
    )
  }

  // Get the current page from the URL query or default to 1
  const currentPage = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1

  let animes = []
  let totalPages = 1

  try {
    // Pass the current page to your API function
    const response = await getAnimeFromGenre(genre, currentPage)
    animes = response.data

    // Assuming your API returns total pages information
    // If not, you'll need to modify this based on your API response structure
    totalPages = response.pages || 1
  } catch (error) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">Failed to load animes</p>
      </div>
    )
  }

  if (animes.length === 0) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">No animes available</p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Animes from the Genre {genre}</h1>

      <div className="mb-8">
        <AnimeGrid animes={animes} />
      </div>

      {/* Add the pagination component */}
      <AnimePagination currentPage={currentPage} totalPages={totalPages} pathPrefix={`/genre/${params.genre}`} />
    </div>
  )
}

