import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Skeleton } from '@/components/ui/skeleton'
import { GameImageType } from '@/types/games'

const LazyImage: React.FC<GameImageType> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const handleImageLoad = () => {
    setLoaded(true)
  }

  return (
    <div ref={ref}>
      {inView ? (
        <img
          className={`game-img transition-opacity duration-300 ${className} ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
        />
      ) : (
        <Skeleton className="absolute inset-0 flex w-full" />
      )}
    </div>
  )
}

export default LazyImage
