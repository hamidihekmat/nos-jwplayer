// import Head from 'next/head';
import Player from '../components/Player';

import { Playlist } from '../interfaces/playlist.interface';

const playlist: Playlist = {
  title: 'The Courier',
  description:
    'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/19O52LkQtNb7MzqAJOsMfI6nQHtZcmmTh',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/19O52LkQtNb7MzqAJOsMfI6nQHtZcmmTh',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image:
    'https://m.media-amazon.com/images/M/MV5BODBlMzlkYTYtMjJhOC00MjY3LWI1ZDItNGRiNDkxNjIwZGVjXkEyXkFqcGdeQXVyNTE2Mzc2MDI@._V1_.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt8368512',
      label: 'English',
      kind: 'subtitles',
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Player {...playlist} />
    </div>
  );
}
