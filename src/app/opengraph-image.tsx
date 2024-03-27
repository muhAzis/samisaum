import React from 'react';
import { ImageResponse } from 'next/og';

const Image = async () => {
  return new ImageResponse(<div style={{ backgroundImage: "url('/opengraph-image.png')", backgroundColor: 'var(--clr-purple)' }}>Samisaum</div>, {
    width: 1280,
    height: 720,
  });
};

export default Image;
