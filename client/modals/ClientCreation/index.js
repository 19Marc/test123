// @flow
import React from 'react'
import { connect } from 'react-redux'

import { Modal } from 'components'
import { ClientCreationForm } from 'forms'

const ClientCreation = (props: *): React$Element<'div'> => {
  const { modal } = props

  return (
    <Modal title={modal.title}>
      <ClientCreationForm />
    </Modal>
  )
}

const mapStateToProps = state => ({
  modal: state.modals,
})

// $FlowFixMe
export default connect(mapStateToProps)(ClientCreation)
