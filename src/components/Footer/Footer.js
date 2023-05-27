import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+9779861194747">+977-9861194747</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:dahaladit61@gmail.com">
            dahaladit61@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating through bits and digits</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Adeetdahal" target="_blank">
            <AiFillGithub size="2.8rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/adit-dahal/" target="_blank">
            <AiFillLinkedin size="2.8rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/aditdahal/" target="_blank">
            <AiFillInstagram size="2.8rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
