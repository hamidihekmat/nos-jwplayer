import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { ScrollableContainer } from '../components/ReusableStyles';
import WatchDetails from '../components/WatchDetails';
import { newMovie } from '../utils/data';

const playlist: Playlist = {
  title: 'Sherlock Holmes',
  description:
    'Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/1im1k0cjdS8JpAyWSb8DHQF4unZk1PGIR',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/1im1k0cjdS8JpAyWSb8DHQF4unZk1PGIR',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image: 'https://image.tmdb.org/t/p/original/veXdzn7LL0bFIDGmE7tTkvRg0qV.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt0988045',
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
