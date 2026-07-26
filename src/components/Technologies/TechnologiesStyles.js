import styled from 'styled-components';

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background: ${(props) => props.theme.colors.glassBg};
  border: 1px solid ${(props) => props.theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 28px;
`;

export const CategoryTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 20px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SkillPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 8px 14px;
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(167, 139, 250, 0.5);
    transform: translateY(-2px);
  }

  svg {
    font-size: 16px;
    color: ${(props) => props.theme.colors.accent2};
    flex-shrink: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 6px 10px;
  }
`;
