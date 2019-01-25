import React from 'react'

const Time = props => (
  <svg width="24px" height="20px" viewBox="0 0 24 20" {...props}>
    <g fillRule="nonzero" fill="none">
      <rect fill="#6D7381" opacity={0.5} y={8} width={21} height={12} rx={6} />
      <circle fill="#6D7381" cx={14} cy={10} r={10} />
      <path stroke="#B0B3BC" strokeWidth={2} strokeLinecap="round" d="M20 11h-7V4" />
    </g>
  </svg>
)

export default Time
