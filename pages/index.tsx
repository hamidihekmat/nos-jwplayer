// import Head from 'next/head';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <StyledHome>
      <h1>Hello Worlds</h1>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding-left: 100px;
`;
