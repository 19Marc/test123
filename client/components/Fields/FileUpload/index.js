// @flow
import React from 'react'

import { UserProfileImage } from 'components'

import { Input, Wrapper } from './styles'
import type { Props } from './types'

const FileUpload = (props: Props): React$Element<'div'> => {
  const {
    input,
    meta: { touched, error },
    id,
  } = props

  return (
    <div>
      <Wrapper>
        <label htmlFor={id}>
          <UserProfileImage />
        </label>

        <Input {...input} {...props} />
      </Wrapper>

      {touched && error && <span>{error}</span>}
    </div>
  )
}

export default FileUpload
