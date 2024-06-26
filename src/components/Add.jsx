import { faArrowUpFromBracket, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { addVideoApi } from '../services/allapi'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  //create a state to hold data from input
  const[video,setVideo]=useState({
    caption:"",
    image:"",
    url:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideo({
      caption:"",
    image:"",
    url:""
    })
  }
  const handleShow = () => setShow(true);

  const validateLink = (e)=>{
    // console.log(e.target.value);
    const link = e.target.value

    if(link.endsWith('?feature=shared')){
      const yTkey = link.slice(-26,-15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
    else if(link.startsWith('https://youtu.be/')){
      const yTkey = link.slice(17,28)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})

    }else{
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
  }
  const handleUpload = async (e)=>{
    e.preventDefault()
  
  const {caption,image,url}= video
  if(!caption || !image || !url){
    toast.info('Please fill the form')
  }else{
    const result = await addVideoApi(video)
    // console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Video Upload Successfully')
      setAddStatus(result.data)
      handleClose()
    }
    else{
      toast.error('something went wrong')
      handleClose()
    }
  }
}

  
  

  // console.log(video);
  return (
    <>
    <div className="d-flex" style={{cursor:'pointer'}} onClick={handleShow}>
      <h5 className='text-light mt-2' id='h'>Upload new video</h5>
      <button className='btn' ><FontAwesomeIcon icon={faCloudArrowUp} className='me-2' /></button>
    </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faArrowUpFromBracket} className='me-3'/>Udpload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form action="" className="border p-3 rounded border-secondary">
            <input type="text" placeholder='Video Caption'  className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"   placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text"   placeholder='Video Url' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='bottom-right' autoClose= '2000'/>
    </>
  )
}

export default Add