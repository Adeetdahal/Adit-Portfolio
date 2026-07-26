import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload, AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { GlowButton, Section } from '../../styles/GlobalComponents';
import { personal } from '../../constants/constants';
import {
  BottomBar,
  ContactCard,
  ContactItem,
  ContactRow,
  ContactSubtitle,
  ContactTitle,
  FooterWrapper,
  Slogan,
  SocialContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <Section id="contact" nopadding>
      <FooterWrapper>
        <ContactCard>
          <ContactTitle>Let&apos;s build something together</ContactTitle>
          <ContactSubtitle>
            Open to new opportunities and interesting projects. Reach out via email, phone, or connect on LinkedIn.
          </ContactSubtitle>
          <ContactRow>
            <ContactItem href={`mailto:${personal.email}`}>
              <AiOutlineMail /> {personal.email}
            </ContactItem>
            <ContactItem href={`tel:${personal.phone}`}>
              <AiOutlinePhone /> {personal.phone}
            </ContactItem>
            <ContactItem as="span">
              <AiOutlineEnvironment /> {personal.location}
            </ContactItem>
          </ContactRow>
          <GlowButton as="a" href={personal.resume} download="Adit_Dahal_Resume.pdf" filled>
            <AiOutlineDownload /> Download Resume
          </GlowButton>
          <BottomBar style={{ width: '100%' }}>
            <Slogan>Innovating through bits and digits</Slogan>
            <SocialContainer>
              <SocialIcons href={personal.github} target="_blank">
                <AiFillGithub size="2.4rem" />
              </SocialIcons>
              <SocialIcons href={personal.linkedin} target="_blank">
                <AiFillLinkedin size="2.4rem" />
              </SocialIcons>
            </SocialContainer>
          </BottomBar>
        </ContactCard>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
