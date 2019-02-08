// @flow
import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
  background-color: #fff;
  width: 415px;
  height: 400px;
  border: 1px solid #fff;
  border-radius: 3px;
`

export const ModalBox = styled.div`
  padding: 19px;
`

export const ModalHeader = styled.div`
  font-family: AktivGrotesk-Regular;
  font-size: 15px;
  color: #4f4f4f;
  letter-spacing: 0;
`

export const ModalContent = styled.div``

export const ModalOverlay = styled.div``
