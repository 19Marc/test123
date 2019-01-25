import React from 'react'

import { UserProfileImage } from 'components'
import { Input, Wrapper } from './styles'

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <Wrapper>
    <label htmlFor={props.id}>
      <UserProfileImage />
    </label>
    <Input {...field} {...props} />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </Wrapper>
)

export default CustomInputComponent
