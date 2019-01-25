// @flow
import React, { Component } from 'react'

import { Rectangle } from 'components'
import { Main, AccountBox, Title, Context, Content, Icon, Popup, Container, Text } from './styles'

class AccountBar extends Component<Props, State> {
  state = {
    visible: false,
  }

  handlePopupMenu = () => {
    const { visible } = this.state

    this.setState({
      visible: !visible,
    })
  }

  render(): React$Node {
    const { visible } = this.state

    return (
      <Main>
        <AccountBox onClick={this.handlePopupMenu}>
          <Content>
            <Title>All Accounts:</Title>
            <Context>Chris K.</Context>
            <Icon>
              <Rectangle />
            </Icon>
          </Content>
        </AccountBox>
        {visible ? (
          <Popup>
            <Container>
              <Text>Create new account...</Text>
            </Container>
          </Popup>
        ) : (
          ''
        )}
      </Main>
    )
  }
}

export default AccountBar
