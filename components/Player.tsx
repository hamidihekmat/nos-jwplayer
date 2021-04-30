import ReactJWPlayer from 'react-jw-player';
import { useJWPlayer } from '../hooks/useJWPlayer';
import { Playlist } from '../interfaces/playlist.interface';

const Player = (playlist: Playlist) => {
  const [onReady] = useJWPlayer(playlist);
  return (
    <ReactJWPlayer
      playerId="player"
      playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
      playlist={[playlist]}
      onReady={onReady}
    />
  );
};

export default Player;
