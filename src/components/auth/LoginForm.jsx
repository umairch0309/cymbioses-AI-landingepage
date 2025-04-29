import { Form, FormGroup, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@utils/validation/authSchema";
import {
  LoginContainer,
  Title,
  PurpleText,
  TermsCheckbox,
  ContinueButton,
} from "@styles/LoginFormStyled";
import FormInput from "@components/ui/FormInput";
import { useAppDispatch } from "@/store";
import { useLoginMutation } from "@services/auth/authApiSlice";
import { setUser } from "@services/auth/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { loading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const res = await login({
      email: data.email,
      password: data.password,
    }).unwrap();
    dispatch(
      setUser({
        ...res.data.user,
        token: res.data.token,
        expires: res.data.expiry_time,
      })
    );
  };

  return (
    <LoginContainer className="mx-auto mb-md-5 mb-0">
      <div className="text-center mb-4">
        <Title>
          <PurpleText>AI-powered</PurpleText> tools to
          <br />
          streamline documentation
        </Title>
        <p className="mb-4">
          Input your valid credentials to access your account.
        </p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <FormGroup className="mb-4">
          <Label for="password">Password</Label>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="• • • • • • • •"
            register={register}
            invalid={!!errors.password}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </FormGroup>

        <FormGroup check className="mb-4">
          <TermsCheckbox
            type="checkbox"
            name="terms"
            id="terms"
            {...register("terms")}
            invalid={!!errors.terms}
          />
          <Label for="terms" check>
            I agree with Cymbiose{" "}
            <Link
              href="#terms"
              className="text-decoration-none"
              style={{ color: "var(--purple)" }}
            >
              Terms and Conditions
            </Link>
          </Label>
          {errors.terms && (
            <div className="text-danger">{errors.terms.message}</div>
          )}
        </FormGroup>

        <ContinueButton
          className="w-100 py-2 mb-3"
          type="submit"
          disabled={loading}
        >
          Continue
        </ContinueButton>

        <div className="text-center">
          <Link
            to="/signup"
            className="text-decoration-none"
            style={{ color: "var(--purple)" }}
          >
            I am new here
          </Link>
        </div>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
