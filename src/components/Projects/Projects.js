import React from 'react';

import { Chip, Eyebrow, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {
  Body,
  Card,
  Description,
  GridContainer,
  Img,
  ImageWrap,
  LinkRow,
  Placeholder,
  PlaceholderMonogram,
  ProjectLink,
  TagList,
  Title,
} from './ProjectsStyles';

const monogram = (title) => title
  .split(' ')
  .filter((w) => /^[A-Za-z]/.test(w))
  .slice(0, 2)
  .map((w) => w[0])
  .join('')
  .toUpperCase();

const Projects = () => (
  <Section id="projects">
    <SectionDivider divider />
    <Eyebrow index="/02">Selected Work</Eyebrow>
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      A selection of products and websites I&apos;ve designed, built, and shipped — from healthcare apps to secure messaging and client-facing sites.
    </SectionText>
    <GridContainer>
      {projects.map((p) => (
        <Card key={p.id}>
          <ImageWrap>
            {p.image ? (
              <Img src={p.image} alt={p.title} />
            ) : (
              <Placeholder>
                <PlaceholderMonogram>{monogram(p.title)}</PlaceholderMonogram>
              </Placeholder>
            )}
          </ImageWrap>
          <Body>
            <Title>{p.title}</Title>
            <Description>{p.description}</Description>
            <TagList>
              {p.tags.map((t, i) => (
                <Chip key={i}>{t}</Chip>
              ))}
            </TagList>
            {p.source && (
              <LinkRow>
                <ProjectLink href={p.source} target="_blank" rel="noopener noreferrer">
                  {p.source.includes('github.com') ? 'View Source →' : 'Visit Site →'}
                </ProjectLink>
              </LinkRow>
            )}
          </Body>
        </Card>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
