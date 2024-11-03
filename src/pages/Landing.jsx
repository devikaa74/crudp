import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/employee.gif'

const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
        <div className='row align-items-center'>
            <div className='col-lg-5'>
            <h1>Welcome to <br /> <span className='text-warning'>Employee-App</span></h1>
            <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit odit neque nesciunt placeat iure omnis, molestias dolorem sunt voluptatum laborum quae ipsam recusandae pariatur explicabo maiores, ipsa tempora unde commodi?</p>
            <Link to={'/home'} className='btn btn-info'>Get Started</Link>
            </div>
            <div className='col'></div>
                <div className='col-lg-6'>
                    <img className='img-fluid ms-5' src={landingImg} alt="" />
    
                </div>
            
        </div>
        </div>
  )
}

export default Landing