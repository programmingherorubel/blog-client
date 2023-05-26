import React, { useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import './CreateJapaneseBlog.css'

const CreateJapaneseBlog = () => {
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()
    const [update,setUpdate] = useState({})

    const onBlurHandeler = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newvalue = {...update}
        newvalue[field] =  value
        setUpdate(newvalue)
    }

    const formInformation = (e)=>{
        
        const blogobj = {
            ...update,
            time,
            date
        }
        
            fetch('https://radiant-scrubland-22004.herokuapp.com/japaneseblog',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(blogobj)
            })

        alert('New Blog added successfully')
        e.target.reset()
        e.preventDefault()
            
    }

    return (
        <div>
             <Container>
            <Row>
                <Col className="p-2 mx-auto">
                    <h4 className='text-center mt-3'>Create Japanese Blog</h4>
                    <form className="border border-1 p-3"onSubmit={formInformation}>
                        <div style={{display:'flex',gap:'10px'}}>
                            <p className="mt-4">Date</p>
                            <input  onBlur={onBlurHandeler} name='date' className='form-control w-50 mt-3' value={date}/>
                            <p className="mt-4">Time</p>
                            <input  onBlur={onBlurHandeler} name='time' className='form-control w-50 mt-3' value={time}/>
                        </div>
                        <p className='mt-4'>Input Headline</p>
                        <input  onBlur={onBlurHandeler} name='headline' className='form-control' placeholder='headline'/>

                        <parseFloat className='mt-4'>Input your photo Url</parseFloat>
                        <input  onBlur={onBlurHandeler} name='photo_url' className='form-control mt-3' placeholder='Photo Url'/>

                        <p className='mt-4'>Input your photo Description</p>
                        <textarea  onBlur={onBlurHandeler} name='description' rows={7} className='form-control mt-3' placeholder='description'/>

                        <div style={{textAlign:'center'}}><button className='customButton' type='submit'>Create Blog</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default CreateJapaneseBlog;