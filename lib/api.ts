// Types for API responses
export interface AnimeSearchResponse {
  data: AnimeSearchItem[]
  pages: number
  status: number
}

export interface AnimeSearchItem {
  id: number
  created_at: string
  updated_at: string
  last_sync: string
  slug: string
  title: string
  alternate_titles: string
  generes: string[]
  imdb?: string
  tmdb: number
  tmdb_type: string
  anilist: any
  desc: string
  start: number
  end?: number
  poster: string
  backdrop: string
  vote_avg: number
  vote_count: number
  item_type: string
  anime_seasons: any
}

export interface AnimeDetailsResponse {
  data: AnimeDetails
  status: number
}

export interface AnimeDetails {
  id: number
  created_at: string
  updated_at: string
  last_sync: string
  slug: string
  title: string
  alternate_titles: string
  generes: string[]
  imdb: string
  tmdb: number
  tmdb_type: string
  anilist: any
  desc: string
  start: number
  end: number
  poster: string
  backdrop: string
  vote_avg: number
  vote_count: number
  item_type: string
  anime_seasons: AnimeSeason[]
}

export interface AnimeSeason {
  id: number
  created_at: string
  updated_at: string
  season: string
  anime_id: number
  anime_episodes: AnimeEpisode[]
}

export interface AnimeEpisode {
  id: number
  created_at: string
  updated_at: string
  last_sync: string
  episode: string
  image: string
  view_count: number
  anime_season_id: number
  has_ger_sub: boolean
  has_ger_dub: boolean
  has_eng_sub: boolean
  anime_episode_links: any
}

export interface SliderResponse {
  data: SliderItem[]
  pages: number
  status: number
}

export interface SliderItem {
  id: number
  title: string
  subtitle: string
  year: string
  description: string
  poster: string
  backdrop: string
  path: string
  prio: number
}

export interface CalendarResponse {
  data: CalendarItem[]
  pages: number
  status: number
}

export interface CalendarItem {
  id: number
  anime_id: number
  anime: AnimeSearchItem
  ep_details: string
  time_details: string
  season: string
  episode: string
  airing_time: string
  episode_is_available: boolean
  date_string: string
  lang: string
}

export interface GenresResponse {
  data: string[]
  status: number
}

export interface EpisodeResponse {
  data: EpisodeDetails
  status: number
}

export interface EpisodeDetails {
  id: number
  episode: string
  image: string
  view_count: number
  anime_season_id: number
  has_ger_sub: boolean
  has_ger_dub: boolean
  has_eng_sub: boolean
  like_count: number
  dislike_count: number
  anime_episode_links: AnimeEpisodeLink[]
}

export interface AnimeEpisodeLink {
  id: number
  created_at: string
  updated_at: string
  link: string
  lang: string
  name: string
  anime_episode_id: number
}

export interface NewestAnimeEpisodesResponse {
  data: NewestAnimeEpisode[]
  pages: number
  status: number
}

export interface NewestAnimeEpisode {
  episode_id: number
  created_at: string
  slug: string
  season: string
  episode: string
  poster: string
  backdrop: string
  image: string
  title: string
  has_ger_sub: boolean
  has_ger_dub: boolean
  has_eng_sub: boolean
}

export interface AnimesFromGenreResponse {
  data: AnimeFromGenre[]
  pages: number
  status: number
}

export interface AnimeFromGenre {
  id: number
  created_at: string
  updated_at: string
  last_sync: string
  slug: string
  title: string
  alternate_titles: string
  generes: string[]
  imdb?: string
  tmdb: number
  tmdb_type: string
  anilist: any
  desc: string
  start: number
  end?: number
  poster: string
  backdrop: string
  vote_avg: number
  vote_count: number
  item_type: string
  anime_seasons: any
}



export const API_BASE_URL = "https://fireani.me/api"
export const API_BASE_IMG_URL = "https://fireani.me"

// API service functions
export async function searchAnime(query: string): Promise<AnimeSearchResponse> {
  const response = await fetch(`${API_BASE_URL}/anime/search?q=${encodeURIComponent(query)}`, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) {
    throw new Error("Failed to search anime")
  }
  return response.json()
}

export async function getAnimeDetails(slug: string): Promise<AnimeDetailsResponse> {
  const response = await fetch(`${API_BASE_URL}/anime?slug=${encodeURIComponent(slug)}`, { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error("Failed to get anime details")
  }
  return response.json()
}

export async function getSliders(): Promise<SliderResponse> {
  const response = await fetch(`${API_BASE_URL}/sliders`, { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error("Failed to get sliders")
  }
  return response.json()
}

export async function getCalendar(): Promise<CalendarResponse> {
  const response = await fetch(`${API_BASE_URL}/calendars`, { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error("Failed to get calendar")
  }
  return response.json()
}

export async function getGenres(): Promise<GenresResponse> {
  const response = await fetch(`${API_BASE_URL}/genres`, { next: { revalidate: 86400 } })
  if (!response.ok) {
    throw new Error("Failed to get genres")
  }
  return response.json()
}

export async function getAnimeFromGenre(genre: string, page: number): Promise<AnimesFromGenreResponse> {
  const response = await fetch(`${API_BASE_URL}/animes/genre?genere=${encodeURIComponent(genre)}&page=${encodeURIComponent(page)}`, { next: { revalidate: 86400 } })
  if (!response.ok) {
    throw new Error("Failed to get genres")
  }
  return response.json()
}

export async function getEpisode(slug: string, season: string, episode: string): Promise<EpisodeResponse> {
  const response = await fetch(
    `${API_BASE_URL}/anime/episode?slug=${encodeURIComponent(slug)}&season=${season}&episode=${episode}`,
    { next: { revalidate: 3600 } },
  )
  if (!response.ok) {
    throw new Error("Failed to get episode")
  }
  return response.json()
}

export async function getBest(page: number): Promise<AnimeSearchResponse> {
  const response = await fetch(
    `${API_BASE_URL}/animes/best?page=${encodeURIComponent(page)}`,
    { next: { revalidate: 3600 } },
  )
  if (!response.ok) {
    throw new Error("Failed to list best animes")
  }
  return response.json()
}

export async function getNewestEpisodes(page: number): Promise<NewestAnimeEpisodesResponse> {
  const response = await fetch(
    `${API_BASE_URL}/animes/newest-episodes?page=${encodeURIComponent(page)}`,
    { next: { revalidate: 3600 } },
  )
  if (!response.ok) {
    throw new Error("Failed to list best animes")
  }
  return response.json()
}

