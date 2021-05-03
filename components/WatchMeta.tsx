import { FunctionComponent } from 'react';
import { WatchMetaProp } from '../interfaces/movie.interface';
import { Box, ListItem, Text, List } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WatchMeta: FunctionComponent<WatchMetaProp> = ({ movie }) => {
  return (
    <Box width="100%" bg="#151515" paddingLeft="100px" color="#ffffff">
      <Box
        display="flex"
        max-width="90%"
        minw="90%"
        w="90%"
        m="auto"
        padding="8vh 0"
        overflow="hidden"
      >
        {/* Poster */}
        <LazyLoadImage
          alt={movie.original_title}
          effect="opacity"
          width="350px"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
        {/* Movie Meta */}
        <Box ml="3em" mr="1rem">
          <Text fontSize="3xl" fontWeight="bold">
            Storyline
          </Text>
          <Text fontSize="large">{movie.overview}</Text>
          {/* Additional Details */}
          <List mt="1rem">
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Released
              </Box>
              <Box flex={10}>{new Date(movie.release_date).toDateString()}</Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Runtime
              </Box>
              <Box flex={10}>{movie.runtime} minutes</Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Director
              </Box>
              <Box flex={10}>{movie.release_date}</Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Genres
              </Box>
              <Box flex={10}>
                {movie.genres.map((g, index) => (
                  <Text key={g.id} as="span">
                    {index === movie.genres.length - 1 ? g.name : `${g.name}, `}
                  </Text>
                ))}
              </Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Status
              </Box>
              <Box flex={10}>{movie.status}</Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Language
              </Box>
              <Box flex={10}>{movie.spoken_languages[0].name}</Box>
            </ListItem>
            <ListItem display="flex" padding="5px 0">
              <Box flex={2} maxw="110px" marginRight="1.5rem">
                Productions
              </Box>
              <Box flex={10}>
                {movie.production_companies.map((p, index) => (
                  <Text key={p.id} as="span">
                    {index === movie.production_companies.length - 1
                      ? p.name
                      : `${p.name}, `}
                  </Text>
                ))}
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchMeta;
