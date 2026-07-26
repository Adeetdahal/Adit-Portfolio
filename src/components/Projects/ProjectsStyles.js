import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.08); }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding: 2rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(167, 139, 250, 0.5);
    box-shadow: 0 16px 40px rgba(124, 58, 237, 0.2);
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.background2};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;

  ${Card}:hover & {
    animation: ${zoomIn} 0.4s ease-in-out forwards;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.25), rgba(34, 211, 238, 0.2));
`;

export const PlaceholderMonogram = styled.span`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 48px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
`;

export const Title = styled.h3`
  font-size: 19px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  flex: 1;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const LinkRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProjectLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent1};
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent2};
  }
`;
