// @flow
import React from 'react'

// Components
import { ArrowUser, UserProfile } from 'components'

import { Main, UserName } from './styles'

const UserSettings = () => (
  <Main>
    <UserProfile style={{ marginLeft: 35, marginRight: 13 }} />
    <UserName>Kevin Dukkon</UserName>
    <ArrowUser style={{ marginLeft: 18 }} />
  </Main>
)

export default UserSettings
