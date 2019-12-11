import * as React from 'react';

type Props = {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onClick: (age: string) => void;
};

const RadioButton: React.FC<Props> = ({
  name,
  label,
  value,
  checked,
  onClick,
}) => {
  return (
    <label htmlFor={`radio-${name}-${value}`}>
      <input
        type="radio"
        id={`radio-${name}-${value}`}
        name={name}
        value={value}
        onClick={() => onClick(value)}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
