import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Educity was one of 
                        the best decisions I've ever made. The supportive 
                        community, state-of-art facilities, and commitment 
                        to academic excellence have truly exceeded my 
                        expectations.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Daniel Rodriguez</h3>
                            <span>Educity, Australia</span>
                        </div>
                    </div>
                    <p>Educity provides an outstanding academic experience with  
                        innovative courses and a vibrant campus life. The faculty's  
                        guidance and the wealth of resources available have made  
                        a significant impact on my education.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Carter</h3>
                            <span>Educity, Canada</span>
                        </div>
                    </div>
                    <p>My experience at Educity has been absolutely transformative.  
                        The diverse learning environment, experienced faculty, the 
                        provided resources and endless opportunities for growth 
                        have prepared me for a successful future.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Sophia Patel</h3>
                            <span>Educity, UK</span>
                        </div>
                    </div>
                    <p>Studying at Educity has been an incredible journey. The  
                        professors genuinely care about students' success, and the  
                        hands-on approach to learning has given me the confidence  
                        to achieve my goals. This has also provided me endless opportunities.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
