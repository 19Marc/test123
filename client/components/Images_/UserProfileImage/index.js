import React from 'react'

const SvgUserProfileImage = props => (
  <svg width="80px" height="80px" viewBox="0 0 100 100" {...props}>
    <defs>
      <rect id="UserProfileImage_svg__a" x={0} y={0} width={100} height={100} rx={50} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="UserProfileImage_svg__b" fill="#fff">
        <use xlinkHref="#UserProfileImage_svg__a" />
      </mask>
      <use fill="#E1E1E1" xlinkHref="#UserProfileImage_svg__a" />
      <rect
        fill="#525252"
        mask="url(#UserProfileImage_svg__b)"
        x={27}
        y={10}
        width={47}
        height={47}
        rx={23.5}
      />
      <path
        d="M-15 113C8.453 81.667 30.76 66 51.921 66c21.161 0 41.558 15.667 61.192 47H-15z"
        fill="#525252"
        mask="url(#UserProfileImage_svg__b)"
      />
    </g>
  </svg>
)

export default SvgUserProfileImage
