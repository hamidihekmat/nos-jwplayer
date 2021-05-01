// import Head from 'next/head';
import Player from '../components/Player';

import { Playlist } from '../interfaces/playlist.interface';

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

  image:
    'https://m.media-amazon.com/images/M/MV5BZDkxYzYwMjAtYjM0MS00YThlLWFmNzctM2E0ZGJkMThkYjU1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg',
  tracks: [
    {
      file:
        'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt0499097',
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
