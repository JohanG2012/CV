import styled from 'styled-components';

const ListContainer = styled.ul`
  margin: 0;
  list-style-type: ${props => (props.styleType ? 'disc' : 'none')};
  padding-left: ${props => (props.styleType ? '40px' : '0')};
  width: ${props => props.width};
`;

export default ListContainer;
