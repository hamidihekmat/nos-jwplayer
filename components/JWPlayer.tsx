import { FunctionComponent } from 'react';
import { PlayerProp } from '../interfaces/player.interface';
import { useJWPlayer } from '../hooks/usePlayer';
import ReactJWPlayer from 'react-jw-player';
import styled from '@emotion/styled';

const JWPlayer: FunctionComponent<PlayerProp> = ({ playlist }) => {
  const [onReady] = useJWPlayer(playlist);
  return (
    <StyledJWPlayer
      playerId="player"
      playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
      playlist={[playlist]}
      onReady={onReady}
    />
  );
};

const StyledJWPlayer = styled(ReactJWPlayer)`
  #player {
    min-height: 100vh;
    max-height: 100vh;
    min-width: calc(100vw - 100px);
    max-width: calc(100vw - 100px);
    margin-left: 100px;
    background: #151515;
  }

  .jw-captions {
    color: white !important;
  }

  .vtt {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 700 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    position: fixed;
    bottom: 15% !important;
    line-height: normal;
    white-space: pre-wrap !important;
    text-align: center !important;
    left: 50%;
    transform: translate(-50%);
    z-index: 2147483647;
    background-color: transparent !important;
    color: #ffff;
    font-size: 2vw;
    position: absolute;
  }

  .jw-text-track-container .jw-reset {
    display: none;
  }

  .jw-title-primary {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 900 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    font-size: 1.8vw !important;
    margin: 0 2vw !important;
    margin-top: 1.2vw !important;
  }

  .jw-title-secondary {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 700 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    opacity: 0.8;
    margin: 0 2vw !important;
    white-space: pre-wrap !important;
    font-size: 1.2vw !important;
    line-height: normal !important;
  }
  .jw-preview {
    filter: brightness(0.8);
  }
  #movie-title {
    font-family: 'Netflix Sans', sans-serif !important;
    color: white !important;
    white-space: nowrap !important;
    padding: 1vw 1.5vw;
    font-size: 1em;
    opacity: 0.9;
    margin-bottom: 3px;
  }

  video::-webkit-media-text-track-container {
    display: none;
  }
`;

export default JWPlayer;
