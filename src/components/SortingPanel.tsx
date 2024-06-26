import React from 'react'

import SortingSelectors from './SortingSelectors'

import { Separator } from '@/components/ui/separator'
import { SortingPanelProps } from '@/types/games'

const SortingPanel: React.FC<SortingPanelProps> = ({
  onPlatformChange,
  onSortChange,
  onCategoryChange,
}) => (
  <section className="xs:flex xs:flex-col w-[full]">
    <SortingSelectors
      onCategoryChange={onCategoryChange}
      onPlatformChange={onPlatformChange}
      onSortChange={onSortChange}
    />
    <Separator className="mb-5" />
  </section>
)

export default SortingPanel
