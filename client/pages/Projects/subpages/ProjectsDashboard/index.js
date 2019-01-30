// @flow
import React from 'react'
import find from 'lodash/find'
import { connect } from 'react-redux'

const ProjectsDashboard = (props: *): React$Element<'div'> => {
  const { currentClient, clients } = props
  return (
    <div>
      {clients.map(
        (client: *): React$Element<'div'> => (
          <div>
            <div
              style={{
                marginLeft: 14,
                fontFamily: 'Guillon-Regular, sans-serif',
                fontSize: 14,
                color: '#AAAAAA',
                marginTop: 4,
              }}
            >
              {client.projects.name}
            </div>
          </div>
        )
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  currentClient: find(state.clients.list, { slug: ownProps.match.params.slug }),
  clients: state.clients.list.projects,
})

export default connect(mapStateToProps)(ProjectsDashboard)
