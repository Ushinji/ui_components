import * as React from 'react';
import styled from 'styled-components';
import colors from '@frontend/components/styles/colors';

const Container = styled.div`
  padding: 8px;
  text-align: left;
  border: 0;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  height: 40px;
  line-height: 24px;
`;

const Header: React.FC = () => {
  return <Container>UI Compoents</Container>;
};

export default Header;
