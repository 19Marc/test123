// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { keys } from 'constants'

import { hideModal } from 'modules/modals/actions'
import { createProject } from 'modules/projects/actions'

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
import type { Props, SubmissionProps } from './types'

class ProjectCreationForm extends Component<Props> {
  handleSubmit = (data: SubmissionProps) => {
    const { clientId, name, description } = data
    this.props.createProject(clientId, name, description)
    console.log(`Successfully created ${name} project.`)
  }

  render(): React$Element<'div'> {
    const { handleSubmit } = this.props

    return (
      <div>
        <Wrapper>
          <Form initialValues={this.props.initialValues} onSubmit={handleSubmit(this.handleSubmit)}>
            <Field type="hidden" name="clientId" component="input" />
            <Field type="text" name="name" component="input" placeholder="Project Title" />
            <Field type="text" name="description" component="input" placeholder="Description" />
            <Add type="submit">Add</Add>
          </Form>
        </Wrapper>
      </div>
    )
  }
}

export default reduxForm({
  form: keys.form.project.create,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(
  connect(
    null,
    { createProject }
  )(ProjectCreationForm)
)
