'use client'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header'
import Videos from '../DesktopView/components/videos'
import IconComponent from '../DesktopView/components/swiper'
import CourseDetails from '../DesktopView/components/CourseDetails'
import CommentsSection from '../DesktopView/components/CommentsSection'
import  '../../styles/Home.module.css'
export default function Nave() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // تحديث حالة العرض عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section >
      <Header />
      
      {windowWidth >= 750 && (
        <div className='content d-flex py-3 px-5'>
          <section className='w-75 '>       
        < Videos />
        < IconComponent />
        < CourseDetails />
        < CommentsSection />



          </section>
          <section className='w-25'>    
                  <h1>hello</h1>
          </section>
        </div>
        
      )}
    </section>
  );
}
