'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function Range() {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // إنشاء مراقب التقاطع (Intersection Observer)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // عندما يدخل العنصر في العرض (viewport)
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // يتم تفعيل المشاهدة عندما يكون 50% من العنصر داخل العرض
      }
    );

    // مراقبة العنصر
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    // تنظيف المراقب عند إلغاء التحميل
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // عند تفعيل isVisible، نقوم بتعبئة شريط التقدم
    if (isVisible && progressBarRef.current) {
      progressBarRef.current.style.width = '63%'; // هنا يمكنك تحديد القيمة بناءً على بياناتك
    }
  }, [isVisible]);

  return (
    <>
      <div style={{ fontSize: 30, fontWeight: 600 }}>
        Topic for this Course
      </div>
      <div
        className="position-relative"
        style={{ width: '100%', height: '30px', top: 50 }}
        ref={progressRef}
      >
        {/* Progress Bar */}
        <div
          className="progress"
          role="progressbar"
          aria-label="Progress example"
          aria-valuenow="63"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: '25%', backgroundColor: '#e0e0e0' }}
        >
          <div
            ref={progressBarRef}
            className="progress-bar bg-success"
            style={{
              height: '100%',
              width: '0%', // يبدأ عرض شريط التقدم من 0%
              transition: 'width 2s ease-out', // تأثير الانتقال (transition) مع وقت قدره 2 ثانية
            }}
          ></div>
        </div>

        {/* Percentage Circle above the progress bar */}
        {isVisible && (
          <div
            className="position-absolute"
            style={{
              top: '-58px', // Move the circle above the progress bar
              left: '63%', // Place it at the 63% width point
              transform: 'translateX(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              border: '1px solid #ddd',
            }}
          >
            63%
          </div>
        )}

        {/* Triangle pointing downwards to the progress bar */}
        {isVisible && (
          <div
            className="position-absolute"
            style={{
              top: '-15px', // Move the triangle closer to the circle
              left: '63%', // Align with the circle's position
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #ddd', // Make the triangle point downward
            }}
          ></div>
        )}
      </div>
    </>
  );
}
