import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    exhibitorList:{
        width:'280px', backgroundColor:'#80808073', zIndex:'112',position:'absolute',
        top:'15px', left:'70px',transition: '0.5s', borderRadius:'10px',
        boxShadow: '0 0 5px #e0dede',paddingBottom:'15px'
    },  
    heading:{
        fontSize:'18px', color:'white',padding:'10px', fontWeight:'700'
    },
    scroll:{
        overflowY: 'scroll',scrollbarWidth: 'thin', height:'250px', 
    },
    whiteHover:{
       backgroundColor:'red'
    }
})       


export default function TradeShowAttendee() {
    const classes = useStyles();
    const initialState ={
        list:true,
    };
    const [state,setState] = useState(initialState);

    const onChange = () => {
        setState((prevState) => ({list:!state.list}) )
    } 
    let Hidden={
        display :'none',
       };
       let  Display={
        display :'block'
       };
    return (
        <div className={classes.exhibitorList} >
            <p className='text-xl text-white pt-5 px-4 font-semibold cursor-pointer ' onClick={onChange}>Exhibitors</p>
            <div className='w-full h-px mt-3 bg-white' />
           
            <div style={state.list ? Hidden: Display} >
            <input className='w-full rounded focus:outline-none text-base text-gray-700 mt-2
             px-2 py-1' style={{backgroundColor:'rgb(255,255,255,.7)'}} placeholder='Search...' />
            
            <div className={classes.scroll} >
                <Link to='/Booth1' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth2' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth3' >
                    <div  className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth1' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth2' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth3' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
                <Link to='/Booth1' >
                    <div className='flex cursor-pointer hoverGray py-2 px-4'>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div className="ml-3 text-white font-medium  my-auto">
                    <p className="text-lg leading-none">Booth Name</p>
                    <p className="text-sm  leading-none ">User Name</p>
                </div>
                </div>
                </Link>
            </div>
            
            <div>
            </div>
            </div>
        </div>
    )
}


