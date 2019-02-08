// @flow
import React from 'react'

import { Cross, DropDownAction } from 'components'
import {
  CardContainer,
  Header,
  Icon,
  ProjectTitle,
  DropDown,
  Content,
  Description,
  Wrapper,
} from './styles'
import { Button } from '..'

import type { Props } from './types'

export default function Card(props: Props): React$Element<'div'> {
  const { children, title, addable, id } = props
  return (
    <div>
      {!addable ? (
        <CardContainer {...props}>
          <Header>
            <Icon />
            <ProjectTitle>{title}</ProjectTitle>
            <DropDown>
              <DropDownAction id={id} />
            </DropDown>
          </Header>
          <Content>
            <Description>{children}</Description>
          </Content>
          <Button paddingSide={35} paddingHeight={10}>
            View timeline
          </Button>
        </CardContainer>
      ) : (
        <CardContainer {...props}>
          <Wrapper>
            <Cross width="50px" height="50px" />
          </Wrapper>
        </CardContainer>
      )}
    </div>
  )
}

Card.defaultProps = {
  variant: 'default',
}
