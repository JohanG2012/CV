import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const FirstName = styled.h1`
  font-family: ${fonts.primary};
  font-weight: lighter;
  text-align: center;
  margin: 0;
  font-size: 42px;
  color: ${colors.secondary};
`;

export default FirstName;
