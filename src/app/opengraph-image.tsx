import React from 'react';
import { ImageResponse } from 'next/og';

const Image = async () => {
  return new ImageResponse(
    (
      <div style={{ width: 1280, height: 720, backgroundColor: '#4530b3' }}>
        <img src="/opengraph-image.png" alt="samisaum" />
      </div>
    ),
    {
      width: 1280,
      height: 720,
    }
  );
};

export default Image;
