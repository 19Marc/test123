// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { CirclePicker } from 'react-color'

import { keys } from 'constants'

import { hideModal } from 'modules/modals/actions'
import { createClient } from 'modules/clients/actions'

import { ColorField, FileUpload, TextInput } from 'components'
import {
  Wrapper,
  Paragraph,
  Add,
  Cancel,
  ButtonWrapper,
  Form,
  ColorParagraph,
  ColorWrapper,
} from './styles'

class ClientCreationForm extends Component<Props, State> {
  handleSubmit = (values, actions) => {
    setTimeout(() => {
      this.props.createClient(
        'https://uinames.com/api/photos/male/20.jpg',
        values.name,
        values.email,
        values.color
      )
      actions.setSubmitting(false)
    }, 1000)
  }

  render(): React$Element<'div'> {
    const { handleSubmit } = this.props

    return (
      <div>
        <Wrapper>
          <Form onSubmit={handleSubmit(this.handleSubmit)}>
            <Field type="file" name="image" id="image" component={FileUpload} />
            <Paragraph>Select an image for your client.</Paragraph>
            <Field name="name" component={TextInput} placeholder="New client name..." />
            <Field
              type="email"
              name="email"
              component={TextInput}
              placeholder="New client email..."
            />
            <ColorWrapper>
              <ColorParagraph>Choose a primary color for your client tasks</ColorParagraph>
              <Field name="color" component={ColorField} />
            </ColorWrapper>
            <ButtonWrapper>
              <Cancel type="button" onClick={this.props.hideModal}>
                Cancel
              </Cancel>
              <Add type="submit">Add</Add>
            </ButtonWrapper>
          </Form>
        </Wrapper>
      </div>
    )
  }
}

export default reduxForm({
  form: keys.form.client.create,
  enableReinitialize: true,
})(
  connect(
    null,
    { createClient, hideModal }
  )(ClientCreationForm)
)
