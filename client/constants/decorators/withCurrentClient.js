// @flow
import { createSelector } from 'reselect'
import { getCurrentClientWithProjects } from 'modules/clients/selectors'
import { connect } from 'react-redux'
import { showModal } from 'modules/modals/actions'

const mapStateToProps = createSelector(
  getCurrentClientWithProjects,
  currentClient => ({ currentClient })
)

// $FlowFixMe
export default connect(
  mapStateToProps,
  { showModal }
)
