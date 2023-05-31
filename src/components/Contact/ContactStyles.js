import styled from 'styled-components';

export const ModalTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
}
`