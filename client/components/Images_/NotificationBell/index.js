import React from 'react'

const NotificationBell = props => (
  <svg width="19px" height="24px" viewBox="0 0 21 25" {...props}>
    <g fillRule="nonzero" fill="none">
      <path d="M10.5 25c1.375 0 2.5-.94 2.5-2.087H8C8 24.061 9.113 25 10.5 25z" fill="#6D7381" />
      <path
        d="M17.625 18.075v-6.324c0-3.883-1.947-7.134-5.344-7.994v-.86C12.281 1.847 11.486 1 10.5 1c-.986 0-1.781.847-1.781 1.897v.86c-3.408.86-5.344 4.098-5.344 7.994v6.324L1 20.605v1.265h19v-1.265l-2.375-2.53z"
        stroke="#6D7381"
      />
    </g>
  </svg>
)

export default NotificationBell
