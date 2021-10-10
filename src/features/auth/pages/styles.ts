import bgImage from 'assets/images/bg-auth.svg'
import { styled } from '@mui/styles'
import { Box } from '@mui/material'

export const Bg = styled(Box)(({ theme }) => ({
  minWidth: 1024,
  zIndex: -1,
  background: `url(${bgImage}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  '&:after': {
    content: "''",
    display: 'block',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}))

export const FormLogin = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.palette.background.default,
  maxWidth: 651,
  width: '100%',
  padding: '29px 54px',
  textAlign: 'center',
  borderRadius: 'max(0px, min(8px, calc((100vw - 4px - 100%) * 9999)))',
}))
