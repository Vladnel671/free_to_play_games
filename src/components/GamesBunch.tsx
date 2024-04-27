import React, { lazy, Suspense } from 'react'

import FetchingLoader from './shared/FetchingLoader'

import { GamesBunchProps } from '@/types/games'

const GamesBunchItem = lazy(() => import('./GamesBunchItem'))

const GamesBunch: React.FC<GamesBunchProps> = ({ data }) => (
  <section className="grid min-h-screen grid-cols-4 gap-3 w-[full] flex-row">
    <Suspense fallback={<FetchingLoader />}>
      {data?.map((game) => <GamesBunchItem key={game.id} game={game} />)}
    </Suspense>
  </section>
)

export default GamesBunch
