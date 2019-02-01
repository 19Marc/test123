// @flow
import React from 'react'

import type { Props } from './types'

const Cross = (props: Props): React$Element<'svg'> => {
  const { width, height } = props
  return (
    <svg width={width} height={height} viewBox="0 0 108 108" {...props}>
      <g stroke="#B8B8B8" fill="none" fillRule="evenodd" opacity={0.507}>
        <path d="M.85 54.5h106.3M54.108 48.492V108 0z" />
      </g>
    </svg>
  )
}

export default Cross
