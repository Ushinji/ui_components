import * as React from 'react';
import styled from 'styled-components';
import colors from '@frontend/components/styles/colors';

const Container = styled.div`
  border: 0;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  height: 40px;
`;

const Content = styled.div`
  padding: 8px 24px;
  line-height: 24px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Content>UI Compoents</Content>
    </Container>
  );
};

export default Header;
