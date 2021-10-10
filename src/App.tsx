import React, { Fragment } from 'react'
import { routes } from 'routes'
import { IRoutes } from 'models'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoutes, idx: number) => {
          const Guard = route.guard || Fragment
          const Layout = route.layout || Fragment
          const Component = route.component || Fragment
          return (
            <Route
              key={`route-${idx}`}
              path={route.path}
              exact={route.exact}
              render={(props: any) => (
                <Guard>
                  <Layout>
                    <Component {...props} />
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
