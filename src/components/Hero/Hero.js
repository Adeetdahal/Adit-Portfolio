import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, CustomButton } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Namaste <br />
          <span >
            It's me, Adit Dahal.
          </span>
        </SectionTitle>
        <SectionText>
          Welcome to my Personal Portfolio.
        </SectionText>
        <a href="#about" style={{ margin: '20px 0' }}>
          <div className="wrapper">
            <CustomButton>
              Learn More
              <span className="BorderTopBottom"></span>
              <span className="BorderLeftRight"></span>
            </CustomButton>
          </div>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;