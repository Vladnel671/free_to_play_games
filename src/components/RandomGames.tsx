import React from 'react'
import { Link } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => (
  <section className="xl:px-0 flex lg:h-[200px] items-center xs2:h-[750px] md:flex-row xs4:h-[800px] xs3:h-[860px] xs:h-[600px] xs1:h-[680px] sm:pl-5 sm:pr-5 sm:flex-row sm:flex-wrap sm:h-[320px] xs:w-[320px] md:flex-wrap justify-between xl:w-[1200px] xs:flex-col md:pl-5 md:pr-5 md:h-[450px]">
    {data?.map((game) => (
      <article key={game.id}>
        <div className="transition-transform duration-300 transform hover:scale-105 shadow-lg dark:shadow-soft-dark game-link rounded-md flex game-container">
          <Link
            to={`/games/game/${game.id}`}
            className="relative h-[168px] w-[300px]"
            draggable="false"
          >
            <LazyImage src={game.thumbnail} alt={game.title} />
            <div className="game-title">{game.title}</div>
          </Link>
        </div>
      </article>
    ))}
    {!data && (
      <div className="xs:min-[620px] min-h-[380px] overflow-x-hidden"></div>
    )}
  </section>
)

export default RandomGames
