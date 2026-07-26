import React from 'react';
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiPhp,
  DiReact,
} from 'react-icons/di';
import {
  SiAmazonaws,
  SiBootstrap,
  SiCplusplus,
  SiDart,
  SiGit,
  SiGithub,
  SiJira,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiWordpress,
} from 'react-icons/si';
import { AiOutlineApi, AiOutlineSync } from 'react-icons/ai';

import { Eyebrow, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { skills } from '../../constants/constants';
import { CategoryCard, CategoryGrid, CategoryTitle, SkillList, SkillPill } from './TechnologiesStyles';

const iconMap = {
  'React.js': DiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: DiJavascript1,
  'Redux Toolkit': SiRedux,
  HTML5: DiHtml5,
  CSS3: DiCss3,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap,
  'Material UI': SiMui,
  'Node.js': SiNodedotjs,
  'RESTful APIs': AiOutlineApi,
  PHP: DiPhp,
  Python: SiPython,
  Dart: SiDart,
  'C/C++': SiCplusplus,
  Git: SiGit,
  GitHub: SiGithub,
  'AWS (S3)': SiAmazonaws,
  WordPress: SiWordpress,
  'CI/CD': AiOutlineSync,
  Jira: SiJira,
  'VS Code': SiVisualstudiocode,
  Vercel: SiVercel,
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <Eyebrow index="/03">Stack</Eyebrow>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Experience spanning frontend, backend, and cloud tooling — with a growing focus on secure, well-architected systems.
    </SectionText>
    <CategoryGrid>
      {Object.entries(skills).map(([category, items]) => (
        <CategoryCard key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillList>
            {items.map((name) => {
              const Icon = iconMap[name];
              return (
                <SkillPill key={name}>
                  {Icon && <Icon />}
                  {name}
                </SkillPill>
              );
            })}
          </SkillList>
        </CategoryCard>
      ))}
    </CategoryGrid>
  </Section>
);

export default Technologies;
