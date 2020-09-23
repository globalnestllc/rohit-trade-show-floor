import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { IconButton, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({      
    btn:{
        width:'6%', height:'6%',position:'absolute',zIndex:'100',color:'white',       
    },       
  })

export default function BackBooth() {
    const classes = useStyles();
    return (
        
           <Link to='/' >
         <Button disableFocusRipple style={{ left:'3.8%', top:'2.8%'}} 
          className={classes.btn}><ArrowBackRoundedIcon  className={classes.icon}/>Back</Button>
         </Link> 
    )
}
