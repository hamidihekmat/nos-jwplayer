import ReactJWPlayer from 'react-jw-player';
import { useJWPlayer } from '../hooks/useJWPlayer';
import { PlayerProp } from '../interfaces/playlist.interface';
import { FunctionComponent } from 'react';

const Player: FunctionComponent<PlayerProp> = ({ playlist }) => {
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
