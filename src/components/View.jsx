import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { allCategoryApi, getVideoApi, updateCategoryApi } from '../services/allapi'

function View({addStatus}) {
const [videoDetails,setVideoDetails] = useState([])
const [deleteVideoStatus,setDeleteVideoStatus] = useState([])

  const getVideo = async()=>{
    const result = await getVideoApi()
    setVideoDetails(result.data)
  }

  const DragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log("card deleted:",videoId,categoryId);

    //get all category
    const {data} = await allCategoryApi()

    //get selected category
    const selectedCategory = data.find((item)=>item.id==categoryId)
    console.log(selectedCategory);

    //remove video from selected category
    const result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

    const reqBody={
      categoryName : selectedCategory.categoryName,
      allVideo: result,
      id: selectedCategory.id
    }
    await updateCategoryApi(categoryId,reqBody)
  }
  useEffect(()=>{
    getVideo()
  },[addStatus,deleteVideoStatus])
// console.log(videoDetails);

  return (
    <>
      <Row className='w-100' droppable onDragOver={(e)=>DragOver(e)}  onDrop={(e)=>videoDrop(e)}>
        
        {videoDetails?.length>0?
        videoDetails.map((item)=>(<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
          <VideoCard displayVideo = {item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))

        :
        <p className="text-info mt-4">No video yet uploaded</p>
        }
      </Row>
    </>
  )
}

export default View