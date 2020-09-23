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
        width:'6%', height:'6%',position:'absolute',zIndex:'100',color:'white',       
    },
    icon:{
        width:'50%', height:'50%'
    },
    banner:{
        objectFit:'cover', position:'absolute',zIndex:'100',color:'white'
    },
    menu:{
        border:'2px solid white', position:'absolute', width:'12.5%',
        zIndex:'100', color:'white', overflow:'hidden', 
    },
   
    utube:{
        position:'absolute',zIndex:'100', top:'34.8%', left:'34.1%',
        width:'11.6%', height:'11.5%'
    }    
  })
function Booth1() {
    const classes = useStyles();
    return (
        <div className="relative" >
        <div >
            <img className="w-full h-full" src="https://eventdex.force.com/servlet/servlet.ImageServer?id=0150H00000HgRCm&oid=00DF0000000BpyH"></img> 
        </div>
        
         <BackBooth/>
         {/* booth */}
        <IconButton disableFocusRipple style={{ left:'27.2%', top:'28.4%'}} 
          className={classes.btn} >
         <DuoRoundedIcon className={classes.icon} />
        </IconButton>
       
        <IconButton disableFocusRipple style={{ left:'48%', top:'28.4%'}} 
          className={classes.btn} >
         <ForumRoundedIcon className={classes.icon} />
         </IconButton>

        <IconButton disableFocusRipple  style={{left:'60.5%', top:'28.4%'}}
          className={classes.btn} >
          <PermContactCalendarRoundedIcon  className={classes.icon}  />
        </IconButton>

        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.ImageServer?id=0157A000000G5CMQA0&oid=00D7A0000009R6TUAU" 
            style={{left:'51%',top:'37%',width:'8%',height:'15%' }} className={classes.banner}  />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.FileDownload?file=00P7A000004OYoaUAG&oid=00D7A0000009R6TUAU" 
            style={{left:'20%',top:'57.6%',width:'11.4%',height:'11.4%' }} className={classes.banner}  />
         <div className={classes.menu} style={{right:'18.5%', top:'26%'}}>
             
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

export default Booth1;