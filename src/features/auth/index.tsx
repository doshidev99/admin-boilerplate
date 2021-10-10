import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

interface AuthPageProps {}

const AuthPage: React.FC = (props: AuthPageProps) => (
  <Switch>
    <Route path="/" component={LoginPage} />
  </Switch>
)

export default AuthPage
