import React from 'react';
import './PersonalBlog.css'
import { Container ,Row ,Col} from 'react-bootstrap';
import { useEffect,useState } from 'react';
import Sweetpagination from 'sweetpagination';
import { Link } from 'react-router-dom';
import Footer from './../Common/Footer/Footer';
import Navbarr from './../Common/Navbarr/Navbarr';


const PersonalBlog = () => {
    const [totaldata,setTotalData] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/personalblog')
        .then(res => res.json())
        .then(data => setTotalData(data))
    },[])

    return (
        <>
        <Navbarr></Navbarr>
        <div className='PersonalBlog'>
            <Container fluid>
                <Row className='mb-5'>
                    {
                        currentPageData.map(single => !single ? <div class="spinner-border text-warning" role="status"></div> : <Col md={4} lg={3} sm={6} key={single._id} className="mt-5">
                            {
                                <div className='customCard'>
                                <div className='personalBlogContainer'>
                                    <div>
                                        <img src={single.photo_url}  className="img-fluid"/>
                                    </div>
                                    <div className='personalBlogContent p-2'>
                                        <div>
                                            <h5 style={{color:'white'}}>{single.headline?.slice(0,50)}</h5>
                                            {/* <p >{single.date}</p> */}
                                            <Link style={{color:'red',fontWaight:'600',textDecoration:'none' }} to={`/blog/${single._id}`} >See More <i class="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </Col>)
                    }
                </Row>
                <Sweetpagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={12}
                    getData={totaldata}
                />
            </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default PersonalBlog;