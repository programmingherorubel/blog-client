import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const DeletePersonalBlog = () => {
    const [personalBlog,setPersonalBlog] = useState([])

    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/personalblog')
        .then(res => res.json())
        .then(data => setPersonalBlog(data))
    },[])

    const hendleDelete = id =>{
        const  proced = window.confirm('are you sure ? you want to delete this blog Post ? ');
        if(proced){
            const url = `https://radiant-scrubland-22004.herokuapp.com/personalblog/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingId = personalBlog.filter(temporary => temporary._id !== id)
                    
                    setPersonalBlog(remainingId)
                    alert('Blog delete Confirmed! ')
                }
            })
        }
    }


    return (
        <Container fluid>
            <h2 style={{textAlign:'center',color:'tomato'}}>Delete Personal Blog</h2>
            <Row>
                <Col>
                    
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th >Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            personalBlog.map(singleJapaneseblog => <tbody>
                                <tr className='text-center'>
                                   <td>{singleJapaneseblog.headline}</td>
                                   <td><i class="fa-solid fa-trash-can" onClick={()=>hendleDelete(singleJapaneseblog._id)} style={{color:'red'}}></i></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default DeletePersonalBlog;