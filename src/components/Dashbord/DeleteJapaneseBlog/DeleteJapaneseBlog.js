import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const DeleteJapaneseBlog = () => {
    const [japanseBlog,setJapaneseBlog] = useState([])

    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/japaneseblog')
        .then(res => res.json())
        .then(data => setJapaneseBlog(data))
    },[])

    const hendleDelete = id =>{
        const  proced = window.confirm('are you sure ? you want to delete this blog Post ? ');
        if(proced){
            const url = `https://radiant-scrubland-22004.herokuapp.com/japaneseblog/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remainingId = japanseBlog.filter(temporary => temporary._id !== id)
                    
                    setJapaneseBlog(remainingId)
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
                            japanseBlog.map(singleJapaneseblog => <tbody>
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

export default DeleteJapaneseBlog;