// @flow
import styled from 'styled-components'

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  width: 32px;
  height: 32px;
  border-radius: 6px;

  &:hover {
    transition: background 300ms ease;
    background-color: #eeeeee;
  }
`

export const Main = styled.div`
  position: absolute;
  top: 30%;
  right: -30%;
  width: 172px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;
  z-index: 1;
  box-shadow: 0 0px 9px 0 rgba(0, 0, 0, 0.5);

  &:before,
  &:after {
    bottom: 100%;
    left: 15%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 10px;
    position: absolute;
    pointer-events: none;
  }

  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-bottom-color: #fff;
    border-width: 5px;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  margin: 2px 0px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #b7b9c2;

  &:hover {
    transition: background 300ms ease;
    background-color: #f0f0f0;
  }
`
