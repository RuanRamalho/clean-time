import styled from 'styled-components'; 
import { media } from '../../components/Breackpoints/style';

export const SectionHeader = styled.section `
  background: white;
`;

export const HeaderContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = styled.div `
  ul {
    list-style-type: none;
    display: block;
  }

  a {
    color: black;
    margin-left: 15px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;

    &:hover {
      color: #f2943a;
      transition: .3s;
      cursor: pointer;
      text-decoration: none;
    }
  }

  ${media.breackpoint_sm} {
    ul {
      list-style-type: none;
      display: flex;
    }
  }
`;

export const Logo = styled.div ` 
  width: 200px;

  img {
    width: 100%;
  }
  ${media.breackpoint_md} {
    width: 300px;
  }
`;