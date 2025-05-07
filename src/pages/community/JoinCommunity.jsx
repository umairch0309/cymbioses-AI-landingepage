import { LoginContainer, Title, ContinueButton } from "@styles/LoginFormStyled";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";
import FormInput from "@components/ui/FormInput";
import { communitySchema } from "@utils/validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HeadingStyled } from "../../styles/ElementsStyled";
import { useRegisterCommunityMutation } from "../../services/community/communityApiSlice";

const JoinCommunity = () => {
  const [registerCommunity, { isLoading }] = useRegisterCommunityMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(communitySchema),
  });
  const onSubmit = async (data) => {
    await registerCommunity(data).unwrap();
  };

  return (
    <LoginContainer className="mx-auto my-md-5 my-3 mb-0">
      <div className="text-center mb-4">
        <Title>
          <HeadingStyled className="text-purple" $size="34px" $weight={700}>
            Comming Soon
          </HeadingStyled>
        </Title>
        <p className="mb-4 mt-0">
          Please fill the form below to join our community.
        </p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6} xs={12}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <FormInput
                type="text"
                placeholder="John"
                name="firstName"
                id="firstName"
                register={register}
                invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <div className="text-danger">{errors.firstName.message}</div>
              )}
            </FormGroup>
          </Col>
          <Col lg={6} xs={12}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <FormInput
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                register={register}
                invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <div className="text-danger">{errors.lastName.message}</div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="ava@gmail.com"
            register={register}
            invalid={!!errors.email}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </FormGroup>

        <ContinueButton
          className="w-100 py-2 mb-3"
          type="submit"
          disabled={isLoading ? "disabled" : ""}
        >
          Continue
        </ContinueButton>
      </Form>
    </LoginContainer>
  );
};

export default JoinCommunity;
