import { useQuery } from '@tanstack/react-query'

import {
  getFilteredGames,
  getGameDetails,
  getGamesByCategoryOrTag,
  getGamesByPlatform,
  getGamesByTags,
  getGamesList,
  getSortedGames,
} from './api'

import { Game } from '@/types/games'

export function useGamesList() {
  console.log('Fetching games list')
  return useQuery({
    queryKey: ['games'],
    queryFn: getGamesList,
    staleTime: Infinity,
  })
}

export function useGameDetails(id: string) {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => getGameDetails(id),
  })
}

export function useGamesByCategoryOrTag(category: string) {
  return useQuery({
    queryKey: [`games/${category}`, category],
    queryFn: () => getGamesByCategoryOrTag(category),
  })
}

export function useGamesByPlatform(platform: string) {
  return useQuery({
    queryKey: [`games/platform/${platform}`, platform],
    queryFn: () => getGamesByPlatform(platform),
  })
}

export function useSortedGames(sortBy: string, count: number) {
  return useQuery({
    queryKey: [`games/sort/${sortBy}`, sortBy, count],
    queryFn: () => getSortedGames(sortBy, count),
  })
}

export function useFilteredGames(
  platform: string,
  category: string,
  sortBy: string
) {
  return useQuery<Game[], Error>({
    queryKey: ['games', platform, category, sortBy],
    queryFn: () => getFilteredGames(platform, category, sortBy),
  })
}

export function useGamesByTags(tag: string, platform: string) {
  return useQuery({
    queryKey: [`games/${tag}/${platform}`, tag, platform],
    queryFn: () => getGamesByTags(tag, platform),
  })
}
