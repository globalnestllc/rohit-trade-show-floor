import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    menuIcon:{
        width:'35px', height:'35px', zIndex:'122',position:'absolute',
        top:'15px', left:'10px',cursor:'pointer',transition: '0.5s'
    },
    menu:{
        zIndex:'122',position:'absolute',cursor:'pointer',
        top:'100px', left:'0px', backgroundColor:'#40a1c4',
        overflowX: "hidden",transition: '0.5s', borderTopRightRadius:'10px',
        borderBottomRightRadius:'10px'
    },
    menuItem:{
        color:'white',fontSize:'16px',borderLeft: "5px solid #e91e63",
        padding: "10px", textAlign: 'left', textDecoration:'none',fontSize:'18px',
        color: '#fff',display: 'block',transition: '0.3s', letterSpacing: '0.5px',
        
    }

})       

function Menu() {
    const classes = useStyles();
    const initialState ={
        width:true,
        rotate:false
    };
    const [state,setState] = useState(initialState);

    const onChange = () => {
        setState((prevState) => ({width:!state.width,transform: !state.rotate}) )
    }      
   let menuHidden={
    width :'0px',
   };
   let menuDisplay={
    width:'220px'
   };
   let rotateOff={
    transform: 'rotate(0deg)',
   };
   let rotateOn={
    transform: 'rotate(90deg)'
   }

    return (
        <div>
        <img  onClick={onChange} style={state.width ? rotateOff:rotateOn} 
        className={classes.menuIcon} 
        src='https://eventdex.force.com/servlet/servlet.ImageServer?id=0150H00000HgAYg&oid=00DF0000000BpyH'/>

        <div className={classes.menu} style={state.width ? menuHidden:menuDisplay} >
         <a className={classes.menuItem}  >Exhibitors</a> <hr/>         
         <a className={classes.menuItem}  >Schedule</a> <hr/>
         <a className={classes.menuItem}   >Sessions</a> <hr/>
         <a className={classes.menuItem}  >Auditorium</a> <hr/>
         <a className={classes.menuItem}  >Matchmaking</a> <hr/>
         <a className={classes.menuItem}  >Lounge</a>  <hr/>
         <a className={classes.menuItem} >Back to Lobby</a>
      </div>

         </div> 
    )
}

export default Menu;

