import { useRef } from 'react';
import styled from '@emotion/styled';

function LazyImage(props) {
  const ref = useRef(null);
  const onLoad = () => {
    ref.current.classList.add('loaded');
  };
  const onError = () => {
    ref.current.classList.add('has-error');
  };
  return (
    <StyledImage
      loading="lazy"
      onError={onError}
      ref={ref}
      onLoad={onLoad}
      {...props}
    />
  );
}

const StyledImage = styled.img`
  display: block;
  @keyframes loaded {
    0% {
      opacity: 0.1;
      transform: scale(0.96);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .loaded {
    animation: loaded 200ms ease-in-out;
  }

  &.loaded:not(.has-error) {
    animation: loaded 200ms ease-in-out;
  }
`;

// Mayble change the content if there is an error

export default LazyImage;
