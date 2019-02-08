import React from 'react'

const Action = props => (
  <svg width="1.25em" height="1.25em" viewBox="0 0 8 24" {...props}>
    <defs>
      <filter
        x="-1.2%"
        y="-1.9%"
        width="102.3%"
        height="103.8%"
        filterUnits="objectBoundingBox"
        id="Dropdown_svg__a"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={1} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      filter="url(#Dropdown_svg__a)"
      transform="translate(-309 -19)"
      fill="#A0A3A8"
      fillRule="evenodd"
    >
      <path d="M312 21h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
    </g>
  </svg>
)

export default Action
