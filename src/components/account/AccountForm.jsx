import { useForm } from "react-hook-form";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";
import { FormSection, FormActions, SaveButton } from "@styles/SessionStyled";
import FormInput from "@components/ui/FormInput";
import { Paragraph } from "@styles/ElementsStyled";

import { countries } from "countries-list";

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Ava Sombori",
      email: "",
      gender: "",
      age: "",
      ethnicity: "",
      location: "",
      education: "",
      employmentStatus: "",
      religiousBeliefs: "",
      maritalStatus: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="fullName">
              Full Name
            </Label>
            <FormInput
              type="text"
              register={register}
              name="fullName"
              id="fullName"
            />
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="email">
              Email
            </Label>
            <FormInput
              type="email"
              register={register}
              name="email"
              id="email"
              placeholder="name@gmail.com"
            />
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="phone">
              Phone
            </Label>
            <FormInput
              type="number"
              register={register}
              name="phone"
              id="phone"
              placeholder="XXX XXXX XXX"
            />
          </FormGroup>

          <FormGroup>
            <Label
              className="mb-0 fw-500 text-dark-purple-2"
              for="businessName"
            >
              Business Name
            </Label>
            <FormInput
              type="text"
              register={register}
              name="businessName"
              id="businessName"
              placeholder="Ava Sombori"
            />
            <Paragraph
              $fontWeight={300}
              $size="13px"
              className="text-dark-grey mt-2"
            >
              Optional, you can leave blank
            </Paragraph>
          </FormGroup>

          <FormSection>
            <FormGroup>
              <Label className="mb-0 fw-500 text-dark-purple-2" for="clickType">
                Clinic Type
              </Label>
              <FormInput
                type="select"
                register={register}
                name="clickType"
                id="clickType"
              >
                <option value="individual">individual</option>
              </FormInput>
            </FormGroup>
            <FormGroup>
              <Label
                className="mb-0 fw-500 text-dark-purple-2"
                for="treatmentModality"
              >
                Treatment Modality
              </Label>
              <FormInput
                type="select"
                register={register}
                name="treatmentModality"
                id="clickType"
              >
                <option value="individual_therapy">Individual Therapy</option>
              </FormInput>
            </FormGroup>
            <FormGroup>
              <Label className="mb-0 fw-500 text-dark-purple-2" for="role">
                Role
              </Label>
              <FormInput
                type="select"
                register={register}
                name="role"
                id="role"
              >
                <option value="individual_therapy">User</option>
              </FormInput>
            </FormGroup>

            <FormGroup>
              <Label className="mb-0 fw-500 text-dark-purple-2" for="city">
                City
              </Label>
              <FormInput
                type="select"
                register={register}
                name="city"
                id="city"
              >
                <option value="city">California</option>
              </FormInput>
            </FormGroup>

            <FormGroup>
              <Label className="mb-0 fw-500 text-dark-purple-2" for="country">
                Country
              </Label>
              <FormInput
                type="select"
                register={register}
                name="country"
                id="country"
              >
                {Object.entries(countries).map(([code, country]) => (
                  <option key={code} value={code}>
                    {country.name} ({country.native})
                  </option>
                ))}
              </FormInput>
            </FormGroup>
          </FormSection>

          <FormActions>
            <SaveButton type="submit">Save Changes</SaveButton>
          </FormActions>
        </Form>
      </Col>
    </Row>
  );
};

export default AccountForm;
