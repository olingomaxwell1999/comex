"use client"
import {TbSwimming} from 'react-icons/tb'
import {GiLift} from 'react-icons/gi'
import {MdBusinessCenter} from 'react-icons/md'
import {FaCouch} from 'react-icons/fa'
import {BiRestaurant} from 'react-icons/bi'
import {AiOutlineCoffee} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function City() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='city'>
      <div className="top">
        <h2>find your</h2>
        <h2 className='uppercase two'>happy place</h2>
      </div>
      <div className="bottom-city">
        <div className='city-card'>
          <TbSwimming className='icon-city' color={'#777777'}/>
          <h3>Rooftop Swimming Pool</h3>
        </div>

        <div className='city-card'>
          <GiLift className='icon-city' color={'#777777'}/>
          <h3>Two High Speed Lift</h3>
        </div>

        <div className='city-card'>
          <MdBusinessCenter color={'#777777'} className='icon-city' />
          <h3>Business Center</h3>
        </div>

        <div className='city-card'>
          <FaCouch color={'#777777'} className='icon-city' />
          <h3>Resident Lounge</h3>
        </div>

        <div className='city-card'>
          <BiRestaurant className='icon-city' color={'#777777'}/>
          <h3>Rooftop Fine Dine Restaurant</h3>
        </div>

        <div className='city-card'>
          <CgGym className='icon-city' color={'#777777'}/>
          <h3>Luxury Health and Fitness Club</h3>
        </div>
        
      </div>

      <div style={{marginTop:'30px'}} className='btn-area'>
          <Link href={'/amenities/#amenities'}>
            <button className="btn">check out more</button>
          </Link>
          </div>

    </div>
  )
}

export default City