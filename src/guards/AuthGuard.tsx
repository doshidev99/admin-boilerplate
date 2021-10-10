import React, { FC } from 'react'
import { PATH_NAME } from 'configs/constants'
import { Redirect } from 'react-router-dom'
import { getDataStorage } from 'utils'

const AuthGuard: FC = ({ children }) => {
  const isAuth = Boolean(getDataStorage('token'))
  if (!isAuth) return <Redirect to={PATH_NAME.LOGIN} />
  return <>{children}</>
}

export default AuthGuard
