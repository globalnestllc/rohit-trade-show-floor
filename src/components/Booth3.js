import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import BackBooth from './BackBooth';

const useStyles = makeStyles({
    root: {     
    },   
    btn:{
        width:'7%', height:'7%',position:'absolute',zIndex:'100',color:'white',       
    },
    icon:{
        width:'50%', height:'50%'
    },
    banner:{
        objectFit:'cover', position:'absolute',zIndex:'100',color:'white'
    },
    menu:{
        border:'2px solid white', position:'absolute', width:'12.5%',
        zIndex:'100', color:'white', 
    },
   
    utube:{
        position:'absolute',zIndex:'100', top:'40%', left:'46.1%',
        width:'14.6%', height:'14.6%'
    }    
  })
function Booth3() {
    const classes = useStyles();
    return (
        <div className="relative" >
        <div >
            <img className="w-full h-full" src="https://eventdex.force.com/servlet/servlet.ImageServer?id=0150H00000HgRDB&oid=00DF0000000BpyH"></img> 
        </div>
        
         {/* back button */}
         <BackBooth/>
           {/* booth */}
        <IconButton disableFocusRipple style={{ left:'26%', top:'65.6%'}} 
          className={classes.btn} >
         <DuoRoundedIcon className={classes.icon} />
        </IconButton>
       
        <IconButton disableFocusRipple style={{ left:'33.6%', top:'65.6%'}} 
          className={classes.btn} >
         <ForumRoundedIcon className={classes.icon} />
         </IconButton>

        <IconButton disableFocusRipple  style={{left:'41%', top:'65.6%'}}
          className={classes.btn} >
          <PermContactCalendarRoundedIcon  className={classes.icon}  />
        </IconButton>

        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.ImageServer?id=0157A000000G5C2QAK&oid=00D7A0000009R6TUAU" 
            style={{left:'27%',top:'15%',width:'12%',height:'10%' }} className={classes.banner}  />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.FileDownload?file=00P7A000004LzrxUAC&oid=00D7A0000009R6TUAU" 
            style={{left:'56%',top:'15%',width:'13.4%',height:'15.7%' }} className={classes.banner}  />
         <div className={classes.menu} style={{right:'19%', top:'44%'}}>
             
             <p style={{fontSize:'100%'}}  className="w-full font-semibold bg-white text-gray-800 text-white text-center ">About us</p>
             <hr/>
             <Button size="small" varient="contained"  color="inherit" className="w-full text-xs text-white 
                     focus:outline-none">Instagram</Button>
             <hr/>
             <Button size="small" varient="contained"  color="inherit" className="w-full text-xs text-white 
                     focus:outline-none">FaceBook</Button>
             <hr/>
             <Button size="small" varient="contained"  color="inherit" className="w-full text-xs text-white 
                     focus:outline-none">Twitter</Button>
             <hr/>
             <Button size="small" varient="contained"  color="inherit" className="w-full text-xs text-white 
                     focus:outline-none">www.xyx.com</Button>
             
          
         </div>
           {/* youTube */}
            <iframe className={classes.utube} src="https://www.youtube.com/embed/GaQRgiDiBXU"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen="">                     
            </iframe>
           

      
      </div>
    )
}

export default Booth3;