import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // تأكد من أنك تستخدم Bootstrap
import { Container, Row, Col } from 'react-bootstrap';  // استخدام Grid من Bootstrap

export default function IconComponent() {
  return (
    <Container className="mt-3 w-75">
      <Row className="text-center">
        {/* أيقونة الدورة التدريبية */}
        <Col xs={12} sm={6} md={3}>
          <div className="p-1 rounded  hover-effect">
            <i className="bi bi-book" style={{ fontSize: '30px', color: '#333' }}></i>
            <p>الدورات التدريبية</p>
          </div>
        </Col>

        {/* أيقونة الفيديوهات */}
        <Col xs={12} sm={6} md={3}>
          <div className="p-1 rounded  hover-effect">
            <i className="bi bi-camera-video" style={{ fontSize: '30px', color: '#333' }}></i>
            <p>الفيديوهات</p>
          </div>
        </Col>

        {/* أيقونة التقييمات */}
        <Col xs={12} sm={6} md={3}>
          <div className="p-1 rounded  hover-effect">
            <i className="bi bi-star" style={{ fontSize: '30px', color: '#333' }}></i>
            <p>التقييمات</p>
          </div>
        </Col>

        {/* أيقونة الطلاب */}
        <Col xs={12} sm={6} md={3}>
          <div className="p-1 rounded  hover-effect">
            <i className="bi bi-person-lines-fill" style={{ fontSize: '30px', color: '#333' }}></i>
            <p>الطلاب</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
