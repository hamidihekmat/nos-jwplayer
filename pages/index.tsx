// import Head from 'next/head';
import Player from '../components/Player';

import { Playlist } from '../interfaces/playlist.interface';

const playlist: Playlist = {
  title: 'Stowaway',
  description:
    'A stowaway on a mission to Mars sets off a series of unintended consequences.',
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

  image:
    'https://m.media-amazon.com/images/M/MV5BZDkxYzYwMjAtYjM0MS00YThlLWFmNzctM2E0ZGJkMThkYjU1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt9203694',
      label: 'English',
      kind: 'subtitles',
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Player playlist={playlist} />
    </div>
  );
}
