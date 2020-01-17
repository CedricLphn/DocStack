import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid, Paper } from '@material-ui/core';
import useStyles from "../helpers/App";

const HomeScreen = props => {
    const classes = useStyles();
    console.log(props);
    return(
        <>
        <Typography variant="h5" component="h1">
        Welcome
        </Typography>
        <Grid container spacing={4}>
        <Grid item xs={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://catoftheday.com/archive/2019/November/11.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          <Grid item xs={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://catoftheday.com/archive/2019/November/11.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          <Grid item xs={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://catoftheday.com/archive/2019/November/11.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          <Grid item xs={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://catoftheday.com/archive/2019/November/11.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          </Grid>

          </>
    )
}

export default HomeScreen;