import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const inputOnChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    inputOnChange,
    resetForm,
  };
};
