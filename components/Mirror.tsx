import * as React from 'react'
import {
  PlasmicComponent,
  usePlasmicCanvasContext,
} from '@plasmicapp/loader-nextjs'

export const Mirror = ({
  componentId,
  className,
}: {
  componentId?: string
  className?: string
}) => {
  const inEditor = !!usePlasmicCanvasContext()
  const resolvedId = componentId?.trim() || undefined

  if (!resolvedId) {
    if (!inEditor) {
      return null
    }

    return (
      <div
        className={`border border-dashed border-gray-300 p-4 text-center text-sm text-gray-500 ${className ?? ''}`}
      >
        blink Mirror: no component configured
      </div>
    )
  }

  return <PlasmicComponent component={resolvedId} />
};