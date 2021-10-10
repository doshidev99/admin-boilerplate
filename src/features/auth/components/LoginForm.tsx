import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress } from '@mui/material'
import { styled } from '@mui/styles'
import { useAppSelector } from 'app/hooks'
import { InputField } from 'components/FormFields/InputFields'
import { LoginPayload } from 'models'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface LoginFormProps {
  initialValue: LoginPayload
  onSubmit?: (formValue: LoginPayload) => void
}

const schema = yup.object().shape({
  email: yup.string().email('Adresse e-mail invalide').required('Obligatoire'),
  password: yup.string().required('Obligatoire'),
})

const Wrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  background: theme.palette.background.default,
}))

export const LoginForm: React.FC<LoginFormProps> = ({ initialValue, onSubmit }) => {
  const { logging } = useAppSelector((state) => state.auth)

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = (formValues: LoginPayload) => {
    onSubmit?.(formValues)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="email" label="Email" control={control} />
        <InputField name="password" type="password" label="Mot de passe" control={control} />
        <Box mt="4">
          <Button type="submit" variant="contained" color="primary" disabled={logging}>
            <span>{logging && <CircularProgress size={16} color="primary" />}</span>
            Connexion
          </Button>
        </Box>
      </form>
    </Wrapper>
  )
}
