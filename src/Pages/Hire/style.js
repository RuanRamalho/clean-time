import styled from 'styled-components';
import { media } from '../../components/Breackpoints/style';

export const SectionHire = styled.section `
  background: #f2943a;
  padding: 3px 0;
`;

export const Card = styled.div `
  margin: 20px 0;
  background: white;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 4px;
`;

export const Perfil = styled.div `
  width: 100%;
  background: #ccc;

  img {
    width: 100%;
  }
`;

export const Text = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  margin-top: 20px;

  h1 {
    font-size: 26px;
  }
  p {
    font-weight: bold;
    font-size: 15px;
  }

  .know-more {
    border-radius: 25px;
    margin-bottom: 20px;
  }

  ${media.breackpoint_md} {
    display: flex;
    align-items: flex-end;
    margin-right: 40px;

    .know-more{
      width: 150px;
      border-radius: 25px;
      font-weight: bold;
      transition: .3s;

      &:hover {
        background: #f2943a;
        color: white;
      }
    }
  }
`;