import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ListItem, ListParagraph, ListTitle, SubList, SubListItem } from './TechnologiesStyles';
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiLinux,
  DiPhp,
  DiSass,
  DiReact
} from 'react-icons/di'
import { SiDotnet, SiNextdotjs, SiStyledcomponents, SiFlutter, SiTailwindcss, SiTypescript, SiWordpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have gained experience across various technologies within the field of web development, encompassing both back-end development and design aspects.
    </SectionText>
    <ListItem>
      <ListTitle>Languages & Tools</ListTitle>
      <SubList>
        <SubListItem>
          <DiHtml5 size="2rem" />
          <ListParagraph>HTML</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiCss3 size="2rem" />
          <ListParagraph>CSS</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiJavascript1 size="2rem" />
          <ListParagraph>JavaScript</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiReact size="2rem" />
          <ListParagraph>ReactJS</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiNextdotjs size="2rem" />
          <ListParagraph>NextJS</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiWordpress size="2rem" />
          <ListParagraph>WordPress</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiFlutter size="2rem" />
          <ListParagraph>Flutter</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiBootstrap size="2rem" />
          <ListParagraph>Bootstrap</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiTailwindcss size="2rem" />
          <ListParagraph>TailWindCSS</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiStyledcomponents size="2rem" />
          <ListParagraph>Styled</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiSass size="2rem" />
          <ListParagraph>Sass</ListParagraph>
        </SubListItem>
        <SubListItem>
          <FaJava size="2rem" />
          <ListParagraph>Java</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiPhp size="2rem" />
          <ListParagraph>Php</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiDotnet size="2rem" />
          <ListParagraph>ASP.NET</ListParagraph>
        </SubListItem>
        <SubListItem>
          <SiTypescript size="2rem" />
          <ListParagraph>TypeScript</ListParagraph>
        </SubListItem>
        <SubListItem>
          <DiLinux size="2rem" />
          <ListParagraph>Linux</ListParagraph>
        </SubListItem>
      </SubList>
    </ListItem>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
