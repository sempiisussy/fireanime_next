import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { API_BASE_IMG_URL,  NewestAnimeEpisode, type AnimeSearchItem } from "@/lib/api"

interface AnimeCardProps {
  anime: NewestAnimeEpisode
  className?: string
}

const AnimeEpisodeCard = ({ anime, className = "" }: AnimeCardProps) => {
  return (
    <Link href={`/anime/${anime.slug}/${anime.season}/${anime.episode}`}>
      <Card className={`overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg ${className}`}>
        <div className="aspect-[2/3] relative overflow-hidden">
          <Image
            src={anime.poster ? `${API_BASE_IMG_URL}/img/posters/small-${anime.poster}.webp` : "/placeholder.svg"}
            alt={anime.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
          />
          <div className="absolute top-2 right-2">
            <Badge className="flex items-center gap-1 bg-black/70 hover:bg-black/70">
              S{anime.season} E{anime.episode}
            </Badge>
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium line-clamp-1">{anime.title}</h3>
          <p className="text-xs text-muted-foreground mt-1 flex gap-1 w-full">
            {anime.has_ger_sub ? <span>GER-SUB</span> : ''}
            {anime.has_ger_dub ? <span>GER-DUB</span> : ''}
            {anime.has_eng_sub ? <span>ENG-SUB</span> : ''}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default AnimeEpisodeCard

