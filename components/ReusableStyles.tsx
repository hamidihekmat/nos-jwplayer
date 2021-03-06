import styled from '@emotion/styled';

export const ScrollableContainer = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
