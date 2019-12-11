import * as React from 'react';
import styled from 'styled-components';
import RadioButton from '@frontend/components/molecules/RadioButton';

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const RootPage: React.FC = () => {
  const [age, setAge] = React.useState('male');

  return (
    <div>
      <h1>Radio Button</h1>
      <div>{age}</div>
      <RadioButtonGroup>
        <RadioButton
          name="sex"
          label="男性"
          value="male"
          onClick={setAge}
          checked={age === 'male'}
        />
        <RadioButton
          name="sex"
          label="女性"
          value="female"
          onClick={setAge}
          checked={age === 'female'}
        />
      </RadioButtonGroup>
    </div>
  );
};

export default RootPage;
