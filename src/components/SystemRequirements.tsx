import React from 'react'

import { requirements } from '@/constants'
import { SystemRequirementsProps } from '@/types/games'

const SystemRequirements: React.FC<SystemRequirementsProps> = ({ data }) => {
  if (!data.minimum_system_requirements) {
    return null
  }
  return (
    <section>
      <ul className="list-none mb-5 my-3 [&>li]:mt-2 text-sm sm:flex sm:flex-col">
        {requirements &&
          requirements.map((req) => (
            <li key={req.key}>
              {req.name}:{' '}
              {data.minimum_system_requirements[req.key] || 'Not specified'}
            </li>
          ))}
      </ul>
    </section>
  )
}

export default SystemRequirements
