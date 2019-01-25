// @flow
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  grid-area: sidebar;
  padding: 0px 0px 0px 32px;
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 28px;
  color: #474747;
  letter-spacing: -1.68px;
  text-align: left;
  font-weight: 400;
  padding-left: 18px;
`

export const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 36px;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const AccountContainer = styled.div`
  width: 100%;
`
export const MapNavContainer = styled.div`
  width: 100%;
  margin-top: 47px;
`
export const StyledLink = styled(NavLink)`
  display: flex;
  width: 250px;
  height: 45px;
  align-items: center;
  justify-content: flex-start;
  font-family: Guillon, sans-serif;
  font-size: 14px;
  color: #595b62;
  text-decoration: none;
  margin-left: -30px;
  padding-left: 30px;
  font-weight: 400;
  border: 1px solid #f4f5fa;
  border-radius: 0px 50px 50px 0px;
  transition: all 150ms ease;

  :hover {
    background-color: #e6e9f4;
    border: 1px solid #e6e9f4;
    border-radius: 0px 50px 50px 0px;
  }
`

export const TextContainer = styled.div`
  margin-top: 5px;
  padding-left: 16px;
`

export const ClientsNavContainer = styled.div`
  margin-top: 82px;
  position: absolute;
  left: 0;
`

export const Header = styled.div`
  position: relative;
  top: -17px;
  left: 37px;
  font-family: Guillon-Regular;
  font-size: 13px;
  color: #9fa2a9;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 20px;
`
