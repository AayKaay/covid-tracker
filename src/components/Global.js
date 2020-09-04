import React,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useTypoStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
      },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign:'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const typoClasses = useTypoStyles();
  const [globalData,setDataa] = useState([])
  const [update,setUpdate] = useState(false)
  useEffect( () => {
      async function getData(){
        setUpdate(true)
        const response = await fetch('https://api.covid19api.com/summary')
        console.log(response)
        const awaitedData = (await response.json())
        setUpdate(false)
        console.log(awaitedData.Date)
        setDataa(awaitedData)
        console.log("2", globalData)

      }
    getData()
  },[])  

  return (
    <div className={classes.root}>
        
      <Paper elevation={3}>
        <div className={typoClasses.root}>
            <Typography variant="h4" style={{fontweight:'bolder'}}>
                {globalData && globalData.Global && globalData.Global.TotalConfirmed}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Global Cases
                
            </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={typoClasses.root}>
            <Typography variant="h4" style={{fontweight:'bolder', color:'Purple'}}>
            {globalData && globalData.Global && globalData.Global.NewConfirmed}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Active Cases
            </Typography>
        </div>
      </Paper>
       <Paper elevation={3}>
         <div className={typoClasses.root}>
            <Typography variant="h4" style={{fontweight:'bolder', color:'green'}}>
                {globalData && globalData.Global && globalData.Global.TotalRecovered}

            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Recovered
            </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
         <div className={typoClasses.root}>
            <Typography variant="h4" style={{fontweight:'bolder', color:'red'}}>
              {globalData && globalData.Global && globalData.Global.TotalDeaths}
                
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Deaths
            </Typography>
        </div>
      </Paper>
    </div>
  );
}
