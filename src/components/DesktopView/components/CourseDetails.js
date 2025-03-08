import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // تأكد من أنك تستخدم Bootstrap
import { Row, Col } from 'react-bootstrap';  // استخدام Grid من Bootstrap
import { BiTime, BiBook, BiUser, BiGlobe } from 'react-icons/bi';  // استخدام أيقونات من React Icons
import { relative } from 'path';

export default function CourseDetails() {
  return (
    <section className="bg-white py-5">
        <h2 className="py-2 mb-5">Course Information</h2>

      <div className="container shadow -sm " style={{width:'85%', position:relative,}}>
        {/* عنوان السكشن */}

        {/* صف الجداول */}
        <Row>
          {/* الجدول الأول */}
          <Col md={6}>
            <div className="  p-5 mb-3">
              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}} >
                <div className="d-flex align-items-center" >
                  <BiTime style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Duration</span>
                </div>
                <div>3 Weeks</div>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}}>
                <div className="d-flex align-items-center">
                  <BiUser style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Enrolled</span>
                </div>
                <div>65 Students</div>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}}>
                <div className="d-flex align-items-center">
                  <BiBook style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Lessons</span>
                </div>
                <div>8 Lessons</div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center opacity-50">
                  <BiGlobe style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Language</span>
                </div>
                <div>English</div>
              </div>
            </div>
          </Col>

          {/* الجدول الثاني */}
          <Col md={6}>
            <div className=" p-5 mb-3">
              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}}>
                <div className="d-flex align-items-center">
                  <BiTime style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Duration</span>
                </div>
                <div>3 Weeks</div>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}}>
                <div className="d-flex align-items-center">
                  <BiUser style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Enrolled</span>
                </div>
                <div>65 Students</div>
              </div>

              <div className="d-flex justify-content-between mb-2" style={{      paddingTop:10, paddingBottom:10,opacity: .6  ,borderBottom: '3px solid #555 ', // يضيف حد سفلي بسمك 3px ولون أزرق
}}>
                <div className="d-flex align-items-center">
                  <BiBook style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Lessons</span>
                </div>
                <div>8 Lessons</div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center opacity-50">
                  <BiGlobe style={{ fontSize: '30px', color: '#333',  }} />
                  <span className="ms-2">Language</span>
                </div>
                <div>English</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
