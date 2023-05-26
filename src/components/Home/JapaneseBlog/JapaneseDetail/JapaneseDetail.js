import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import Navbarr from '../../Common/Navbarr/Navbarr';
import useAuth from './../../../../hooks/UseAuth';
import commentsIcon from '../../img/img.png'
import './JapaneseDetail.css'


const JapaneseDetail = () => {
    const {japanesedetail} = useParams()
    const [singleData,setSingleData] = useState([])
    const [sideContent,setSideContent] = useState([])
    const [comment,setComment] = useState('')
    const [usrComment,setUserComment] = useState([])
    const [isLoadingpost,setIsloadingPost] = useState(false)
    const {user} = useAuth()

    // USEPARAMS AND FIND BLOG ID 

    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/japaneseblog')
        .then(res => res.json())
        .then(data => setSingleData(data.find((p)=> p._id === japanesedetail)))
    },[])

    // SHOW SIDE CONTENT 
    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/japaneseblog')
        .then(res => res.json())
        .then(data => setSideContent(data.reverse().slice(0,4)))
    },[])    

    const onBlurHandeler = e =>{
        const newComment = e.target.value;
        setComment(newComment)
    }

    // COMMENTS POST API 
    const handleForm = e =>{
        e.preventDefault() 
        const commentsInfo = {userComment:comment,blogId:japanesedetail,userName:user.displayName,email:user.email}
        fetch('https://radiant-scrubland-22004.herokuapp.com/comments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(commentsInfo)
        })
        .then(res => res.json())
        .then(data => {
            setIsloadingPost(!isLoadingpost)
            alert('now your Comment is published!')
        })
        e.target.reset()
    }

    // USER COMMENT 
    useEffect(()=>{
        fetch('https://radiant-scrubland-22004.herokuapp.com/comments')
        .then(res => res.json())
        .then(data => setUserComment(data.filter((p)=> p.blogId === japanesedetail)))
    },[isLoadingpost])

    // Delete Comments 
    const deleteComments = id =>{
        const procude = window.confirm('are you sure,you want to delete this comment? ')
            if(procude){
                const url = (`https://radiant-scrubland-22004.herokuapp.com/comments/${id}`)
                fetch(url,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        const remainingId = usrComment.filter(temporary => temporary._id !== id)
                        setUserComment(remainingId)
                        alert('delete Confirmed! ')
                    }
                })
            } 
    }


    return (
        <>
        <Navbarr></Navbarr>
            <Container fluid>
            <Row>
                <Col md={9}>
                    <div>
                        <div className='singleDateTime'>
                            <h6>Publish Date : {singleData.date}</h6> <h6>Publish Time : {singleData.time}</h6>
                        </div>

                        <h4 style={{textAlign:'center',marginTop:'10px'}}>{singleData.headline}</h4> <hr />
                        <p>{singleData.description}</p>
                        <img src={singleData.photo_url} className="img-fluid"/>
                    </div>
                    {/* show comments  */}
                    
                    <Container>
                        <Row>
                        {
                        usrComment.map(singleComment => <Col className='col-12 mt-3 commentContainer'>
                            <div className='commentStyle'>
                                <img src={commentsIcon} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                <div style={{marginLeft:'20px'}}>
                                <h6>{singleComment.userName}</h6>
                                {
                                    user.email === singleComment.email ? <h6 onClick={()=>deleteComments(singleComment._id)} style={{color:'red',cursor:'pointer'}}>Delete</h6> : <p></p> 
                                }
                                </div>
                            </div>
                            <p>{singleComment.userComment}</p>
                            </Col>)
                        }
                    </Row>
                    </Container>

                    {/* show comments  */}

                    <div className='col-md-8 p-2 mx-auto'>
                        <form onSubmit={handleForm}>
                            <textarea name='userComment' onBlur={onBlurHandeler} rows={8} className='form-control' placeholder="Your Comments......."/>
                            <div className='text-center'><button type='submit' className='customButton'>Submit Comment</button></div>
                        </form>
                    </div>

                </Col>
                <Col md={3}>
                    <h3 style={{textAlign:'center',color:'tomato'}}>Blogs</h3> <hr />
                    {
                        sideContent.map(singleSide => <div key={singleSide._id} className="mt-5">
                            <div className='customCard'>
                                <div className='personalBlogContainer'>
                                    <div>
                                        <img src={singleSide.photo_url} className="img-fluid"/>
                                    </div>
                                    <div className='personalBlogContent p-2'>
                                        <div>
                                            <h5 style={{color:'white'}}>{singleSide.headline}</h5>
                                            <a style={{color:'red',fontWaight:'600',textDecoration:'none' }} href={`/japaneseblog/${singleSide._id}`} >See More <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default JapaneseDetail;