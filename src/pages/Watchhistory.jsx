import React, { useEffect, useState } from 'react'
import { faHouse, faLeftLong, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { deleteVideoFromHistory, getVideoFromHistory } from '../services/allapi'



function Watchhistory() {
  const[videoHistory,setVideoHistory] = useState([])
  const[deleteStatus,setDeleteStatus] = useState([])

  const getHistory = async()=>{
    const result = await getVideoFromHistory()
    if(result.status>=200 && result.status<300){
      setVideoHistory(result.data)
    }
  }
  console.log(videoHistory);

  useEffect(()=>{
    getHistory()
  },[deleteStatus])

  const deleteHistory = async (id)=>{
    const result = await deleteVideoFromHistory(id)
    setDeleteStatus(result.data)
  }

  return (
    <>
    <div className="container mt-5 mb-5 justify-content-between">
      <div className="d-flex justify-content-between mb-5">
      <h2>Watch-History</h2>
      <Link to={'/home'} style={{textDecoration:'none',color:'blueviolet',fontSize:'25px'}}>
      <FontAwesomeIcon icon={faLeftLong} className='me-2'/><span id='h'>Back to Home</span>
      </Link>
      </div>

      {videoHistory?.length>0?
      <Table className="mb-5 container shadow w-100" style={{border:'1px solid'}}>
        <thead style={{border:'1px solid'}}>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {videoHistory?.map((item,index)=>( <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
            <td>{item?.timeStamp}</td>
            <td><Button onClick={()=>deleteHistory(item.id)} className='btn'><FontAwesomeIcon icon={faTrash} className='fs-6'/></Button></td>
          </tr>))}
        </tbody>
      </Table>
      :
      <p className="text-info mt-4">No Watch history</p>
    }
    </div>
    </>
  )
}

export default Watchhistory