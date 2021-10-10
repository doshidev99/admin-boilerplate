import React from 'react'
import { Box, Typography } from '@mui/material'
import { LoginPayload } from 'models'
import { useHistory } from 'react-router-dom'

import { setDataStorage } from 'utils'
import { LoginForm } from '../components'
import * as S from './styles'

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  const history = useHistory()

  const initialValue: LoginPayload = {
    email: '',
    password: '',
  }

  const handleLogin = (values: LoginPayload) => {
    setTimeout(() => {
      setDataStorage('token', 'test')
      history.push('/')
    }, 2000)
  }

  return (
    <>
      <S.Bg minHeight="100%" width="100%" position="fixed" top="0" left="0" />
      <S.FormLogin>
        <Typography color="primary" component="h2">
          Welcome to Admin site
        </Typography>
        <Box mt={3}>
          <LoginForm initialValue={initialValue} onSubmit={handleLogin} />
        </Box>
      </S.FormLogin>
    </>
  )
}

export default LoginPage
