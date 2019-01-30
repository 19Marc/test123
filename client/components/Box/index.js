// @flow
import React from 'react'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { removeClient } from 'modules/clients/actions'

import { Cross } from 'components'

import styled from 'styled-components'
import {
  StyledBox,
  ClientPicture,
  ClientName,
  ClientEmail,
  Footer,
  DeleteButton,
  EditButton,
  WrapperTwo,
  Wrapper,
  InfoContainer,
} from './styles'
import type { Props } from './types'

const Box = (props: Props): React$Element<*> => {
  const { addable, id, image, name, email, color, slug, onClick } = props

  const Status = styled.div`
    background-color: ${color};
    width: 18px;
    height: 18px;
    border: 1px solid ${color};
    border-radius: 50px;
  `
  return (
    <StyledBox>
      {addable ? (
        <WrapperTwo onClick={onClick}>
          <Cross />
        </WrapperTwo>
      ) : (
        <Wrapper onClick={onClick}>
          <NavLink style={{ textDecoration: 'none' }} to={`client/${slug}/projects`}>
            <InfoContainer>
              <ClientPicture src={image} alt="" />
              <ClientName>{name}</ClientName>
              <ClientEmail>{email}</ClientEmail>
            </InfoContainer>
          </NavLink>
          <Footer>
            <div style={{ paddingBottom: 4 }}>
              <EditButton type="button" onClick={() => false}>
                Edit
              </EditButton>
              <DeleteButton type="button" onClick={() => props.removeClient(id)}>
                Delete
              </DeleteButton>
            </div>
            <Status />
          </Footer>
        </Wrapper>
      )}
    </StyledBox>
  )
}

export default connect(
  null,
  { removeClient }
)(Box)
