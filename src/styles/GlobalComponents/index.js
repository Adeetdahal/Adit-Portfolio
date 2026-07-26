import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    // width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.main ? '72px' : '64px'};
  line-height: ${(props) => props.main ? '0.98' : '0.98'};
  letter-spacing: -0.02em;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.gradient ? props.theme.colors.gradient : 'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '16px 0 16px' : '0'};
  text-transform: uppercase;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '52px' : '44px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '12px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: ${(props) => props.main ? '32px' : '30px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '8px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 12px;

  &::before {
    content: '${(props) => props.index || '/01'}';
    color: rgba(255, 255, 255, 0.35);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`

export const GridLines = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  pointer-events: none;

  &::before, &::after {
    content: '';
  }

  span {
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.theme.colors.gradient};

    margin: ${(props) => props.divider ? "4rem 0" : ""};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const GlassCard = styled.div`
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: 0.35s ease;

  ${(props) => props.hoverable && `
    &:hover {
      transform: translateY(-6px);
      border-color: rgba(167, 139, 250, 0.5);
      box-shadow: 0 16px 40px rgba(124, 58, 237, 0.2);
    }
  `}
`

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 6px 14px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
    padding: 5px 11px;
  }
`

export const GlowButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 18px 32px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.35s ease;
  white-space: nowrap;

  ${(props) => props.filled ? `
    color: #0b0a1a;
    background: ${props.theme.colors.gradient};
    border: 1px solid transparent;
    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(124, 58, 237, 0.35);
    }
  ` : `
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
    }
  `}

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px 20px;
    font-size: 14px;
    width: 100%;
    justify-content: center;
  }
`
