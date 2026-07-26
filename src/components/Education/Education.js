import React from 'react';
import { AiOutlineExport, AiOutlineSafetyCertificate } from 'react-icons/ai';

import { Eyebrow, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { certifications, education } from '../../constants/constants';
import { Card, CertBadge, CertIcon, CertIssuer, CertLinkIcon, CertName, CertRow, Degree, Grid, Period, School } from './EducationStyles';

const Education = () => (
  <Section id="education">
    <SectionDivider divider />
    <Eyebrow index="/04">Background</Eyebrow>
    <SectionTitle>Education & Certifications</SectionTitle>
    <Grid>
      {education.map((item, index) => (
        <Card key={index}>
          <Degree>{item.degree}</Degree>
          <School>{item.school}</School>
          <Period>{item.period}</Period>
        </Card>
      ))}
    </Grid>
    <CertRow>
      {certifications.map((cert, index) => (
        <CertBadge key={index} href={cert.url} target="_blank" rel="noopener noreferrer">
          <CertIcon>
            <AiOutlineSafetyCertificate />
          </CertIcon>
          <div>
            <CertName>{cert.name}</CertName>
            <CertIssuer>{cert.issuer}</CertIssuer>
          </div>
          <CertLinkIcon>
            <AiOutlineExport />
          </CertLinkIcon>
        </CertBadge>
      ))}
    </CertRow>
  </Section>
);

export default Education;
