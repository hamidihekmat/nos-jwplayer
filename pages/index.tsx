// import Head from 'next/head';
import Player from '../components/Player';

import { Playlist } from '../interfaces/playlist.interface';

const playlist: Playlist = {
  title: 'Ratatouille',
  description:
    'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/1GklB6QzqqWMxlRCw9MLpyKgQxokyv2yV',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/1GklB6QzqqWMxlRCw9MLpyKgQxokyv2yV',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image:
    'https://m.media-amazon.com/images/M/MV5BMTU3ODA3MTQ3NV5BMl5BanBnXkFtZTcwMzA5MzMzMw@@._V1_.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt0382932',
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
