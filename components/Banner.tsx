import React from 'react';
import { ScrollableContainer } from '../components/ReusableStyles';
import LazyImage from '../components/LazyImage';
import styled from '@emotion/styled';
import { movie } from '../utils/data';

function Banner() {
  return (
    <Container>
      <BannerContainer>
        <BannerInfo>
          <h1>{movie.title}</h1>
          <div>
            <span>{movie.vote_average}</span>{' '}
            <span>{movie.vote_count} Reviews</span>{' '}
            <span>{movie.runtime} minutes</span>
          </div>
        </BannerInfo>
        <Box />
        <ImageBox>
          <LazyImage
            alt={movie.title}
            width={1294}
            height={728}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
          <ImageOverlay />
        </ImageBox>
      </BannerContainer>
    </Container>
  );
}

const Container = styled(ScrollableContainer)`
  padding-left: 100px;
`;

const BannerContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  height: 728px;
  width: calc(100vw -100px);
  position: relative;
  overflow: hidden;
`;

const BannerInfo = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  min-width: 783px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
  h1 {
    font-size: 2.93em;
    margin: 0.3em 0;
  }
  span {
    font-size: 1.2em;
  }
`;

const Box = styled.div`
  min-width: 525px;
`;

const ImageBox = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  background-image: linear-gradient(to right, #000000, transparent);
  z-index: 99;
  width: 100%;
  height: 728px;
`;

export default Banner;
