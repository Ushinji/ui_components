import * as React from 'react';
import styled from 'styled-components';
import Header from '@frontend/components/molecules/Header';

const Container = styled.div``;
const Body = styled.div``;

type Props = {
  children: React.ReactNode;
};

const HeaderTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
};

export default HeaderTemplate;
