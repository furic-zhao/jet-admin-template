import React, { Fragment, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'
import LoadingPage from '@/components/loading-page'

export default class exceptionLayout extends React.Component {

  getPageTitle() {
    let title = 'CYB Ant Design'
    return title
  }

  render() {
    return (
      <Fragment>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null)
            })}
          </Switch>
        </Suspense>
      </Fragment>
    )
  }
}
