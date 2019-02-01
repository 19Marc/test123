// @flow

import styled, { css } from 'styled-components'
import { colors } from 'constants'
import { rgba } from 'polished'

const backgroundColors = {
  default: colors.primary,
  disabled: colors.shadeBeta,
}

const fontColors = {
  default: colors.white,
  disabled: colors.shadeBeta,
}

export const Wrapper = styled.div`
  width: 0px;
  height: 0px;
`

export const StyledButton = styled.button`
  display: block;
  border: 1px solid ${(props: { variant: string }) => backgroundColors[props.variant]};
  background-color: ${(props: { variant: string }) => backgroundColors[props.variant]};
  color: ${(props: { variant: string }) => fontColors[props.variant]};
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 14px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  outline: none;
  appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: opacity 100ms linear;
  ${(props: { paddingSide: number, paddingHeight: number }) =>
    props.paddingSide &&
    props.paddingHeight &&
    css`
      padding: ${props.paddingHeight}px ${props.paddingSide}px;
    `};
  ${(props: { borderRadius: number }) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius}px;
    `}
  ${(props: { variant: string, disabled: boolean }) =>
    props.disabled &&
    css`
      opacity: 0.9;
      cursor: not-allowed;
      background-color: ${colors.shadeBeta};
      color: ${rgba(colors.white, 0.95)};
    `};
`
