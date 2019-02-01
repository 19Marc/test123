// @flow
import React, { Component } from 'react'

import withCurrentClient from 'constants/decorators/withCurrentClient'
import { keys } from 'constants'
import { Card, Button } from '../../../../globalComponents'

import type { Props } from './types'
import { Wrapper } from './styles'

class ProjectsDashboard extends Component<Props> {
  addProject = () => {
    this.props.showModal(keys.modal.project.create, {
      title: 'Add new Project',
      data: { clientId: this.props.currentClient.id },
    })
  }

  // if (typeof currentClient.projects === 'undefined' || currentClient.projects == null)
  //   return (
  //     <Wrapper>
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
  //             <EmptyProjectBox />
  //           </div>
  //         </div>
  //       </div>
  //     </Wrapper>
  //   )
  render(): React$Element<*> {
    const { currentClient } = this.props

    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            {currentClient.projects.map(project => (
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <Card {...project} title={project.name}>
                  {project.description}
                </Card>
              </div>
            ))}
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <Card addable onClick={() => this.addProject()} />
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default withCurrentClient(ProjectsDashboard)
