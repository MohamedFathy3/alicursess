// components/Section.js

import styles from '../styles/Home.module.css';

const Section = ({ title, content, imageUrl, videoUrl }) => {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
      {videoUrl && (
        <video className={styles.video} autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{content}</p>
    </div>
  );
};

export default Section;
