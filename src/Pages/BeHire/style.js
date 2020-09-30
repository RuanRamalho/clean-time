import styled from 'styled-components';
import { media } from '../../components/Breackpoints/style';

export const SectionBeHire = styled.section `
  background: #f2943a;
  height: 100vh;

  ${media.breackpoint_md} {
    height: 85vh;
  }
`;

export const TextArea = styled.textarea `
  border-radius: 5px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 1px solid #ced4da;
  color: #495057;
  resize: none;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25)
  }
`;