import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalCard from './Global'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs = {4}>
              <GlobalCard className={classes.paper}> 
              Global
              </GlobalCard>         
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={3}>
                <Typography>
                    Simple 
                </Typography>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
