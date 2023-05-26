import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import useAuth from '../../../hooks/UseAuth';
import Spinner from 'react-bootstrap/Spinner'
import './Registration.css'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navbarr from './../../Home/Common/Navbarr/Navbarr';

const Registration = () => {
    const [update,setUpdate] = useState({})
    const {reg,isLoading,error,googleSingIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const onBlurForm = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...update}
        newUser[field] = value;
        console.log(newUser)
        setUpdate(newUser)
    }

    const formSubmit = (e)=>{
        e.preventDefault()

        if(update.password !== update.password1){
            return alert('password did not matched, try again latter')
        }

        reg(update.email,update.password,location,navigate,update.name)
    }

    const singinWithGoogle = (navigate,location)=>{
        googleSingIn(navigate,location)
    }

    return (
        <>
        <Navbarr></Navbarr>
            <Container>
            <Row>
                <h2 className='text-center' style={{color:'tomato'}}>Registration</h2>
                <Col md={7} className="mx-auto">
                    <div className='singleLine'>
                        <div className='circle'></div>
                    </div>
                    <div>
                    {
                        !isLoading ? <div></div> : <div className='text-center'><Spinner animation="grow" variant="warning" /></div> 
                    }
                    </div>
                    <Form className='border border-1 p-4' onSubmit={formSubmit}>

                        <Form.Label className='mt-4' style={{color:'gray'}}>Fast Name</Form.Label>
                        <Form.Control onBlur={onBlurForm} name="name" type="text" placeholder="Enater Your Name" />

                        <Form.Label className='mt-4' style={{color:'gray'}}>Email</Form.Label>
                        <Form.Control onBlur={onBlurForm}name="email" type="text" placeholder="Enater Your Email" />

                        <Form.Label className='mt-4' style={{color:'gray'}}>Create Password For website</Form.Label>
                        <Form.Control onBlur={onBlurForm}name="password" type="text" placeholder="Create Password" />

                        <Form.Label className='mt-4' style={{color:'gray'}}>Confirm Password</Form.Label>
                        <Form.Control onBlur={onBlurForm}name="password1" type="text" placeholder="Confirm Password" />
                        <div className='text-center'><h5 className='text-danger'>{error}</h5></div>
                        <div className='text-center'>
                        <h6 style={{textAlign:'center',color:'blue',cursor:'pointer'}} onClick={singinWithGoogle}>Sing In With Google <i class="fa-brands fa-google"></i></h6>
                            <button type='submit' className='customButton mt-5'>Registration</button>
                        </div>
                        <div className='text-center'>
                        <Link style={{color:'red'}} to='/login'>If you have already Account please Login</Link><br />
                        <Link style={{color:'red'}}to='/reset'>Forget Password ? Reset</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Registration;