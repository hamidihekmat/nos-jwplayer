import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { Movie } from '../interfaces/movie.interface';
import styled from '@emotion/styled';
import WatchDetails from '../components/WatchDetails';

// Temporary Movie
const movie: Movie = {
  adult: false,
  backdrop_path: '/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
  ],
  homepage: 'https://www.amazon.com/dp/B08VFD1Y3B',
  id: 567189,
  imdb_id: 'tt0499097',
  original_language: 'en',
  original_title: "Tom Clancy's Without Remorse",
  overview:
    'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
  popularity: 359.439,
  poster_path: '/6GCOpT8QcNzup09TAMmvvk22LTR.jpg',
  production_companies: [
    {
      id: 4,
      logo_path: '/fycMZt242LVjagMByZOLUGbCvv3.png',
      name: 'Paramount',
      origin_country: 'US',
    },
    {
      id: 433,
      logo_path: null,
      name: 'Weed Road Pictures',
      origin_country: 'US',
    },
    {
      id: 82819,
      logo_path: '/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png',
      name: 'Skydance Media',
      origin_country: 'US',
    },
    {
      id: 51593,
      logo_path: null,
      name: 'Midnight Radio',
      origin_country: 'US',
    },
    {
      id: 102334,
      logo_path: '/espa8KYmHedu5p7GRrP9FFICLUp.png',
      name: 'Outlier Society Productions',
      origin_country: 'US',
    },
    {
      id: 114732,
      logo_path: '/tNCbisMxO5mX2X2bOQxHHQZVYnT.png',
      name: 'New Republic Pictures',
      origin_country: 'US',
    },
    {
      id: 20580,
      logo_path: '/tkFE81jJIqiFYPP8Tho57MXRQEx.png',
      name: 'Amazon Studios',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2021-04-29',
  revenue: 0,
  runtime: 109,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: '',
  title: "Tom Clancy's Without Remorse",
  video: false,
  vote_average: 7.2,
  vote_count: 314,
};

const playlist: Playlist = {
  title: "Tom Clancy's Without Remorse",
  description:
    "John Clark, a Navy SEAL, goes on a path to avenge his wife's murder only to find himself inside of a larger conspiracy.",
  sources: [
    {
      file: 'https://fast.noss.workers.dev/17QYnb2rDQOpg57zHPOeyMyDRVcQ-jH-R',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/17QYnb2rDQOpg57zHPOeyMyDRVcQ-jH-R',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image: 'https://image.tmdb.org/t/p/original/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt0499097',
      label: 'English',
      kind: 'subtitles',
    },
  ],
};

function watch() {
  return (
    <StyledWatch>
      <JWPlayer playlist={playlist} />
      <WatchDetails movie={movie} />
    </StyledWatch>
  );
}

const StyledWatch = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #000000;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default watch;
