'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import img from '../public/placeholder.jpg';

const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
  }
`;

export default function Index() {
  return (
    <StyledPage>
      <Image src={img} alt="Coming Soon" />
    </StyledPage>
  );
}
