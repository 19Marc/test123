// @flow
import React from 'react'

import has from 'lodash/has'
import omit from 'lodash/omit'
import { Link } from 'react-router-dom'
import type { Props, RestProps } from './types'
import { Wrapper, StyledButton } from './styles'

export default function Button(allProps: Props): React$Element<'button'> {
  let Tag = 'button'
  const { children, disabled, ...rest } = allProps
  let props: RestProps = rest

  if (has(props, 'to')) {
    Tag = Link
    props = (omit(props, ['href', 'onClick']): RestProps)
  } else if (has(props, 'href')) {
    Tag = 'a'
    props = (omit(props, ['to', 'onClick']): RestProps)
  }

  return (
    <StyledButton as={Tag} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'default',
  paddingSide: 16,
  paddingHeight: 14,
  borderRadius: 8,
}
