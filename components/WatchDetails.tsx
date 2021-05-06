import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { WatchDetailsProp } from '../interfaces/movie.interface';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const WatchDetails: FunctionComponent<WatchDetailsProp> = ({ movie }) => {
  return (
    <StyledWatchContainer>
      {/* Poster */}
      <StyledMovieDetails>
        <LazyLoadImage
          alt={movie.original_title}
          effect="blur"
          width="350px"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
        <StyledMovieMeta>
          <Title>Storyline</Title>
          <Overview>{movie.overview}</Overview>
          <List>
            <ListItem>
              <Key>Released</Key>
              <Value>{new Date(movie.release_date).toDateString()}</Value>
            </ListItem>
            <ListItem>
              <Key>Runtime</Key>
              <Value>{movie.runtime} minutes</Value>
            </ListItem>
            <ListItem>
              <Key>Genres</Key>
              <Value>
                {movie.genres.map((g, index) => (
                  <span key={g.id}>
                    {index === movie.genres.length - 1 ? g.name : `${g.name}, `}
                  </span>
                ))}
              </Value>
            </ListItem>
            <ListItem>
              <Key>Language</Key>
              <Value>{movie.spoken_languages[0].name}</Value>
            </ListItem>
          </List>
          <ListItem>
            <Key>Productions</Key>
            <Value>
              {movie.production_companies.map((p, index) => (
                <span key={p.id}>
                  {index === movie.production_companies.length - 1
                    ? p.name
                    : `${p.name}, `}
                </span>
              ))}
            </Value>
          </ListItem>
        </StyledMovieMeta>
      </StyledMovieDetails>
    </StyledWatchContainer>
  );
};

const StyledWatchContainer = styled.div`
  padding-left: 100px;
  margin: auto;
  padding: 8vh 0;
  overflow: hidden;
  width: 100%;
  background-color: #151515;
`;

const StyledMovieDetails = styled.div`
  display: flex;
  min-width: 90%;
  width: 90%;
  max-width: 90%;
  margin: auto;
  overflow: hidden;
  padding: 0 5vw;
`;

const StyledMovieMeta = styled.div`
  margin: 0 1em 0 3em;
  line-height: 2.3em;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Overview = styled.h3`
  font-weight: normal;
`;

const List = styled.ul`
  margin-top: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  padding: 5px 0;
  font-size: 1em;
`;

const Key = styled.div`
  max-width: 110px;
  flex: 2;
`;

const Value = styled.div`
  flex: 10;
`;

export default WatchDetails;
