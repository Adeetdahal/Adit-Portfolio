import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

// export const List = styled.ul`
//   list-style-type: none;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   margin: 3rem 0;

//   @media ${props => props.theme.breakpoints.lg}{
//     margin: 64px 0;
//   }

//   @media ${props => props.theme.breakpoints.md}{
//     margin: 64px 0;
//     gap: 24px
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     display: grid;
//     flex-direction: column;
//     margin: 32px 0;
//   }
// `

// export const ListContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     margin-left: 18px;
//   }
// `
export const SubList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 3rem 0;
    flex-wrap: wrap;
    align-items: start;
    justify-content:;

    @media ${(props) => props.theme.breakpoints.lg} {
        margin: 64px 0;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin: 30px 0;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 15px 0;
    }
`;

export const SubListItem = styled.li`
    display: flex;
    flex-direction: column;
    margin: 12px;
    width: 80px;
    padding: 10px 30px;
    z-index: 5;
    align-items: center;
    justify-content: start;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 75px;
        margin: 1px 10px;
        padding: 10px;
    }

    transition: all 0.5s ease 0.1s;
    &:hover {
        transform: scale(1.5);
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: drop-shadow(4px 4px 10px blue);
        backdrop-filter: drop-shadow(4px 4px 10px blue);
        background-color: rgba(52, 0, 102, 0.1);
        border: 1px dotted gray;
        border-radius: 7px 7px 7px 7px;
    }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 14px;
  line-height: 30px;
  padding: 5px;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 12px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  width:100%
  display: flex;
//   flex-direction: column;

// @media ${props => props.theme.breakpoints.sm}{
//   margin-bottom: 14px;
//   flex-direction: row;
// }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
