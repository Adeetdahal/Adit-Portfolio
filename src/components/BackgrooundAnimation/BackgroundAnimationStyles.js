import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(4%, 6%) scale(1.08); }
  66% { transform: translate(-3%, -4%) scale(0.96); }
  100% { transform: translate(0, 0) scale(1); }
`;

const hues = {
  violet: 'rgba(167, 139, 250, 0.35)',
  cyan: 'rgba(34, 211, 238, 0.3)',
  pink: 'rgba(236, 72, 153, 0.22)',
};

export const AuroraLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

export const Blob = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, ${(props) => hues[props.hue]}, transparent 70%);
  filter: blur(60px);
  animation: ${drift} ${(props) => props.duration} ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};
  will-change: transform;

  @media ${(props) => props.theme.breakpoints.sm} {
    filter: blur(40px);
  }
`;
