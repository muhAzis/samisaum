import React from 'react';
import { ImageResponse } from 'next/og';

const Image = async () => {
  return new ImageResponse(<div style={{ backgroundColor: 'var(--clr-purple)' }}>Samisaum</div>, {
    width: 1280,
    height: 720,
  });
};

export default Image;
