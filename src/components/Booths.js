import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    
    videobtn:{
        width:'2.5%', height:'2.5%',position:'absolute',zIndex:'100',color:'white'
    },
    btn:{
        width:'3.5%', height:'3.5%',position:'absolute',zIndex:'100',color:'white'
    },
    banner:{
        objectFit:'cover', position:'absolute',zIndex:'100',color:'white'
    },
    block:{
        top:'16%', height:'24%', cursor:'pointer', position:'absolute',zIndex:'101',color:'white'
    },
    menu:{
        border:'2px solid white', position:'absolute', width:'4.5%', height:'8%',
        zIndex:'100', color:'white', overflow:'hidden'
    },
    munuP:{
        fontSize:'62.5%',
        textAlign:'center',
    }    
  })
function Booths() {
    const classes = useStyles();
    return (
        <div className="relative" >
              
        <div >
            <img className="w-full h-full" src="https://eventdex.force.com/servlet/servlet.ImageServer?id=0150H00000HgRZ7&oid=00DF0000000BpyH"></img> 
        </div>
       
        {/* 1st booth */}
         <Link to='/Booth1' > <div style={{ left:'6%',width:'31%',}} className={classes.block}></div></Link>
        <PlayCircleOutlineRoundedIcon style={{left:'14.6%', top:'25.6%',}} className={classes.videobtn} ></PlayCircleOutlineRoundedIcon>
        <DuoRoundedIcon style={{ left:'10.6%', top:'20.6%'}} className={classes.btn}/>
        <ForumRoundedIcon  style={{left:'19.5%', top:'20.6%'}} className={classes.btn}/>
        <PermContactCalendarRoundedIcon  style={{left:'24.5%', top:'20.6%'}} className={classes.btn} />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.ImageServer?id=0157A000000G5CMQA0&oid=00D7A0000009R6TUAU" 
            style={{left:'23%',top:'25.2%',width:'3%',height:'6%' }} className={classes.banner}  />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.FileDownload?file=00P7A000004OYoaUAG&oid=00D7A0000009R6TUAU" 
            style={{left:'9%',top:'35.5%',width:'4.7%',height:'4.7%' }} className={classes.banner}  />
         <div className={classes.menu} style={{left:'28.9%', top:'23%'}}>
             <p className={classes.munuP} style={{fontWeight:'500'}}>MENU</p>
             <hr/>
             <p className={classes.munuP}>About us</p>
             <hr/>
             <p className={classes.munuP}>Video</p>
             <hr/>
             <p className={classes.munuP}>Website</p>            
         </div>

        {/* 2nd booth */}
        <Link to='/Booth2'> <div style={{ left:'40%',width:'28%',}} className={classes.block}></div></Link>
        <PlayCircleOutlineRoundedIcon  style={{left:'52.1%', top:'28.4%'}} className={classes.videobtn} ></PlayCircleOutlineRoundedIcon>
        <DuoRoundedIcon style={{ left:'38.6%', top:'36%'}} className={classes.btn}/>
        <ForumRoundedIcon  style={{left:'43%', top:'36%'}} className={classes.btn}/>
        <PermContactCalendarRoundedIcon  style={{left:'47.5%', top:'36%'}} className={classes.btn} />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.ImageServer?id=0157A000000G5C7QAK&oid=00D7A0000009R6TUAU" 
          style={{left:'44.2%',top:'21.4%',width:'3%',height:'5%' }} className={classes.banner}  />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.FileDownload?file=00P7A000004M9FFUA0&oid=00D7A0000009R6TUAU" 
          style={{left:'51%', borderTopLeftRadius:'18%', top:'21.4%',width:'5.3%',height:'4.8%' }} className={classes.banner}  />
         <div className={classes.menu} style={{left:'63.3%', top:'21.4%'}}>
             <p className={classes.munuP} style={{fontWeight:'500'}}>MENU</p>
             <hr/>
             <p className={classes.munuP}>About us</p>
             <hr/>
             <p className={classes.munuP}>Video</p>
             <hr/>
             <p className={classes.munuP}>Website</p>            
         </div>
       
        {/* 3nd both */}
        <Link to='/Booth3'><div style={{ right:'4%',width:'24%',}} className={classes.block}></div></Link>
        <PlayCircleOutlineRoundedIcon  style={{right:'13.3%', top:'28.7%',}} className={classes.videobtn} ></PlayCircleOutlineRoundedIcon>
        <DuoRoundedIcon style={{ right:'17.2%', top:'36%'}} className={classes.btn}/>
        <ForumRoundedIcon  style={{right:'14%', top:'36%'}} className={classes.btn}/>
        <PermContactCalendarRoundedIcon  style={{right:'21%', top:'28.2%'}} className={classes.btn} />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.ImageServer?id=0157A000000G5C2QAK&oid=00D7A0000009R6TUAU" 
            style={{right:'19%',top:'20.4%',width:'4%',height:'3%' }} className={classes.banner}  />
        <img src="https://qa-eventdex.cs44.force.com/servlet/servlet.FileDownload?file=00P7A000004LzrxUAC&oid=00D7A0000009R6TUAU" 
            style={{right:'12%',top:'20.3%',width:'4.7%',height:'4.9%' }} className={classes.banner}  />
         <div className={classes.menu} style={{right:'5.5%', top:'29.3%'}}>
             <p className={classes.munuP} style={{fontWeight:'500'}}>MENU</p>
             <hr/>
             <p className={classes.munuP}>About us</p>
             <hr/>
             <p className={classes.munuP}>Video</p>
             <hr/>
             <p className={classes.munuP}>Website</p>            
         </div>
      </div>
    )
}

export default Booths;