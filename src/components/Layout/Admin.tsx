import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { Header } from 'components/Common'
import React from 'react'

const Wrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.default,
}))

export const AdminLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Box>
      <Header />
    </Box>
    <Box>
      <Box px={6.5} py={3.75}>
        {children}
      </Box>
    </Box>
  </Wrapper>
)
