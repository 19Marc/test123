// @flow
import styled from 'styled-components'

export const Wrapper = styled.div`
  min-width: 250px;
  min-height: 250px;
`

export const WrapperTwo = styled.div`
  min-width: 250px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const StyledBox = styled.div`
  border-radius: 9px;
  background-color: #fff;
  max-height: 250px;
  max-width: 250px;
`

export const ClientPicture = styled.img`
  margin-top: 41px;
  margin-bottom: 18px;
  width: 80px;
  height: 80px;
  border: 1px solid #fff;
  border-radius: 50px;
`
export const ClientName = styled.div`
  font-family: Guillon, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #444444;
  line-height: 1em;
`
export const ClientEmail = styled.div`
  font-family: Guillon, sans-serif;
  font-weight: 300;
  font-size: 11px;
  color: #dbdbdb;
  line-height: 1em;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;
`

export const DeleteButton = styled.button`
  background: #ebedf6;
  width: 47px;
  height: 20px;
  border: 1px solid #ebedf6;
  border-radius: 6px;
  font-family: Guillon, sans-serif;
  font-size: 12px;
  color: #aaacb7;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
`

export const EditButton = styled.button`
  background: #96b9f4;
  width: 35px;
  height: 20px;
  border: 1px solid #96b9f4;
  border-radius: 6px;
  font-family: Guillon, sans-serif;
  font-size: 12px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 51px;
`
