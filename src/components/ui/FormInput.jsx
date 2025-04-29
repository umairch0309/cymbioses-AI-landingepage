import { FormInputStyled } from "@styles/FormStyled";

const FormInput = ({ register, name, ...rest }) => {
  const { ref, ...registerField } = register(name);

  return <FormInputStyled innerRef={ref} {...registerField} {...rest} />;
};

export default FormInput;
