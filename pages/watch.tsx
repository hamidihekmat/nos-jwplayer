import JWPlayer from '../components/JWPlayer';
import { Playlist } from '../interfaces/player.interface';
import { ScrollableContainer } from '../components/ReusableStyles';
import WatchDetails from '../components/WatchDetails';
import { movie } from '../utils/data';

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
    <ScrollableContainer>
      <JWPlayer playlist={playlist} />
      <WatchDetails movie={movie} />
    </ScrollableContainer>
  );
}

export default watch;
