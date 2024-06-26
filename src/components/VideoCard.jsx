import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addToHistoryApi, deleteVideoApi } from '../services/allapi';

function VideoCard({displayVideo,setDeleteVideoStatus,isPresent}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    let caption = displayVideo?.caption
    let url = displayVideo?.url
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    console.log(timeStamp);

    const reqBody = {
      caption,url,timeStamp
    }
    const result = await addToHistoryApi(reqBody)
    console.log(result);
  };

  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    if(result.status>=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }
  }

  const videoDrag = (e,id)=>{
    console.log('card dragged :',id);
    e.dataTransfer.setData("videoId",id)
  }


  return (
    <>
    <Card style={{ width: '100%',marginTop:'15px',boxShadow:'2px 2px 8px black' }} draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
      {!isPresent && <Card.Img onClick={handleShow} variant="top" src={displayVideo?.image} width={'100%'} height={'290px'} />}
      <Card.Body className='d-flex justify-content-between align-items-center bg-dark'>
        <Card.Title className='mt-3 fs-6'>{displayVideo?.caption}</Card.Title>
        {!isPresent && <Button variant="primary" style={{fontSize:'smaller'}} onClick={()=>handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrash} className='fs-6' /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={`${displayVideo?.url}?autoplay=1`} allowfullscreen></iframe></Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard