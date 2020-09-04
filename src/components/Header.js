import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'20px'
  },
  title: {
    flexGrow: 1,
    fontFamily: "Times New Roman"
  },
}));
export default function ButtonAppBar() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h2" className={classes.title} >
            Covid Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
