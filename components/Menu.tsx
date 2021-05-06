import { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

// SVG Icons
import HomeIcon from '../public/home.svg';
import MovieIcon from '../public/movie.svg';
import TVIcon from '../public/tv.svg';
import SearchIcon from '../public/search.svg';
import { useRouter } from 'next/router';

const Menu: FunctionComponent<{}> = () => {
  const router = useRouter();
  return (
    <StyledMenu>
      <IconButton asPath={router.asPath} href="/">
        <HomeIcon />
      </IconButton>
      <IconButton asPath={router.asPath} href="/watch">
        <MovieIcon />
      </IconButton>
      <IconButton asPath={router.asPath} href="/tv">
        <TVIcon />
      </IconButton>
      <IconButton asPath={router.asPath} href="#">
        <SearchIcon />
      </IconButton>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100px;
  min-width: 100px;
  height: 100vh;
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  overflow: hidden;
  position: fixed;
  top: 0;
  line-height: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
`;

const IconButton = styled.a<{ asPath: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  svg {
    stroke: ${({ asPath, href }) => (asPath === href ? '#2196f3' : '#ffffff')};
    transition: opacity 0.3s ease-in;
  }
  svg:hover {
    opacity: 0.9;
  }
`;

export default Menu;
