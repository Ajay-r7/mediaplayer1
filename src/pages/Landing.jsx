import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card';
import React from 'react'
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <div className="row mt-5 justify-content-center align-items-center w-100">
        <div className="col-md-1"></div>
        <div className="col-md-5 p-4">
          <h3>Welcome to <span className="text-primary">Media Player</span></h3>
          <p style={{textAlign:'justify',color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur deserunt tempore excepturi ex tempora adipisci, voluptatem quas inventore non. Officia laudantium eum cum architecto expedita, sapiente adipisci itaque? Aliquam, ea.</p>
        
          <button className="btn btn-primary mt-5"><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
          <img width={400} src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif" alt="" />
        </div>
      </div>
      <div className="row w-100 p-5 mt-4">
        <h3 className="mb-4 mt-5 text-center" style={{textDecorationLine:'underline'}}>Features</h3>
        
        <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://bestanimations.com/Balls&Buttons/amazing-3d-computer-ball-sphere-art-animated-gif-6.gif" className='w-100' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://bestanimations.com/Balls&Buttons/amazing-3d-computer-ball-sphere-art-animated-gif-6.gif" className='w-100' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
        <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://bestanimations.com/Balls&Buttons/amazing-3d-computer-ball-sphere-art-animated-gif-6.gif" className='w-100' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className="row w-100 mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-10 p-5" style={{border:'1px solid rgb(72, 0, 102)'}}>
              <div className="row w-100">
              <div className="col-md-6">
                <h2>Simple Fast And Powerful</h2>
                <p className="mt-4" style={{color:'white'}}><span className="text-primary fs-4" >Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt!.</p>
                <p className="mt-4" style={{color:'white'}}><span className="text-primary fs-4" >Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt!.</p>
                <p className="mt-4" style={{color:'white'}}><span className="text-primary fs-4">Managing Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt!</p>
            
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="350" src="https://www.youtube.com/embed/SMQGDHLqu-g" title="JON SNOW //  [edit] (Memory Reboot)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              </div>
            </div>
            <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Landing