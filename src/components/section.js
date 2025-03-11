import React, { useState } from 'react';

export default function Section() {
  // حالة لإدارة ظهور أو اختفاء المحتوى لكل قسم
  const [isOpen, setIsOpen] = useState({
    sectionOne: false,
    sectionTwo: false,
  });

  // دالة لتبديل حالة القسم عند النقر على الزر
  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="py-5">
    <div className="container mt-5 bg-white border w-100 text-start h-100">
        <h2>Week 1-4</h2>
        <p style={{ color: '#ddd' }} className="border-bottom">
          Advanced storytelling techniques for writers: Personas, Characters & Plots
        </p>

        <div>
          {/* First item: Introduction */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',

              fontSize:'12px',
              fontWeight:500


            }}
          >
            <div>
              <i className="bi bi-book"></i> <span>Introduction</span>
            </div>
            <i class="bi bi-lock"></i>          </div>

          {/* Second item: Next */}
          <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
    fontSize: '12px',
    fontWeight: 500,
    alignItems: 'center', // Ensures vertical alignment of items
  }}
>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <i className="bi bi-book"></i> <span style={{ marginLeft: '5px', }}>Course Overview</span>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h2 className="fs-6  p-1 me-2" style={{ borderRadius: '5px', background:'#e0f7fa', color:'#00796b' }}>
      2 QUESTION
    </h2>
    <h2 className="fs-6  p-1 me-2" style={{ borderRadius: '5px', background: '#ffebee', color:'#d32f2f' }}>
      10 MINUTES
    </h2>
  </div>
</div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',

              fontSize:'12px',
              fontWeight:500


            }}
          >
            <div>
              <i className="bi bi-book"></i> <span>Course Overview</span>
            </div>
            <i class="bi bi-lock"></i>          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',

              fontSize:'12px',
              fontWeight:500


            }}
          >
            <div>
              <i className="bi bi-book"></i> <span>Course Exercise / Reference Files</span>
            </div>
            <i class="bi bi-lock"></i>          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',

              fontSize:'12px',
              fontWeight:500


            }}
          >
            <div>
              <i className="bi bi-book"></i> <span>Code Editor Installation (Optional if you have one)</span>
            </div>
            <i className="bi bi-book"></i>
          </div>


          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',

              fontSize:'12px',
              fontWeight:500


            }}
          >
            <div>
              <i className="bi bi-book"></i> <span>Embedding PHP in HTML

</span>
            </div>
            <i class="bi bi-lock"></i>          </div>
        </div>
      </div>

      {/* 2 Divs تحت الـ container */}
      <div className="container mt-5 bg-white border w-100 text-start">
        {/* القسم الأول: Section 1 */}
        <div style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
          <span>Learning</span>
          <button
            onClick={() => toggleSection('sectionOne')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00796b',
              cursor: 'pointer',
              fontSize: '20px',
              marginLeft: '20px', // Add space between the text and the icon
            }}
          >
            {isOpen.sectionOne ? '-' : '+'}
          </button>
        </div>

        {isOpen.sectionOne && (
          <div style={{ padding: '10px 0' }}>
            <p>سواء كنت في المنزل أو في العمل، يمكنك التعلم في أي وقت يناسبك. لدينا دورات مرنة تناسب جدولك الزمني.</p>
            <p>لفرص تأتي لأولئك الذين يواصلون التعلم. سهلنا عليك الوصول إلى أفضل الدورات التعليمية لتطوير مهاراتك والتميز في مجالك.</p>
          </div>
        )}

        {/* القسم الثاني: Section 2 */}
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Incentivize</span>
          <button
            onClick={() => toggleSection('sectionTwo')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00796b',
              cursor: 'pointer',
              fontSize: '20px',
              marginLeft: '20px', // Add space between the text and the icon
            }}
          >
            {isOpen.sectionTwo ? '-' : '+'}
          </button>
        </div>

        {isOpen.sectionTwo && (
          <div style={{ padding: '10px 0' }}>
            <p>كل خطوة تخطوها في تعلم شيء جديد تقربك من أهدافك. انضم الآن إلى الكورسات الخاصة بنا وابدأ رحلتك نحو النجاح</p>
            <p>التعلم ليس مجرد عملية، بل هو استثمار في مستقبلك. اختر الكورس الذي يناسبك وابدأ في بناء مستقبلك الآن.</p>
          </div>
        )}
      </div>
    </section>
  );
}
