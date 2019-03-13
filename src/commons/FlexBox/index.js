import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => props.space};
`;

export default FlexBox;
