// @flow
import React, { Component } from 'react'
import { CirclePicker } from 'react-color'

import { Wrapper } from './styles'
import type { Props, State } from './types'

class ColorField extends Component<Props, State> {
  state = {
    visible: true,
    background: '#fff',
  }

  handleChangeComplete = color => {
    this.setState({ background: color.hex })
    this.props.input.onChange(color.hex)
  }

  render(): React$Node {
    const { visible, background } = this.state

    const {
      input,
      meta: { touched, error },
    } = this.props

    return (
      <Wrapper>
        {visible && (
          <CirclePicker
            name="color"
            key="color"
            color={background}
            colors={[
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4caf50',
              '#8bc34a',
              '#cddc39',
            ]}
            onChangeComplete={this.handleChangeComplete}
            {...input}
          />
        )}

        {touched && error && <span>{error}</span>}
      </Wrapper>
    )
  }
}

export default ColorField
