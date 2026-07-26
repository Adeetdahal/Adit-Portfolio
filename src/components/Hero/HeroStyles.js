import styled from 'styled-components';

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;
  padding: 80px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 48px 0 24px;
    text-align: center;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
`;

export const GreetingChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 28px;
`;

export const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 92px;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 20px;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 56px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 40px;
  }
`;

export const RoleLine = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const LocationLine = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 28px;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const Summary = styled.p`
  max-width: 560px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 36px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    margin: 0 auto 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const FigureWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 620px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 420px;
    margin-top: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 360px;
  }
`;

export const FigureGlow = styled.div`
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(167, 139, 250, 0.45), rgba(34, 211, 238, 0.2) 55%, transparent 75%);
  filter: blur(24px);
`;

export const FigureImg = styled.img`
  position: relative;
  height: 75%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  filter: drop-shadow(0 30px 40px rgba(11, 10, 26, 0.65));
`;

export const PhotoFrame = styled.div`
  height: 88%;
  aspect-ratio: 899 / 1748;
  padding: 5px;
  border-radius: 28px;
  background: ${(props) => props.theme.colors.gradient};
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 20px;
    padding: 4px;
  }
`;

export const PhotoFrameInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: #000;

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 16px;
  }
`;

export const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
