import React from 'react';

import { AuroraLayer, Blob } from './BackgroundAnimationStyles';

const BackgroundAnimation = () => (
  <AuroraLayer aria-hidden="true">
    <Blob top="-10%" left="-10%" size="55vw" hue="violet" duration="22s" />
    <Blob top="20%" left="60%" size="45vw" hue="cyan" duration="26s" delay="-6s" />
    <Blob top="55%" left="5%" size="40vw" hue="pink" duration="30s" delay="-12s" />
  </AuroraLayer>
);

export default BackgroundAnimation;
