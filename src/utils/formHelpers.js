import { validateField } from "./validation";

export function getUpdatedFormState(name, value, prevFormData, prevFormErrors) {
  const updatedFormData = {
    ...prevFormData,
    [name]: value,
  };

  const err = validateField(name, value);

  const updatedFormErrors = {
    ...prevFormErrors,
    [name]: err,
  };

  const noErrors = Object.values(updatedFormErrors).every(
    (error) => error === ""
  );

  return { updatedFormData, updatedFormErrors, noErrors };
}
