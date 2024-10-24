import React from 'react';

const Video = () => {
  return (
    <div className='mb-3 mt-5 w-full'>
      <iframe
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/Okjz1CmhLSw?si=MhZvWsEMTzUAZ_EB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;