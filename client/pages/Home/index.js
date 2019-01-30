// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { keys } from 'constants'
import { createClient } from 'modules/clients/actions'
import { showModal } from 'modules/modals/actions'

// Components
import { Box } from 'components'

import { Main, Header, Wrapper } from './styles'
import type { Props } from './types'

class Home extends Component<Props> {
  addClient = () => {
    this.props.showModal(keys.modal.client.create, { title: 'Add new Client' })
  }

  render(): React$Element<*> {
    const { clients } = this.props

    return (
      <Main>
        <div className="col-12">
          <Header>Clients</Header>
        </div>
        <div
          style={{
            maxWidth: 900,
            marginLeft: '10%',
            marginTop: 36,
            height: '90%',
            overflowX: 'auto',
          }}
        >
          <div>
            <div className="container">
              <div className="row">
                {clients.map(client => (
                  <div key={client.id} style={{ marginBottom: 36 }} className="col-4">
                    <Box {...client} />
                  </div>
                ))}
                <div className="col-4">
                  <Box addable onClick={() => this.addClient()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.list,
})

// $FlowFixMe
export default connect(
  mapStateToProps,
  { createClient, showModal }
)(Home)
