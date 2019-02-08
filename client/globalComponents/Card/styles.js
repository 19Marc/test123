// @flow
import styled from 'styled-components'
import { colors } from 'constants'

const backgroundColor = {
  default: colors.white,
}

const fontColor = {
  default: colors.black,
}

export const CardContainer = styled.div`
  background-color: ${(props: { variant: string }) => backgroundColor[props.variant]};
  color: ${(props: { variant: string }) => fontColor[props.variant]};
  text-decoration: none;
  border-radius: 12px;
  // overflow: hidden;
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  outline: none;
  appearance: none;
  width: 344px;
  height: 209px;
  padding: 15px 20px;
`
export const DropDown = styled.div`
  text-align: center;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`

export const Icon = styled.div`
  background-color: #1a40d4;
  width: 10px;
  height: 10px;
  border: 1px solid #1a40d4;
  border-radius: 50px;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
`

export const ProjectTitle = styled.div`
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #000;
  letter-spacing: 0;
  text-align: left;
  margin-left: 20px;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
`

export const Content = styled.div`
  text-align: left;
  max-width: 90%;
  margin-top: 15px;
  margin-bottom: 20px;
`

export const Description = styled.div`
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  letter-spacing: 0;
  text-align: left;
  line-height: 24px;
`
export const Wrapper = styled.div`
  display: flex;
  height: 100%
  align-items: center;
  justify-content: center;
`
