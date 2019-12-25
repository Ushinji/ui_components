import * as React from 'react';
import styled from 'styled-components';
import colors from '@frontend/components/styles/colors';
import variables from '@frontend/components/styles/variables';

const Container = styled.div`
  position: fixed;
  top: 0;
  border: 0;
  background-color: ${colors.white};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  height: ${variables.headerHeight};
  width: 100vw;
`;

const Content = styled.div`
  width: 940px;
  margin: 0 auto;
  padding: 8px 0;
  line-height: 24px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Content>UI Compoents</Content>
    </Container>
  );
};

export default Header;
