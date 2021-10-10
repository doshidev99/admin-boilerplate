import React from 'react'

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  PaletteMode,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { WithStyles, withStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'

import defaultAvatar from 'assets/images/default-avatar.png'
import logo from 'assets/images/logo.svg'

import { useGlobalContext } from 'context/GlobalContext'

import { removeAllDataStorage } from 'utils'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.125rem',
    fontWeight: 600,
  },

  logo: {
    width: 160,
    height: 60,
  },
  avatar: {
    width: 42.75,
    height: 42.75,
  },
})

export const Header = withStyles(styles)((props: WithStyles<typeof styles>) => {
  const { classes } = props
  const theme = useTheme()

  const history = useHistory()
  const hasMatches = useMediaQuery(theme.breakpoints.down('lg'))

  const { modeTheme, setModeTheme } = useGlobalContext() as {
    modeTheme: PaletteMode
    setModeTheme: (param: string) => void
  }

  const handleLogout = () => {
    removeAllDataStorage()
    history.push('/login')
  }

  const onSetMode = () => {
    if (modeTheme === 'light') {
      setModeTheme('dark')
    } else {
      setModeTheme('light')
    }
  }

  return (
    <Box className={classes.root}>
      <Box sx={{ color: 'text.primary', fontSize: 16, verticalAlign: 'sub' }}>hello world!</Box>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          {!hasMatches && (
            <Typography variant="h2" className={classes.title}>
              Hello Wish a good day !
            </Typography>
          )}
          <Box display="flex" alignItems="center" justifyContent="flex-end" flex={1}>
            <Avatar alt="Remy Sharp" src={defaultAvatar} />
            <Box paddingLeft={2}>
              <Typography variant="h6">Super Admin</Typography>
              <Typography variant="subtitle2">Admin</Typography>
            </Box>
            <Switch defaultChecked onChange={onSetMode} />
            <Box paddingLeft={2}>
              <Button color="primary" variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
})
