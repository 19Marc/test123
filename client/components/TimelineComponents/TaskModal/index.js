// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showModal, hideModal } from 'modules/modals/actions'

import { ModalContainer, ModalBox, ModalHeader, ModalContent } from './styles'

import type { Props, State } from './types'

class TaskModal extends Component<Props, State> {
  state = {
    active: false,
  }

  render(): React$Element<'div'> {
    const { title, children } = this.props

    // TODO: set onMouseMove in reduxState
    // TODO: get Mouse position and set position (top,left) to mouse position

    return (
      <ModalContainer>
        <ModalBox>
          <ModalHeader>
            <h3 style={{ padding: 0, margin: 0 }}>Add new Task</h3>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalBox>
      </ModalContainer>
    )
  }
}

export default connect(
  null,
  { showModal, hideModal }
)(TaskModal)
