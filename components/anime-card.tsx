import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Star } from "lucide-react"
import { API_BASE_IMG_URL, API_BASE_URL, type AnimeSearchItem } from "@/lib/api"

interface AnimeCardProps {
  anime: AnimeSearchItem
  className?: string
}

const AnimeCard = ({ anime, className = "" }: AnimeCardProps) => {
  return (
    <Link href={`/anime/${anime.slug}`}>
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
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {anime.vote_avg.toFixed(1)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium line-clamp-1">{anime.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {anime.start}
            {anime.end ? ` - ${anime.end}` : ""}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default AnimeCard

