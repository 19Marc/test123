// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'

import { CirclePicker } from 'react-color'

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

const ClientCreationForm = (props: *) => (
  <div>
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          props.createClient(
            'https://uinames.com/api/photos/male/20.jpg',
            values.name,
            values.email,
            values.color
          )
          actions.setSubmitting(false)
        }, 1000)
      }}
      render={formikProps => (
        <Wrapper>
          <Form onSubmit={formikProps.handleSubmit}>
            <Field type="file" component={FileUpload} name="image" id="image" />
            <Paragraph>Select an image for your client.</Paragraph>
            <Field
              type="name"
              component={TextInput}
              name="name"
              id="name"
              placeholder="New client name..."
            />
            <Field
              type="email"
              component={TextInput}
              name="email"
              id="email"
              placeholder="New client email..."
            />
            <ColorWrapper>
              <ColorParagraph>Choose a primary color for your client task’s</ColorParagraph>
              <Field component={ColorField} name="color" />
            </ColorWrapper>
            <ButtonWrapper>
              <Cancel type="button" onClick={props.hideModal}>
                Cancel
              </Cancel>
              <Add type="submit">Add</Add>
            </ButtonWrapper>
          </Form>
        </Wrapper>
      )}
    />
  </div>
)

export default connect(
  null,
  { createClient, hideModal }
)(ClientCreationForm)
