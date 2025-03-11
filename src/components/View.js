'use client'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Videos from './videos'
import IconComponent from './swiper'
import CourseDetails from './CourseDetails'
import CommentsSection from './CommentsSection'
import Range from './reang'
import Section from './sectionweek'

import  '../styles/Home.module.css'
export default function Nave() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section >
      <Header />
      {windowWidth <= 750 && (
   <>
   < Videos />
           < IconComponent />
           
           
           < CourseDetails />
           < Range />

           < Section />
           
           < CommentsSection />
   </>
      
    )}
      {windowWidth >= 750 && (
        <div className='content d-flex py-3 px-5'>
          <section className='w-75 '>       
        < Videos />
        < IconComponent />
        < CourseDetails />
        < CommentsSection />



          </section>
          <section className='w-25'>    
          < Range />
          < Section />
          </section>
        </div>
        
      )}
    </section>
  );
}
