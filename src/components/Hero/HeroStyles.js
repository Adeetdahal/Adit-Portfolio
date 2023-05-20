import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const CustomButton = styled.button`
  width: 240px;
  margin: 0 5px;
  padding: 15px 0;
  text-align: center;
  float: left;
  cursor: pointer;
  background: #fff;
  position: relative;
  border-radius:0 20px 0 20px;
  background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
  color: white;
  font-weight: 800;
  font-size: 24px;

  .BorderTopBottom:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    top: -6px;
    left: -7px;
    // background: #fff;
    transition: all 0.5s ease;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
  }

  .BorderTopBottom:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    bottom: -6px;
    right: -7px;
    // background: #fff;
    transition: all 0.5s ease;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);

  }

  .BorderLeftRight:before {
    content: "";
    position: absolute;
    top: -4px;
    left: -7px;
    width: 3px;
    height: 25px;
    background: #fff;
    transition: all 0.5s ease;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);

  }

  .BorderLeftRight:after {
    content: "";
    position: absolute;
    bottom: -4px;
    right: -7px;
    width: 3px;
    height: 25px;
    background: #fff;
    transition: all 0.5s ease;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
  }

  &:hover .BorderTopBottom:before,
  &:hover .BorderTopBottom:after {
    width: 250px;
    transition: all 0.5s ease;
  }

  &:hover .BorderLeftRight:before,
  &:hover .BorderLeftRight:after {
    height: 67px;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:hover .BorderLeftRight:before,
    &:hover .BorderLeftRight:after {
    height: 57px;
    }

    &:hover .BorderTopBottom:before,
    &:hover .BorderTopBottom:after {
    width: 190px;
  }

  }
  @media screen and (max-width: 640px) {
    width: 97%;
    padding: 8px 0;
    font-size: 14px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:hover .BorderLeftRight:before,
    &:hover .BorderLeftRight:after {
    height: 41px;
    }

    &:hover .BorderTopBottom:before,
    &:hover .BorderTopBottom:after {
    width: 400px;
    transition: all 0.5s ease;
  }
  }
`;