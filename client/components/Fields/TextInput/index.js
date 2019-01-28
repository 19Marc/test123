// @flow
import React from 'react'

import { Input } from './styles'
import type { Props } from './types'

const TextInput = (props: Props): React$Element<'div'> => {
  const {
    input,
    meta: { touched, error },
    placeholder,
  } = props

  return (
    <div>
      <Input {...input} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export default TextInput
