import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: 100%;
  padding: 2rem 0 40px;
  margin: 1rem auto;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 0 48px;
  }
`

export const ContactCard = styled.div`
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 28px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 56px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 32px 20px;
  }
`

export const ContactTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`

export const ContactSubtitle = styled.p`
  max-width: 520px;
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
`

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 10px 18px;
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(167, 139, 250, 0.5);
    color: #fff;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  letter-spacing: 0.02em;
`
