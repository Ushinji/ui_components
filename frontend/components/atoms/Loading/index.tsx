import * as React from 'react';
import styled from 'styled-components';
import colors from '@frontend/components/styles/colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 2px solid ${colors.gray};
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  display: block;
  position: relative;
  height: 24px;
  width: 24px;
  animation: spinAround 1s infinite linear;
  @-webkit-keyframes spinAround {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes spinAround {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
