import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [addStatus,setAddStatus] = useState([])
  return (
    <>
    
      <div className="d-flex mt-5 p-5">
        <Add setAddStatus={setAddStatus}/>
        <h5 className="ms-auto" ><Link style={{textDecoration:'none'}} to={'/watch-history'}><span id='h'className='text-primary'>Watch History</span><FontAwesomeIcon className='text-primary ms-2' icon={faClockRotateLeft} /></Link></h5>
      </div>
      <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View addStatus={addStatus}/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
      </div>
    </>
  )
}

export default Home