import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const Body = styled.div`
  font-family: ${fonts.primary};
  color: ${colors.secondary};
  padding: 10px ${props => props.rightPadding} 10px 200px;
`;

export default Body;
