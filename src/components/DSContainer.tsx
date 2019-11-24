import React from 'react';
import classes from '*.module.css';
import AppBarDS from './AppBarDS';
import { Container, Grid, Paper, Typography, useTheme } from '@material-ui/core';
import LeftBar from './LeftBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from "../helpers/App";



const DSContainer = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <AppBarDS />
        <Container className={classes.container}>
          
        <Grid container spacing={4}>
          <LeftBar />
          <Grid item xs={8}>
            <Paper className={classes.paper}>
            <Typography component="p">
                {props.children}
            </Typography>
            </Paper>
          </Grid>
        </Grid>
        </Container>
        <Grid container>
        <Grid item xs={12} style={{textAlign: "center", color: theme.palette.text.secondary}}>
          Propulsed by Doc Stack with <FavoriteIcon color="error" fontSize="small" />
        </Grid>
        </Grid>
      </div>
    )
}

export default DSContainer;