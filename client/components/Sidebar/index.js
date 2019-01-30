// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getClients } from 'modules/clients/actions'

import { FintoryLogo, AccountBar, Trennstrich, Radio } from 'components'
import * as Icons from 'components/Images_'
import type { Props, ItemProps, State } from './types'
import {
  Container,
  AccountContainer,
  MapNavContainer,
  Logo,
  LogoContainer,
  Title,
  TextContainer,
  StyledLink,
  ClientsNavContainer,
  Header,
  Wrapper,
} from './styles'

class Sidebar extends Component<Props, State> {
  state = {
    navbarItems: [
      { id: '1', title: 'Home', icon: 'Home', to: '/' },
      { id: '2', title: 'Calendar', icon: 'Time', to: '/client/calendar' },
    ],
  }

  render(): React$Node {
    const { navbarItems } = this.state
    const { clients } = this.props

    return (
      <Container>
        <Logo>
          <LogoContainer>
            <FintoryLogo />
            <Title>line up</Title>
          </LogoContainer>
        </Logo>
        <AccountContainer>
          <AccountBar />
        </AccountContainer>
        <MapNavContainer>
          {navbarItems.map(
            (item: *): React$Element<'div'> => {
              const Icon = Icons[item.icon]
              return (
                <div key={item.id} style={{ marginBottom: 7 }}>
                  <StyledLink to={item.to}>
                    {Icon && <Icon />}
                    <TextContainer>{item.title}</TextContainer>
                  </StyledLink>
                </div>
              )
            }
          )}
        </MapNavContainer>
        <ClientsNavContainer>
          <Trennstrich />
          <Header>Kunden</Header>
          {clients.map(
            (client: ItemProps): React$Element<'div'> => (
              <Wrapper>
                <Radio />
                <div
                  style={{
                    marginLeft: 14,
                    fontFamily: 'Guillon-Regular, sans-serif',
                    fontSize: 14,
                    color: '#AAAAAA',
                    marginTop: 4,
                  }}
                >
                  {client.name}
                </div>
              </Wrapper>
            )
          )}
        </ClientsNavContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.list,
})

// $FlowFixMe
export default connect(mapStateToProps)(Sidebar)
