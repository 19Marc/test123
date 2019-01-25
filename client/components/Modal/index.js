// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showModal, hideModal } from 'modules/modals/actions'

import { ModalContainer, ModalBox, ModalHeader, ModalOverlay, Border, ModalContent } from './styles'

import type { Props, State } from './types'

class Modal extends Component<Props, State> {
  state = {
    active: false,
  }

  componentDidMount() {}

  hideModal = () => {
    this.props.hideModal()
  }

  render(): React$Element<'div'> {
    const { title, children } = this.props

    return (
      <ModalContainer>
        <ModalBox>
          {title && (
            <ModalHeader>
              {title}
              <Border />
            </ModalHeader>
          )}

          <ModalContent>{children}</ModalContent>
        </ModalBox>

        <ModalOverlay onClick={this.hideModal} />
      </ModalContainer>
    )
  }
}

export default connect(
  null,
  { showModal, hideModal }
)(Modal)
