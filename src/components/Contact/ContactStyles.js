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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
    width: 200px;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    align-self: center;
    z-index: 4;
    transition: all 0.5s ease 0.1s;
    &:hover {
        overflow: hidden;
        transform: scale(1.5);
    }
`
export const Buttons1 = styled.button`
    width: 220px;
    position: relative;
    padding: 10px 0 10px 20px;
    background-color: rgba(100, 100, 255, 0.6);
    margin: auto;
    color: #d4c0c0;
    border: 0;
    z-index: 5;

    font-size: 1.6rem;
    border-radius: 15px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-color: rgba(100, 0, 255, 0.6);
    }
`;
