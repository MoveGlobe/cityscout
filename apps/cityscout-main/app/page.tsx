'use client';

import styled from 'styled-components';
import Image from 'next/image';
import img from './placeholder.jpg';

const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    height: 100%;
    width: 100%;
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Image src={img} alt="Coming Soon" />
    </StyledPage>
  );
}
