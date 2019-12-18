import * as React from 'react';
import Input from './Input';
import useField from './hooks';
import { emailValidator } from '@frontend/utils/validations';
import styled from 'styled-components';
import Label from '@frontend/components/atoms/Label';

export default { title: 'InputFiled' };

const Container = styled.div`
  width: 320px;
`;

const useInputField = () => {
  const emailField = useField('', 'email', (value: string) =>
    emailValidator(value)
  );
  return {
    email: emailField,
  };
};

export const InputFiled: React.FC = () => {
  const { email } = useInputField();

  return (
    <Container>
      <Label>メールアドレス</Label>
      <Input
        {...email.props}
        placeholder="例) test@exmaple.com"
        error={email.meta.touched && email.meta.error}
      />
    </Container>
  );
};
