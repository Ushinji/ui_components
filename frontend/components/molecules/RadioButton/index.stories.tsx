import * as React from 'react';
import styled from 'styled-components';
import RadioButton from '.';

export default { title: 'RadioButton' };

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const RadioButtonField: React.FC = () => {
  const onClick = () => {};
  return (
    <RadioButtonGroup>
      <RadioButton
        name="radio-button"
        label="Test Radio Button 1"
        value="1"
        onClick={onClick}
        checked
      />
      <RadioButton
        name="radio-button"
        label="Test Radio Button 2"
        value="2"
        onClick={onClick}
      />
      <RadioButton
        name="radio-button"
        label="Test Radio Button 3"
        value="3"
        onClick={onClick}
      />
    </RadioButtonGroup>
  );
};
