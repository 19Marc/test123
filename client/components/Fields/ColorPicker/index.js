// @flow
import React, { Component } from 'react'
import { CirclePicker } from 'react-color'
import { setFieldValue } from 'formik'

import { Wrapper } from './styles'

class ColorField extends Component<Props, State> {
  state = {
    visible: true,
    background: '#fff',
  }

  handleChangeComplete = color => {
    const { field } = this.props

    this.setState({ background: color.hex })
    this.context.formik.setFieldValue(color, color)
  }

  render(): React$Node {
    const { visible, background } = this.state

    const {
      field,
      form: { touched, errors },
      ...props
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
            {...field}
            {...props}
          />
        )}
        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </Wrapper>
    )
  }
}

export default ColorField
