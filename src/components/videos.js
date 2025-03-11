import React from 'react';

export default function Videos() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-11">
          <iframe
            width="100%"  // تأكد من أن الفيديو سيأخذ العرض الكامل للعمود
            height="445"
            src="https://www.youtube.com/embed/VeBARRO1Eqo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="d-block mx-auto" // توسيط الفيديو
          ></iframe>
        </div>
      </div>
    </div>
  );
}
