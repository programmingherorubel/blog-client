import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import useAuth from '../../../hooks/UseAuth';
import Spinner from 'react-bootstrap/Spinner'
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbarr from './../../Home/Common/Navbarr/Navbarr';

const Login = () => {
    const [update,setUpdate] = useState({})
    const {login,isLoading,error,googleSingIn} = useAuth()
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


        login(update.email,update.password,location,navigate) 
    }
    const singinWithGoogle = ()=>{
        googleSingIn(navigate,location)
    }

    return (
        <>
        <Navbarr></Navbarr>
            <Container>
            <Row>
                <h2 className='text-center' style={{color:'tomato'}}>Login</h2>
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

                        <Form.Label className='mt-4' style={{color:'gray'}}>Email</Form.Label>
                        <Form.Control onBlur={onBlurForm} name="email" type="text" placeholder="Enater Your Email" />

                        <Form.Label className='mt-4' style={{color:'gray'}}>Create Password For website</Form.Label>
                        <Form.Control onBlur={onBlurForm} name="password" type="password" placeholder="Create Password" />
                        <div className='text-center'><h5 className='text-danger'>{error}</h5></div>
                        <h6 style={{textAlign:'center',color:'blue',cursor:'pointer'}} onClick={singinWithGoogle}>Sing In With Google <i class="fa-brands fa-google"></i></h6>
                        <div className='text-center'><button type='submit' className='customButton mt-5'>Login</button></div>
                        <div className='text-center'>
                        <Link style={{color:'red'}} to='/registration'>If you have no Account please Registration</Link><br />
                        <Link style={{color:'red'}}to='/reset'>Forget Password ? Reset</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Login;