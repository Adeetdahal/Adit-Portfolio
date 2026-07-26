import React from 'react';

import { Eyebrow, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';
import { Card, CardHeader, Company, Dot, Index, Item, Period, Point, Points, Rail, Role } from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider divider />
    <Eyebrow index="/01">Career Timeline</Eyebrow>
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      A timeline of the teams I&apos;ve built software with, from frontend internships to production fintech platforms.
    </SectionText>
    <Rail>
      {experience.map((job, index) => (
        <Item key={index}>
          <Dot />
          <Card>
            <CardHeader>
              <Role><Index>/{String(index + 1).padStart(2, '0')}</Index>{job.role}</Role>
              <Period>{job.period}</Period>
            </CardHeader>
            <Company>{job.company} · {job.location}</Company>
            <Points>
              {job.points.map((point, i) => (
                <Point key={i}>{point}</Point>
              ))}
            </Points>
          </Card>
        </Item>
      ))}
    </Rail>
  </Section>
);

export default Experience;
