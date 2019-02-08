// @flow
import React, { Component } from 'react'

import { Action } from 'components'

import { connect } from 'react-redux'

import { removeProject } from 'modules/projects/actions'

import type { Props } from '/types'

import { DropDownContainer, MainContainer, Content, Tab, Main } from './styles'

class Dropdown extends Component<Props, State> {
  state = {
    active: false,
  }

  toggleDropdown = () => {
    const { active } = this.state
    this.setState({
      active: !active,
    })
  }

  onDeleteProject = (id: number | string) => {
    this.props.removeProject(id)
    this.toggleDropdown()
  }

  render(): React$Element<'div'> {
    const { active } = this.state
    const { onClick, id } = this.props
    return (
      <div>
        <DropDownContainer onClick={this.toggleDropdown}>
          <Action />
        </DropDownContainer>
        {active ? (
          <Main onClick={onClick}>
            <MainContainer>
              <Content>
                <Tab onClick={() => this.onDeleteProject(id)}>Delete project</Tab>
                <Tab>Invite people..</Tab>
              </Content>
            </MainContainer>
          </Main>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default connect(
  null,
  { removeProject }
)(Dropdown)
