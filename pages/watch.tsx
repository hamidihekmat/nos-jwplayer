import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { ScrollableContainer } from '../components/ReusableStyles';

const playlist: Playlist = {
  title: 'Friends: The Reunion',
  description: 'Original title: Friends Reunion Special',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/1Gy4G8cr2c9XhYhIMOeHspdU9UK3vVUDM',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/1Gy4G8cr2c9XhYhIMOeHspdU9UK3vVUDM',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image:
    'https://m.media-amazon.com/images/M/MV5BYjIxZjA1OTEtMDliNi00ZWE0LTkyZjgtMzlhMjVjMzFhYzEwXkEyXkFqcGdeQXVyNDU3OTQ0Mzg@._V1_.jpg',
  tracks: [
    {
      file: 'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt11337862',
      label: 'English',
      kind: 'captions',
    },
  ],
};

function watch() {
  return (
    <ScrollableContainer>
      <JWPlayer playlist={playlist} />
      {/* <WatchDetails movie={sherlock} /> */}
    </ScrollableContainer>
  );
}

export default watch;
