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
    // const required = value => (value ? undefined : 'Required')
    // const maxLength = max => value =>
    //   value && value.length > max ? `Must be ${max} characters or less` : undefined
    // const maxLength30 = maxLength(30)
    // const maxLength15 = maxLength(15)
    // const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined)
    // const minValue = min => value => (value && value < min ? `Must be at least ${min}` : undefined)
    // const minValue18 = minValue(18)
    // const email = value =>
    //   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    //     ? 'Invalid email address'
    //     : undefined
    // const tooOld = value => (value && value > 65 ? 'You might be too old for this' : undefined)
    // const aol = value =>
    //   value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined

    // const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    //   <div>
    //     <label>{label}</label>
    //     <div>
    //       <input {...input} placeholder={label} type={type} />
    //       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    //     </div>
    //   </div>
    // )

    return (
      <div>
        <Wrapper>
          <Form initialValues={this.props.initialValues} onSubmit={handleSubmit(this.handleSubmit)}>
            <Field type="hidden" name="clientId" component="input" />
            <Field
              type="text"
              name="name"
              component="input"
              // validate={[required, maxLength30]}
              placeholder="Project Title"
            />
            <Field
              type="text"
              name="description"
              component="input"
              // validate={[required, maxLength15]}
              placeholder="Description"
            />

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
