// @flow
import React from 'react'

// Components
import { Searchbar, Notifications, UserSettings } from 'components'

import {
  Main,
  SearchbarContainer,
  NotificationContainer,
  UserSettingsContainer,
  Wrapper,
} from './styles'

export default function Navbar(): React$Element<*> {
  return (
    <Main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5" />
          <div className="col-7">
            <Wrapper>
              <SearchbarContainer>
                <Searchbar />
              </SearchbarContainer>
              <NotificationContainer>
                <Notifications />
              </NotificationContainer>
              <UserSettingsContainer>
                <UserSettings />
              </UserSettingsContainer>
            </Wrapper>
          </div>
        </div>
      </div>
    </Main>
  )
}
