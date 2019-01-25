// @flow
import styled, { keyframes } from 'styled-components'

const testKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`

export const Main = styled.div`
  margin-top: 50px;
`

export const AccountBox = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #c0c9df;
  box-shadow: 0 2px 4px 0 #d5d8e6;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
`

export const Title = styled.div`
  padding-left: 16px;
  font-weight: 400;
  font-family: Open Sans;
  font-size: 14px;
  color: #9fa2a9;
`

export const Context = styled.div`
  padding-left: 10px;
  font-family: Open Sans;
  font-size: 14px;
  color: #595b62;
  font-weight: 400;
`

export const Icon = styled.div`
  padding-left: 20px;
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
  padding-left: 20px;
`

export const Text = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  color: #b7b9c2;
  letter-spacing: 0;
  text-align: left;
  font-weight: 400;
`

export const Popup = styled.div`
  position: absolute;
  margin-top: 7px;
  background-color: #ffffff;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
  width: 219px;
  animation: ${testKeyframe} 200ms ease;

  &:before,
  &:after {
    bottom: 100%;
    left: 20%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
    border-width: 5px;
    margin-left: -5px;
  }

  &:before {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 6px;
    margin-left: -6px;
  }
`
