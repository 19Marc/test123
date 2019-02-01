// @flow
import React, { Component } from 'react'

import { Action } from 'components'

import { DropDownContainer } from './styles'

class Dropdown extends Component<Props, State> {
  state = {
    active: false,
  }

  render(): React$Element<'div'> {
    return (
      <DropDownContainer>
        <Action />
      </DropDownContainer>
    )
  }
}

export default Dropdown
