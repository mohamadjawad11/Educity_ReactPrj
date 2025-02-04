import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider=useRef();
  const next_btn=useRef();
  const back_btn=useRef();
  let tx=0;

  const handleMouseDown = () => {
    next_btn.current.style.backgroundColor = '#0b1258'; 
  };
  
  const handleMouseUp = () => {
    next_btn.current.style.backgroundColor = ''; 
  };

  const handleMouseDown2 = () => {
    back_btn.current.style.backgroundColor = '#0b1258'; 
  };
  
  const handleMouseUp2 = () => {
    back_btn.current.style.backgroundColor = ''; 
  };


  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  };

  const slideBackward=()=>{
    if(tx <0){
      tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }



  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} ref={next_btn}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} onMouseUp={handleMouseUp2} onMouseDown={handleMouseDown2} ref={back_btn}/>

      <div className='slider'>

        <ul ref={slider}>
        <li>
  <div className='slide'>
    <div className='user-info'>
      <img src={user_1} alt='' />
      <div>
        <h3>Katy Jackson</h3>
        <span>Educity, USA</span>
      </div>
    </div>
    <p>William Jackson here! Studying at Edusity has been a transformative experience. The professors are incredibly knowledgeable, and the campus environment fosters both personal and academic growth.</p>
  </div>
</li>

<li>
  <div className='slide'>
    <div className='user-info'>
      <img src={user_2} alt='' />
      <div>
        <h3>Mike Loren</h3>
        <span>Educity, USA</span>
      </div>
    </div>
    <p>Emily Williams speaking! Edusity has provided me with endless opportunities to explore my passions. The hands-on learning approach and collaborative projects have prepared me for real-world challenges.</p>
  </div>
</li>

<li>
  <div className='slide'>
    <div className='user-info'>
      <img src={user_3} alt='' />
      <div>
        <h3>Emily Williams</h3>
        <span>Educity, USA</span>
      </div>
    </div>
    <p>Mike Loren here! The diversity and inclusivity at Edusity are unparalleled. I’ve made lifelong friends and connections while gaining a world-class education that has set me up for success.</p>
  </div>
</li>

<li>
  <div className='slide'>
    <div className='user-info'>
      <img src={user_4} alt='' />
      <div>
        <h3>Jackson Pedro</h3>
        <span>Educity, USA</span>
      </div>
    </div>
    <p>Jackson Pedro reporting! Edusity’s innovative curriculum and cutting-edge resources have allowed me to thrive academically. I’m grateful for the mentorship and support I’ve received here.</p>
  </div>
</li>
        </ul>

      </div>

    </div>
  )
}

export default Testimonials
