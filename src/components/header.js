'use client'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
      <nav aria-label="breadcrumb" className='w-100 ml-5 py-3'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" className="text-dark p-2 m-1" style={{ textDecoration: 'none' }}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="p-2 m-1" style={{ textDecoration: 'none' }}>Course</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Course Details</li>
        </ol>

        <h2>
          Stating SEO as your Home 
          {/* إذا كان عرض الشاشة بين 200 و 450، أضف نصًا إضافيًا */}
          {windowWidth >= 200 && windowWidth <= 450 && <span>  Based Business</span>}
        </h2>
      </nav>
    </>
  );
}
