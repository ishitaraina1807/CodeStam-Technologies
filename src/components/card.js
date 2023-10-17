import React from 'react'
import avatar from '../avatar.png'
import facebook from '../components/images/facebook.png'
import linkedin from '../components/images/linkedin.png'
import instagram from '../components/images/instagram.png'

export default function Card() {
  return (
      <div className='section' >
        <div className=''>
          <img src={avatar} alt='avatar' />
        </div>
        <div className=''>
          <h1>
          Lorem ipsum
          </h1>
          <h2>
            General Manager
          </h2>
          <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <div className='flex w-[30px]'>
         <img src={facebook} alt='facebook'/>
         <img src={instagram} alt='instagram'/>
         <img src={linkedin} alt='linkedin'/>
          </div>
        </div>
      </div>
  )
}
