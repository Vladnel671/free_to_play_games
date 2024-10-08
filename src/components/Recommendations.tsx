import React from 'react'

import RandomGames from './RandomGames'

import { RandomGamesProps } from '@/types/games'

const Recommendations: React.FC<RandomGamesProps> = ({ data }) => (
  <section className="w-[full] flex flex-col mb-5">
    <h3 className="scroll-m-20 xxs:break-words pb-5 text-2xl font-semibold tracking-tight first:mt-0">
      Personalized Recommendations
    </h3>
    <RandomGames data={data} />
  </section>
)

export default React.memo(Recommendations)
