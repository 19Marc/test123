// @flow
import React, { Component } from 'react'

import type { Props } from './types'

import { Wrapper, Input, Label, Group } from './styles'

export default class renderField extends Component<Props, State> {
  render(): React$Element<'div'> {
    const {
      input,
      meta: { touched, error },
    } = this.props
    return (
      <Wrapper>
        <Group>
          <Input {...input} type="text" required />
          <Label>Choose a task name</Label>
          {touched && error && <span className="error">{error}</span>}
        </Group>
      </Wrapper>
    )
  }
}
