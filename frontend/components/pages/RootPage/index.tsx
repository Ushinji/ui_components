import * as React from 'react';
import RadioButton from '@frontend/components/molecules/RadioButton';

const RootPage: React.FC = () => {
  const [age, setAge] = React.useState('male');

  return (
    <div>
      <h1>Radio Button</h1>
      <div>{age}</div>
      <div>
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
      </div>
    </div>
  );
};

export default RootPage;
