import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 28px;
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 211, 238, 0.4);
  }
`;

export const Degree = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const School = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
`;

export const Period = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.accent1};
`;

export const CertRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CertBadge = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 14px 20px;
  flex: 1;
  min-width: 260px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(167, 139, 250, 0.5);
    transform: translateY(-3px);
  }
`;

export const CertLinkIcon = styled.span`
  margin-left: auto;
  color: rgba(255, 255, 255, 0.35);
  font-size: 16px;
  flex-shrink: 0;
`;

export const CertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.gradient};
  color: #0b0a1a;
  font-size: 18px;
`;

export const CertName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

export const CertIssuer = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;
