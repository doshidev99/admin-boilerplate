import { PATH_NAME } from 'configs/constants'
import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { getDataStorage } from 'utils'

const GuestGuard: FC = ({ children }) => {
  const isAuth = Boolean(getDataStorage('token'))
  if (isAuth) return <Redirect to={PATH_NAME.ROOT} />
  return <> {children}</>
}

export default GuestGuard
