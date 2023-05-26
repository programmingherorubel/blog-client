import React, { useEffect, useState } from 'react';
import { Container ,Row,Col,Table} from 'react-bootstrap';

const User = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <Container fluid>
            <h2 style={{textAlign:'center',color:'tomato'}}>Website User</h2>
            <Row>
                <Col>
                    
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th >User Email</th>
                                <th>User Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>

                        {
                            user.map(users => <tbody>
                                <tr className='text-center'>
                                   <td>{users.email}</td>
                                   <td>{users.displayName}</td>
                                   <td>{users.role}</td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default User;