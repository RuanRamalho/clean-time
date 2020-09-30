import styled from 'styled-components'; 
import { media } from '../../components/Breackpoints/style';

export const SectionContract = styled.section `
  
`;

export const Card = styled.div `
  margin: 20px 0;
  background: white;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 4px;
`;

export const Perfil = styled.div `
  width: 100%;
  height: 250px;
  background: #ccc;
`;

export const Text = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;

  h1 {
    font-size: 26px;
  }

  p {
    font-weight: bold;
    font-size: 15px;
  }

  ${media.breackpoint_md} {
    display: flex;
    align-items: flex-end;
    margin-right: 40px;
  }
`;