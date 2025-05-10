import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Label, FormGroup } from "reactstrap";
import {
  PasswordInputWrapper,
  PasswordToggle,
  ErrorMessage,
} from "@styles/FormStyled";
import { FormActions, SaveButton } from "@styles/SessionStyled";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormInput from "@components/ui/FormInput";

const SecurityTabContent = () => {
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        {Object.keys(defaultValues).map((key) => {
          return (
            <FormGroup className="mb-3" key={key}>
              <Label className="text-capitalize" for={key}>
                {key.replace("Password", " Password")}
              </Label>
              <PasswordInputWrapper>
                <FormInput
                  id={key}
                  type={showPassword[key] ? "text" : "password"}
                  placeholder="••••••••"
                  register={register}
                  name={key}
                  invalid={!!errors[key]}
                />
                <PasswordToggle
                  type="button"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      [key]: !showPassword.old,
                    })
                  }
                >
                  {showPassword[key] ? <FaEyeSlash /> : <FaEye />}
                </PasswordToggle>
              </PasswordInputWrapper>
              {errors[key] && (
                <ErrorMessage>{errors[key].message}</ErrorMessage>
              )}
            </FormGroup>
          );
        })}
        <FormActions className="pt-2">
          <SaveButton type="submit">Save Changes</SaveButton>
        </FormActions>
      </Col>
    </Row>
  );
};

export default SecurityTabContent;
