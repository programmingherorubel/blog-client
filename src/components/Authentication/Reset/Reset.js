import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import useAuth from './../../../hooks/UseAuth';
import Navbarr from './../../Home/Common/Navbarr/Navbarr';

const Reset = () => {
    const {resetUserEmail,error} =  useAuth()
    const [resetValue,setResetValue ] = useState()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...resetValue}
        newData[field] = value;
        console.log(newData)
        setResetValue(newData)
    }
    const formSubmit= e =>{
        resetUserEmail(resetValue.email)
        alert('check your email! and Change password')
        e.preventDefault()
    }

    return (
        <>
        <Navbarr></Navbarr>
            <Container>
            <Row>
                <h2 className='text-center' style={{color:'tomato'}}>Reset Password</h2>
                <Col md={7} className="mx-auto">
                    <div className='singleLine'>
                        <div className='circle'></div>
                    </div>
                    <Form className='border border-1 p-4' onSubmit={formSubmit}>

                        <Form.Label className='mt-4' style={{color:'gray'}}>Email</Form.Label>
                        <Form.Control onBlur={handleOnChange} name='email' type="text" placeholder="Enater Your Email" />
                        <div className='text-center'><h5 className='text-danger'>{error}</h5></div>
                        <div className='text-center'><button type='submit' className='customButton mt-5'>Reset Password</button></div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Reset;