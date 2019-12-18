import styled, { css } from 'styled-components';
import colors from '@frontend/components/styles/colors';

interface Props {
  error?: boolean;
}

const getFocusStyle = (error?: boolean) => {
  if (error) {
    return css`
      outline-offset: -2px;
      outline: ${colors.alert} auto 5px;
    `;
  }
  // Memo: デフォルトのCSSを使う
  return css``;
};

const Input = styled.input<Props>`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  border: ${(props: Props) =>
    props.error ? `1px solid ${colors.alert}` : `1px solid ${colors.gray}`};

  &:focus {
    ${(props: Props) => getFocusStyle(props.error)};
  }
`;

export default Input;
