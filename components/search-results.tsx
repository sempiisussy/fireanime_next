import { searchAnime } from "@/lib/api"
import AnimeGrid from "./anime-grid"

interface SearchResultsProps {
  query: string
}

export async function SearchResults({ query }: SearchResultsProps) {
  const response = await searchAnime(query)
  const results = response.data

  return <AnimeGrid animes={results} title={`Search Results for "${query}"`} />
}

