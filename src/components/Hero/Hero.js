import React from 'react';
import { AiOutlineDownload, AiOutlineEnvironment, AiOutlineMail } from 'react-icons/ai';

import { GlowButton } from '../../styles/GlobalComponents';
import { personal } from '../../constants/constants';
import {
  CTARow,
  FigureWrap,
  GreetingChip,
  HeroGrid,
  LeftSection,
  LocationLine,
  Name,
  PhotoFrame,
  PhotoFrameInner,
  PhotoImg,
  RoleLine,
  Summary,
} from './HeroStyles';

const Hero = () => (
  <HeroGrid>
    <LeftSection>
      <GreetingChip>👋 Namaste, I&apos;m</GreetingChip>
      <Name>{personal.name}</Name>
      <RoleLine>{personal.role} · {personal.focus}</RoleLine>
      <LocationLine>
        <AiOutlineEnvironment /> {personal.location}
      </LocationLine>
      <Summary>{personal.summary}</Summary>
      <CTARow>
        <GlowButton as="a" href="#projects" filled>
          View Projects
        </GlowButton>
        <GlowButton as="a" href={personal.resume} download="Adit_Dahal_Resume.pdf">
          <AiOutlineDownload /> Download Resume
        </GlowButton>
        <GlowButton as="a" href="#contact">
          <AiOutlineMail /> Get in Touch
        </GlowButton>
      </CTARow>
    </LeftSection>
    <FigureWrap>
      <PhotoFrame>
        <PhotoFrameInner>
          <PhotoImg src="/images/hero.png" alt={personal.name} />
        </PhotoFrameInner>
      </PhotoFrame>
    </FigureWrap>
  </HeroGrid>
);

export default Hero;
