import { format, parseISO } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { API_BASE_IMG_URL, getCalendar } from "@/lib/api"

export const metadata = {
  title: "Anime Calendar - FireAnime",
  description: "View the latest anime release schedule and upcoming episodes.",
}

export default async function CalendarPage() {
  let calendarItems = []

  try {
    const response = await getCalendar()
    calendarItems = response.data
  } catch (error) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">Failed to load calendar data</p>
      </div>
    )
  }

  if (calendarItems.length === 0) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">No calendar data available</p>
      </div>
    )
  }

  // Group calendar items by date
  const groupedByDate = calendarItems.reduce(
    (acc, item) => {
      const date = item.date_string
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(item)
      return acc
    },
    {} as Record<string, typeof calendarItems>,
  )

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Anime Release Calendar</h1>

      {Object.entries(groupedByDate).map(([date, items]) => (
        <div key={date} className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b">

            {date}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-28 rounded-md overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={item.anime.poster ? `${API_BASE_IMG_URL}/img/posters/small-${item.anime.poster}.webp` : "/placeholder.svg"}
                    alt={item.anime.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex flex-col">
                  <Link href={`/anime/${item.anime.slug}`} className="font-medium hover:text-primary">
                    {item.anime.title}
                  </Link>

                  <p className="text-sm text-muted-foreground mt-1">
                    Season {item.season}, Episode {item.episode}
                  </p>

                  <p className="text-sm mt-1">{item.time_details}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex gap-1 w-full">
                    {(() => {
                      switch (item.lang) {
                        case 'ger-sub':
                          return <span>GER-SUB</span>
                        case 'ger-dub':
                          return <span>GER-DUB</span>
                        case 'eng-sub':
                          return <span>ENG-SUB</span>
                        default:
                          return ""
                      }
                    })()}
                  </p>
                  {item.episode_is_available ? (
                    <Link
                      href={`/anime/${item.anime.slug}/${item.season}/${item.episode}`}
                      className="text-sm text-primary mt-2 hover:underline"
                    >
                      Watch Now
                    </Link>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-2">Coming soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

