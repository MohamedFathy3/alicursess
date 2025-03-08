import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // تأكد من أنك تستخدم Bootstrap

export default function CommentsSection() {
  const [comment, setComment] = useState('');
  
  // تابع لإرسال التعليق
  const handleCommentSubmit = () => {
    console.log('New comment submitted:', comment);
    setComment('');
  };

  return (
    <section className="bg-white py-5">
      <div className="container">
        {/* عنوان قسم التعليقات */}
        <h2 className="text-center mb-5">User Comments</h2>

        {/* عرض التعليقات */}
        <div className="comment mb-4 p-3  rounded " style={{ paddingTop: 10, paddingBottom: 10, borderBottom: '3px solid #555' }}>
          <div className="d-flex align-items-center mb-3">
            {/* صورة المستخدم */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s" // المسار النسبي للصور داخل public
              alt="User Image"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div className='px-3'>
              <strong>John Doe</strong>
              <p className="text-muted mb-0">2 hours ago</p>
            </div>
          </div>
          <p className="comment-text px-5">
            This course is fantastic! I learned a lot and the content is very engaging.
          </p>
        </div>

        <div className="comment mb-4 p-3  rounded " style={{ paddingTop: 10, paddingBottom: 10, borderBottom: '3px solid #555' }}>
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s" // المسار النسبي للصور داخل public
              alt="User Image"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div className='px-3'>
              <strong>Jane Smith</strong>
              <p className="text-muted mb-0">1 day ago</p>
            </div>
          </div>
          <p className="comment-text px-5">
            Amazing course! The instructor explained everything in detail. Highly recommended!
          </p>
        </div>

        <div className="comment mb-4 p-3  rounded " style={{ paddingTop: 10, paddingBottom: 10, borderBottom: '3px solid #555' }}>
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAWoy_Fdxlb442YoM02jztHecjnrfwQOVGA&s" // المسار النسبي للصور داخل public
              alt="User Image"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div className='px-3'>
              <strong>Alex Johnson</strong>
              <p className="text-muted mb-0">3 days ago</p>
            </div>
          </div>
          <p className="comment-text px-5">
            A lot of useful information in this course. I would love to see more topics in the future!
          </p>
        </div>


        {/* نموذج إضافة تعليق */}
        <div className="form-group">
          <textarea
            className="form-control shadow -sm"
            rows="8"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
  className="btn btn-success mt-3 py-3"
  onClick={handleCommentSubmit}
  disabled={!comment.trim()} // تعطيل الزر إذا لم يكن هناك تعليق
>
  Submit Review {'--> '} {/* استخدام قوس معقود لإضافة السهم */}
</button>

      </div>
    </section>
  );
}
