// @flow
import React from 'react'
import { connect } from 'react-redux'

import { TaskModal } from 'components'
import { TaskCreationForm } from 'forms'

const TaskCreation = (props: *): React$Element<'div'> => {
  const { modal } = props

  return (
    <TaskModal title={modal.title}>
      <TaskCreationForm />
    </TaskModal>
  )
}

const mapStateToProps = state => ({
  modal: state.modals,
})

// $FlowFixMe
export default connect(mapStateToProps)(TaskCreation)
