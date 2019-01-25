// @flow
import React from 'react'
import { connect } from 'react-redux'

import * as Modals from 'modals'

import type { Props } from './types'

const ModalBundler = (props: Props): React$Element<'div'> => {
  const { activeModal } = props
  const Modal = Modals[activeModal]

  return <div>{Modal && <Modal />}</div>
}

const mapStateToProps = state => ({
  activeModal: state.modals.active,
})

// $FlowFixMe
export default connect(mapStateToProps)(ModalBundler)
