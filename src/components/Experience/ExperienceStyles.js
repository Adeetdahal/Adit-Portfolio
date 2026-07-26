import styled from 'styled-components';

export const Rail = styled.div`
  position: relative;
  width: 100%;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 5px;
    width: 2px;
    background: linear-gradient(180deg, #a78bfa, #22d3ee, transparent);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 24px;
  }
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: 28px;
  left: -32px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.15), 0 0 16px rgba(167, 139, 250, 0.6);

  @media ${(props) => props.theme.breakpoints.sm} {
    left: -24px;
    width: 10px;
    height: 10px;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 32px;
  transition: 0.35s ease;

  &:hover {
    border-color: rgba(167, 139, 250, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
`;

export const Role = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const Index = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accent2};
  margin-right: 10px;
`;

export const Period = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accent1};
  white-space: nowrap;
`;

export const Company = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
`;

export const Points = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Point = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 15px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 300;

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.accent2};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 20px;
  }
`;
