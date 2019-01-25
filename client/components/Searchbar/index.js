// @flow
import React from 'react'

// Components
import { Search } from 'components'

import { Main, SearchInput } from './styles'

const Searchbar = () => (
  <Main>
    <Search />
    <SearchInput type="search" placeholder="Search for Projects, Clients, keywords…" />
  </Main>
)

export default Searchbar
