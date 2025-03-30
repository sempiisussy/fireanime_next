import type { NewestAnimeEpisode } from "@/lib/api"
import AnimeEpisodeCard from "./anime-episode-card"

interface AnimeGridProps {
  animes: NewestAnimeEpisode[]
  title?: string
  className?: string
}

const AnimeEpisodeGrid = ({ animes, title, className = "" }: AnimeGridProps) => {
  if (animes.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-muted-foreground">No anime found</p>
      </div>
    )
  }

  return (
    <div className={className}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {animes.map((anime) => (
          <AnimeEpisodeCard key={anime.episode_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default AnimeEpisodeGrid

