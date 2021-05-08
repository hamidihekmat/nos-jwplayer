import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { ScrollableContainer } from '../components/ReusableStyles';
import WatchDetails from '../components/WatchDetails';
import { newMovie } from '../utils/data';

const playlist: Playlist = {
  title: 'In the Earth',
  description:
    'As the world searches for a cure to a disastrous virus, a scientist and park scout venture deep in the forest for a routine equipment run.',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/1D02T0C4zfY16nCPjJU4luYaMaNA8pMKH',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/1D02T0C4zfY16nCPjJU4luYaMaNA8pMKH',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image: 'https://image.tmdb.org/t/p/original/vviYFL6bT0p2AkXI1WIKC2y0rRl.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt13429362',
      label: 'English',
      kind: 'captions',
    },
  ],
};

function watch() {
  return (
    <ScrollableContainer>
      <JWPlayer playlist={playlist} />
      <WatchDetails movie={newMovie} />
    </ScrollableContainer>
  );
}

export default watch;
