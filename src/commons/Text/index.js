import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const Text = styled.p`
  font-family: ${fonts.primary};
  color: ${colors.secondary};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  display: ${props => (props.inline ? 'inline' : 'block')};
`;

export default Text;
