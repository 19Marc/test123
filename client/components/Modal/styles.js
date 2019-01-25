// @flow
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

const ModalAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ModalContainer = styled.div`
  animation: 400ms ${ModalAppear} ease-in-out;
`

export const ModalBox = styled.div`
  z-index: 100;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 425px;
  height: 600px;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 0 2px 24px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Guillon-Regular;
  font-size: 32px;
  color: #77797e;
  letter-spacing: 0;
  margin-top: 25px;
`

export const ModalContent = styled.div``

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${rgba('#000', 0.4)};
`

export const Border = styled.div`
  margin-top: 12px;
  width: 279px;
  height: 1px;
  background-color: #e2e2e2;
`
