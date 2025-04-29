import { useForm } from "react-hook-form";
import { Form, FormGroup, Label } from "reactstrap";
import {
  AddClientContainer,
  FormTitle,
  FormSection,
  FormActions,
  SaveButton,
  CancelButton,
} from "@styles/SessionStyled";
import FormInput from "@components/ui/FormInput";
import { HeadingStyled, Paragraph } from "@styles/ElementsStyled";
import {
  ethnicityOptions,
  locationOptions,
  maritalStatusOptions,
  educationOptions,
  employmentStatusOptions,
  religiousBeliefOptions,
} from "@utils/staticData";

const AddClientForm = () => {
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
    <AddClientContainer>
      <FormTitle>Add Client</FormTitle>

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

        <FormSection>
          <HeadingStyled $size="14px" className="text-dark-grey" $weight={500}>
            Advanced Options
          </HeadingStyled>
          <Paragraph $fontWeight={300} $size="14px" className="text-dark-grey">
            To generate a more culturally informed insight, please fill this
            simple demographic.
          </Paragraph>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="gender">
              Gender
            </Label>
            <FormInput
              type="select"
              register={register}
              name="gender"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">others</option>
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="age">
              Age
            </Label>
            <FormInput register={register} name="age" id="age" />
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="ethnicity">
              Ethnicity
            </Label>
            <FormInput
              type="select"
              register={register}
              name="ethnicity"
              id="ethnicity"
            >
              {ethnicityOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="location">
              Location
            </Label>
            <FormInput
              type="select"
              register={register}
              name="location"
              id="location"
            >
              {locationOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label className="mb-0 fw-500 text-dark-purple-2" for="education">
              Education
            </Label>
            <FormInput
              type="select"
              register={register}
              name="education"
              id="education"
            >
              {educationOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label
              className="mb-0 fw-500 text-dark-purple-2"
              for="employmentStatus"
            >
              Employment Status
            </Label>
            <FormInput
              type="select"
              register={register}
              name="employmentStatus"
              id="employmentStatus"
            >
              {employmentStatusOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label
              className="mb-0 fw-500 text-dark-purple-2"
              for="religiousBeliefs"
            >
              Religious Beliefs
            </Label>
            <FormInput
              type="select"
              register={register}
              name="religiousBeliefs"
              id="religiousBeliefs"
            >
              {religiousBeliefOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>

          <FormGroup>
            <Label
              className="mb-0 fw-500 text-dark-purple-2"
              for="maritalStatus"
            >
              Marital Status
            </Label>
            <FormInput
              type="select"
              register={register}
              name="maritalStatus"
              id="maritalStatus"
            >
              {maritalStatusOptions.map((opt) => (
                <option value={opt.toLowerCase()} key={opt}>
                  {opt}
                </option>
              ))}
            </FormInput>
          </FormGroup>
        </FormSection>

        <FormActions>
          <SaveButton type="submit">Save</SaveButton>
          <CancelButton type="button">Cancel</CancelButton>
        </FormActions>
      </Form>
    </AddClientContainer>
  );
};

export default AddClientForm;
