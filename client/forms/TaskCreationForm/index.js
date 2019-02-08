// @flow
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { keys } from 'constants'
import { connect } from 'react-redux'
import { hideModal } from 'modules/modals/actions'

import { DayPickerino } from 'components'

import renderField from 'components/Fields/TextInputNew'

import type { Props, SubmissionProps, State } from './types'

import { Form, Wrapper, Button } from './styles'

class TaskCreationForm extends Component<Props, State> {
  state = {
    datePickerVisible: false,
    selectedDay: null,
  }

  handleSubmit = (data: SubmissionProps) => {
    console.log(data)
  }

  togglePickerVisible = () => {
    const { datePickerVisible } = this.state
    this.setState({ datePickerVisible: !datePickerVisible })
  }

  handleDayClick = (day: *, { selected }) => {
    const { selectedDay } = this.state
    this.setState({
      selectedDay: selected ? undefined : day,
    })
  }

  render(): React$Element<'div'> {
    const { handleSubmit } = this.props
    const { datePickerVisible, selectedDay } = this.state

    return (
      <div>
        <Wrapper>
          {/* eslint-disable-next-line */}
          <Form initialValues={this.props.initialValues} onSubmit={handleSubmit(this.handleSubmit)}>
            <Field type="text" name="name" component={renderField} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DayPickerino />
              <DayPickerino />
            </div>
            <button type="submit">Add</button>
          </Form>
        </Wrapper>
      </div>
    )
  }
}

export default reduxForm({
  form: keys.form.task.create,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(
  connect(
    null,
    { hideModal }
  )(TaskCreationForm)
)
