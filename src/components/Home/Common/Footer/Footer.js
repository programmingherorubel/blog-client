import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <h3 style={{textAlign:'center',padding:'20px',color:'black'}}>#_AYSHA_ASHA </h3>
            <ul className='socialMedia'>
                <li><a href='https://www.facebook.com/profile.php?id=100070493261411' target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href='https://www.instagram.com/accounts/login/?next=/_ayeshaasha_/'target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href='https://twitter.com/AyshaAsha11' target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
        </div>
    );
};

export default Footer;