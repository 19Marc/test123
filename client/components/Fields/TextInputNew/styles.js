// @flow
import styled from 'styled-components'

export const Wrapper = styled.div``

export const Group = styled.div`
  margin-top: 10px;
  position: relative;
`

export const Input = styled.input`
  background-color: #f5f5f5;
  border: 1px solid #dbdbdb;
  width: 378px;
  padding: 20px 10px 7px 10px;
  display: block;
  font-family: AktivGrotesk-Regular;
  font-size: 15px;
  color: #4f4f4f;
  letter-spacing: 0;
  outline: none;

  :focus ~ label,
  :valid ~ label {
    top: -0px;
    left: 10px;
    font-family: AktivGrotesk-Regular;
    font-size: 10px;
    color: #9c9c9c;
    letter-spacing: 0;
  }
`

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  color: #9c9c9c;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`
