import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import styled from 'styled-components';

// const CustomButton = styled.button`
//   width: 240px;
//   margin: 0 20px;
//   padding: 15px 0;
//   text-align: center;
//   float: left;
//   cursor: pointer;
//   background: #fff;
//   position: relative;
//   border-radius:0 20px 0 20px;
//   background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
//   color: white;
//   font-weight: 800;
//   font-size: 24px;

//   .BorderTopBottom:before {
//     content: "";
//     position: absolute;
//     width: 50px;
//     height: 3px;
//     top: -6px;
//     left: -7px;
//     background: #fff;
//     transition: all 0.5s ease;
//   }

//   .BorderTopBottom:after {
//     content: "";
//     position: absolute;
//     width: 50px;
//     height: 3px;
//     bottom: -6px;
//     right: -7px;
//     background: #fff;
//     transition: all 0.5s ease;
//   }

//   .BorderLeftRight:before {
//     content: "";
//     position: absolute;
//     top: -4px;
//     left: -7px;
//     width: 3px;
//     height: 25px;
//     background: #fff;
//     transition: all 0.5s ease;
//   }

//   .BorderLeftRight:after {
//     content: "";
//     position: absolute;
//     bottom: -4px;
//     right: -7px;
//     width: 3px;
//     height: 25px;
//     background: #fff;
//     transition: all 0.5s ease;
//   }

//   &:hover .BorderTopBottom:before,
//   &:hover .BorderTopBottom:after {
//     width: 250px;
//     transition: all 0.5s ease;
//   }

//   &:hover .BorderLeftRight:before,
//   &:hover .BorderLeftRight:after {
//     height: 67px;
//     transition: all 0.5s ease;
//   }

//   @media screen and (max-width: 768px) {
//     width: 180px;
//     font-size: 16px;

//     &:not(:last-child) {
//       margin-bottom: 15px;
//     }
//   }
//   @media screen and (max-width: 640px) {
//     width: 92%;
//     font-size: 14px;
//     &:not(:last-child) {
//       margin-bottom: 15px;
//     }

//     &:hover .BorderLeftRight:before,
//     &:hover .BorderLeftRight:after {
//     height: 54px;
//     }

//     &:hover .BorderTopBottom:before,
//     &:hover .BorderTopBottom:after {
//     width: 326px;
//     transition: all 0.5s ease;
//   }
//   }
// `;

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
        {/* <div className="wrapper" style={{ padding: '50px 0' }}>
          <CustomButton>
            Learn More
            <span className="BorderTopBottom"></span>
            <span className="BorderLeftRight"></span>
          </CustomButton>
        </div> */}
        <a href="#about">
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;