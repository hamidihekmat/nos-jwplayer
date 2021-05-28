import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { ScrollableContainer } from '../components/ReusableStyles';

const playlist: Playlist = {
  title: 'Guardians of the Galaxy',
  description:
    'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
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
    'https://m.media-amazon.com/images/M/MV5BMTEwNTM0MDIxNjleQTJeQWpwZ15BbWU4MDgwMjkzMjIx._V1_.jpg',
  tracks: [
    {
      file: 'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt2015381',
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
