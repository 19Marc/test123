// @flow
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import config from 'app/config'

import { Navbar, Sidebar, ModalBundler } from 'components'

import GlobalStyleTag, { Main } from './styles'

import Home from '../Home'
import Projects from '../Projects'

function Root(): React$Element<*> {
  return (
    <Fragment>
      <GlobalStyleTag />
      <Helmet
        defaultTitle={config('projectName').toString()}
        titleTemplate={`${config('projectName').toString()} — %s`}
      >
        <html key="html" lang="en" amp />
        {config('defaultMetaTags.enabled') && [
          <meta key="keywords" name="keywords" content={config('defaultMetaTags.keywords')} />,
          <meta key="title" name="title" content={config('defaultMetaTags.title')} />,
          <meta key="robots" name="robots" content={config('defaultMetaTags.robots')} />,
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@2.4.1/css/grid.min.css"
          />,
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
            rel="stylesheet"
          />,
          <meta
            key="description"
            name="description"
            content={config('defaultMetaTags.description')}
          />,
          config('defaultMetaTags.openGraphEnabled') && [
            <meta key="ogTitle" property="og:title" content={config('defaultMetaTags.title')} />,
            <meta key="ogType" property="og:type" content={config('defaultMetaTags.type')} />,
            <meta
              key="ogDescription"
              property="og:description"
              content={config('defaultMetaTags.description')}
            />,
            <meta
              key="ogSiteName"
              property="og:site_name"
              content={config('defaultMetaTags.siteName')}
            />,
          ],
        ]}
      </Helmet>
      <Main>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:client/projects" component={Projects} />
          {/* <Route exact path="/calendar" component={Calendar} /> */}
        </Switch>

        <ModalBundler />
      </Main>
    </Fragment>
  )
}

export default hot(module)(Root)
