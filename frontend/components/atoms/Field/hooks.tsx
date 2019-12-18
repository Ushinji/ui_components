import * as React from 'react';

const { useState, useCallback } = React;

const useField = (
  initialValue: string,
  name: string,
  validate: (value: string) => boolean = () => false
) => {
  const [state, setState] = useState({
    value: initialValue,
    touched: false,
    pristine: false,
    error: !validate(initialValue),
  });

  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = e.currentTarget.value;
      const error = !validate(nextValue);
      setState(s => {
        return {
          ...s,
          pristine: nextValue === initialValue,
          value: nextValue,
          error,
        };
      });
    },
    [setState, validate, initialValue]
  );

  const onFocus = useCallback(() => {
    setState(s => {
      return {
        ...s,
        touched: true,
      };
    });
  }, []);

  const { value, ...meta } = state;

  return {
    props: {
      value,
      name,
      onChange,
      onFocus,
    },
    meta,
  };
};

export default useField;
