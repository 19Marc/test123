// @flow
import React from 'react'
import { connect } from 'react-redux'

import { Modal } from 'components'
import { ProjectCreationForm } from 'forms'

const ProjectCreation = (props: *): React$Element<'div'> => {
  const { modal } = props

  return (
    <Modal title={modal.title}>
      <ProjectCreationForm initialValues={modal.data} />
    </Modal>
  )
}

const mapStateToProps = state => ({
  modal: state.modals,
})

// $FlowFixMe
export default connect(mapStateToProps)(ProjectCreation)
