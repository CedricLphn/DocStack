import React from 'react';
import { useTheme, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from "../helpers/App"

const AppBarDS: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
    <>
    <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Doc Stack
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      </>
    )
}

export default AppBarDS;