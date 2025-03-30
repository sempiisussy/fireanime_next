import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getAnimeFromGenre, getGenres } from "@/lib/api"
import AnimeGrid from "@/components/anime-grid"

export async function generateMetadata({ params }: { params: { genre: string } }) {
    return {
        title: `Anime from the Genre ${params.genre} - FireAnime`,
        description: `Browse anime by genre category ${params.genre}.`,
    }
}

export default async function GenrePage({ params }: { params: { genre: string } }) {
    let animes = []

    try {
        const response = await getAnimeFromGenre(params.genre, 1)
        animes = response.data
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
            <h1 className="text-3xl font-bold mb-8">Browse Animes from the Genre {params.genre}</h1>

            <div className="mb-8">
                <AnimeGrid animes={animes} />
            </div>
        </div>
    )
}

