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

export const fadeInRightShorter = keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}
to {
  opacity: 1;
  transform: none
}`;

export const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}`;

export const fadeInLeft = keyframes`
from {
  -webkit-transform: translate3d(-100%,0,0);
  opacity: 0;
  transform: translate3d(-100%,0,0)
}
to {
  -webkit-transform: translateZ(0);
  opacity: 1;
  transform: translateZ(0)
}`;
