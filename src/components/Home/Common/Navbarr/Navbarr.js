import React, { useState } from 'react';
import './Navbarr.css'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import useAuth from './../../../../hooks/UseAuth';


const Navbarr = () => {
    const [active,setActive] = useState('navMenu')
    const [toggleIcon,setToggleIcon] = useState('hamburger')
    const {user,logout,admin} = useAuth()
    const hamburget = ()=>{
        active === 'navMenu' ? setActive('navMenu active') : setActive('navMenu')
        toggleIcon === 'hamburger' ? setToggleIcon('toggle'):setToggleIcon('hamburger')
    }
    console.log(admin)
    return (
        <div className='mainNavbar'>
             <div className='nav'>
            <Link to='/' style={{textDecoration:'none',color:'black',margin:'0 10px'}} >
                #_Aysha_Asha
            </Link>
            
            <ul className={active} >
                <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/blog'>Blog</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/japaneseblog'>Japanese Blog</Link></li>
                {
                    admin && <li><Link style={{textDecoration:'none',color:'red'}} to='/dashbord'>Dashbord</Link></li>
                }
                
            </ul>
            {
                !user.email ? <Link to='/login' style={{color:'tomato',textDecoration:'none'}}>Login</Link> : <Link style={{color:'red',textDecoration:'none'}}to='' onClick={logout}>Logout</Link> 
            }
            <div onClick={hamburget} className={toggleIcon}>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
            </div>
            
        </div>
        </div>
    );
};

export default Navbarr;