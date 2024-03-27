export interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}
export type GameImageType = {
  isPending: boolean
  src: string
  alt: string
}

interface MinimumSystemRequirements {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

interface Screenshot {
  id: number
  image: string
}

export interface GameDetails {
  id: number
  title: string
  thumbnail: string
  status: string
  short_description: string
  description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
  minimum_system_requirements: MinimumSystemRequirements
  screenshots: Screenshot[]
}
