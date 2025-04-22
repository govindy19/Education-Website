import React from 'react'
import './Campus.css';
import galary_1 from '../../assests/gallery-1.png';
import galary_2 from '../../assests/gallery-2.png';
import galary_3 from '../../assests/gallery-3.png';
import galary_4 from '../../assests/gallery-4.png';
import white_arrow from '../../assests/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        

        < div className='gallery'>
            <img src={galary_1} alt=''/>
            <img src={galary_2} alt='' />
            <img src={galary_3} alt='' />
            <img src={galary_4} alt='' />
            </div>
            
                <button className='btn dark-btn'>See More here <img src={white_arrow} alt="" /></button>


               
      
    </div>
  )
}

export default Campus
