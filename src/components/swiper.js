import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import { Container, Row, Col } from 'react-bootstrap'; // Using Grid from Bootstrap

export default function IconComponent() {
  return (
    <Container className="mt-3 w-75">
      <Row className="text-center">
        {/* Horizontal scroll on mobile devices */}
        <div className="d-flex overflow-auto flex-nowrap">
          {/* دورة تدريبية */}
          <Col xs={6} sm={6} md={3} className="p-1">
            <div className="rounded hover-effect">
              <i className="bi bi-book" style={{ fontSize: '30px', color: '#333' }}></i>
              <p>الدورات التدريبية</p>
            </div>
          </Col>

          {/* فيديوهات */}
          <Col xs={6} sm={6} md={3} className="p-1">
            <div className="rounded hover-effect">
              <i className="bi bi-camera-video" style={{ fontSize: '30px', color: '#333' }}></i>
              <p>الفيديوهات</p>
            </div>
          </Col>

          {/* تقييمات */}
          <Col xs={6} sm={6} md={3} className="p-1">
            <div className="rounded hover-effect">
              <i className="bi bi-star" style={{ fontSize: '30px', color: '#333' }}></i>
              <p>التقييمات</p>
            </div>
          </Col>

          {/* طلاب */}
          <Col xs={6} sm={6} md={3} className="p-1">
            <div className="rounded hover-effect">
              <i className="bi bi-person-lines-fill" style={{ fontSize: '30px', color: '#333' }}></i>
              <p>الطلاب</p>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
