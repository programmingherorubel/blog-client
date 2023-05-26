import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import './CreateAdmin.css'

const CreateAdmin = () => {
    const [email,setEmail] = useState('')
    const handleOneBlur = (e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = {email}
        fetch('https://radiant-scrubland-22004.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('new Admin Create Confirmed!')
        })
        e.target.reset()
    }
    return (
        <div className='admin'>
            <Container>
                <h2 className='text-center' style={{color:'white'}}>Create Admin</h2>
                <Row>
                    <Col md={6} className="p-3 mx-auto">
                        <form onSubmit={handleSubmit} className="p-5 border border-1">
                            <input name='email'onBlur={handleOneBlur} className='form-control p-2' placeholder='Create Admin' />
                            <div style={{textAlign:'center'}}><button type='submit' className='customButton'>Create Admin</button></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateAdmin;