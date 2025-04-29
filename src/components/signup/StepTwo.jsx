import { useFormContext } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import {
  FormContainer,
  FormTitle,
  FormDescription,
  FormSelect,
  ContinueButton,
  BackButton,
  ErrorMessage,
} from "@styles/FormStyled";
import FormInput from "@components/ui/FormInput";

// Sample data for dropdowns
const specializations = [
  "Psychiatry",
  "Psychology",
  "Social Work",
  "Counseling",
  "Marriage and Family Therapy",
];

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
];

const StepTwo = ({ onBack }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormContainer>
      <FormTitle>Practice Details</FormTitle>
      <FormDescription>
        Please fill in your business details below to create an account.
      </FormDescription>

      <FormGroup className="mb-3">
        <Label for="businessName">Business Name</Label>
        <FormInput
          id="businessName"
          placeholder="Ava Sombori"
          register={register}
          name="businessName"
          invalid={!!errors.businessName}
        />
        {errors.businessName && (
          <ErrorMessage>{errors.businessName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="clinicianType">Clinician Type</Label>
        <FormInput
          id="clinicianType"
          placeholder="name@gmail.com"
          register={register}
          name="clinicianType"
          invalid={!!errors.clinicianType}
        />
        {errors.clinicianType && (
          <ErrorMessage>{errors.clinicianType.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="specialization">Specialization</Label>
        <FormSelect
          id="specialization"
          {...register("specialization")}
          invalid={!!errors.specialization}
        >
          <option value="">Select Specialization</option>
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </FormSelect>
        {errors.specialization && (
          <ErrorMessage>{errors.specialization.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup className="mb-3">
        <Label for="city">City</Label>
        <FormSelect id="city" {...register("city")} invalid={!!errors.city}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </FormSelect>
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup className="mb-4">
        <Label for="country">Country</Label>
        <FormSelect
          id="country"
          {...register("country")}
          invalid={!!errors.country}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </FormSelect>
        {errors.country && (
          <ErrorMessage>{errors.country.message}</ErrorMessage>
        )}
      </FormGroup>

      <ContinueButton type="submit">Continue</ContinueButton>

      <BackButton type="button" onClick={onBack}>
        Go Back
      </BackButton>
    </FormContainer>
  );
};

export default StepTwo;
