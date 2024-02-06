

import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationcover() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div className="location-cover">
        {/* <Image data-aos='fade-up' priority='true' className='coverimage' src={cover} width='auto' height='auto' alt='cover'/> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7583781576886!2d36.8457526!3d-1.3207231000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1178ecb44ec1%3A0x34e8fd105df4d078!2sBalozi%20Suites!5e0!3m2!1sen!2ske!4v1677828743221!5m2!1sen!2ske" height="600px" width='100%' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Locationcover