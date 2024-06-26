import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='row w-100 mt-5 bg-dark p-3'>
        <div className="col-md-1"></div>
        <div className="col-md-3 p-4">
            <h4 className="text-primary mb-4">
            <FontAwesomeIcon className='text-light' icon={faPlay} beat />
          <span className='ms-3 fs-5 text-light '>Media Player</span>
            </h4>
            <p style={{textAlign:'justify',color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, nam qctetur molestiae similique nihil quas incidunt officia, laborum inventore .</p>
        </div>
        <div className="col-md-2 mt-4 d-flex justify-content-center">
            <div>
            <h6 className='fs-5 text-light mb-4'>Links</h6>
            
            <p style={{textAlign:'justify',color:'white'}}><Link to={'/'}> Landing</Link></p>
            <p style={{textAlign:'justify',color:'white'}}><Link to={'/home'}> Home</Link></p>
            <p style={{textAlign:'justify',color:'white'}}><Link to={'/watch-history'}> WatchHistory</Link></p>
            
            </div>
        </div>
        <div className="col-md-2 p-4">
        <h6 className='fs-5 text-light mb-4'>Guide</h6>
            <p style={{textAlign:'justify',color:'white'}}>React</p>
            <p style={{textAlign:'justify',color:'white'}}>React Bootsrap</p>
            <p style={{textAlign:'justify',color:'white'}}>Bootswatch</p>
            
        </div>
        <div className="col-md-3 p-4">
        <h6 className='fs-5 text-light'>Contact Us</h6>
            <div className="d-flex mt-4">
                <input type="text" className='form-control' placeholder='Email Id'/>
                <button className="btn btn-primary ms-3">Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4 text-primary">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />

            </div>
            
        </div>
        <div className="col-md-1"></div>
    </div>
  )
}

export default Footer
