import { faPenNib, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { AvideoApi, addCategoryApi, allCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allapi'
import { toast } from 'react-toastify'
import { json } from 'react-router-dom'

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName] = useState("")
  const [allCategory,setAllCategory] = useState([])
  const [addStatus,setAddStatus] = useState(false)

  const handleClose = () => {setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);

  const addcategory = async()=>{
    if(categoryName){
    const reqBody ={
      categoryName,
      allVideo:[]
    }
    const result = await addCategoryApi(reqBody)
    if(result.status>=200 && result.status<300){
      setAddStatus(true)
      handleClose()
      toast.success('Category added successfully')
    }
  else{
     console.log(result);
  }
  }
  else{
    toast.info('Please add category name')
  }
  }

  const getAllCategory = async()=>{
    const result = await allCategoryApi()
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)
      
    }
  }

  const delCategory = async(id)=>{
    const result = await deleteCategoryApi(id)
    getAllCategory()
  }

  //dragover and drop
  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop= async(e,categoryId)=>{
    console.log(`category id: ${categoryId}`);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video id is : ",videoId);
    const {data} = await AvideoApi(videoId)
    console.log(data);

    const selectedCategory = allCategory.find((item)=>item.id==categoryId)

    if(selectedCategory.allVideo.find((item)=>item.id==data.id)){
      toast.warning('video already exist in category')
    }else{
      selectedCategory.allVideo.push(data)
      await updateCategoryApi(categoryId,selectedCategory)
    }
  }

  const DragStart = (e,videoId,categoryId)=>{
    console.log(videoId);
    console.log(categoryId);
    let dataShare={
      videoId,categoryId
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }
  

  useEffect(()=>{
    getAllCategory()
    setAddStatus(false)
    
  },[addStatus,allCategory])
  return (
    <>
      <div className="w-100 mt-md-1 mt-5 p-4">
        <button className="btn btn-primary w-100"onClick={handleShow}>Add New Category<FontAwesomeIcon icon={faPlus}/></button>
      </div>
      
        {allCategory?.length>0?
        allCategory?.map((item)=>(
          <div className="mt-4" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
        <div className="rounded p-3 ms-4 ms-md-0"style={{border:'1px solid grey'}}>
          <div className="d-flex align-items-center">
            <h6>{item.categoryName}</h6>
            <button className="btn btn-danger ms-auto " onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
          <Row>
        {item?.allVideo?.length>0?
        item?.allVideo?.map((videoItem)=>(
          <Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
          <VideoCard displayVideo={videoItem} isPresent={true}/>
        </Col>
        ))
        :null
      }
        </Row>
          </div>
          </div>
          ))
        :
        null}
        
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPenNib} className='me-3'/>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form action="" className="p-3 m-3 rounded border-secondary"style={{border:'1px solid'}}>
            <p className='mb-2'>Add new category</p>
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addcategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category