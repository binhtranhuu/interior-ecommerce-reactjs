import { keyframes } from '@emotion/react';

export const fadeInUpShorter = keyframes`
from {
  opacity: 0;
  transform: translate(0,50px);
  transform-origin: 0 0;
}
to {
  opacity:1;
  transform:none
}`;
