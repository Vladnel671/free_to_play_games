import React from 'react'

import GamesCount from './GamesCount'
import RandomGames from './RandomGames'
import SortingSelectors from './SortingSelectors'

import { Separator } from '@/components/ui/separator'
import usePageTitle from '@/hooks/usePageTitle'
import { SortingPanelProps } from '@/types/games'

const GamesSortingPanel: React.FC<SortingPanelProps> = ({
  data,
  gamesCount,
  onPlatformChange,
  onSortChange,
  onCategoryChange,
}) => {
  usePageTitle(`${gamesCount} Free-to-play games found in our games list!`)

  return data ? (
    <div className="overflow-x-hidden xs:flex xs:flex-col">
      <GamesCount gamesCount={gamesCount} />
      <RandomGames data={data} />
      <SortingSelectors
        onCategoryChange={onCategoryChange}
        onPlatformChange={onPlatformChange}
        onSortChange={onSortChange}
      />
      <Separator className="mb-5" />
    </div>
  ) : (
    <div className="min-h-[380px] overflow-x-hidden"></div>
  )
}
export default GamesSortingPanel
