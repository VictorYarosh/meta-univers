import { useState } from "react";
import Button from "../../components/button";
import CheckBox from "../../components/inputs/check-box";
import PasswordField from "../../components/inputs/fields/password-field";
import TextField from "../../components/inputs/fields/text-field";
import useStore from "../../data/store";
import AppFooter from "../../parts/footer";
import FormContainer from "../../parts/form/container";
import WelcomeBackground from "../../parts/welcome/background";
import facebookLogo from "../../public/icons/logo/facebook.svg";
import googleLogo from "../../public/icons/logo/google.svg";

export default function SignIn() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useStore();

  return (
    <WelcomeBackground>
      <div className="flex w-full h-full items-center justify-center">
        <FormContainer>
          <div className="flex flex-col items-center space-y-8 mx-[200px] my-[30px]">
            <span className="font-manrope text-lg font-bold text-white">
              Sign in
            </span>
            <div className="flex flex-col w-full space-y-5">
              <TextField
                label="Email"
                placeholder="example@gmail.com"
                value={usernameOrEmail}
                onInput={(e) => {
                  setUsernameOrEmail(e.target.value);
                }}
              />
              <PasswordField
                label="Password"
                placeholder="Enter Your Password"
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="flex flex-row justify-between">
                <CheckBox label="Remember Me" />
                <span className="text-[#E86969]">
                  <a href="/rememberpassword">Forgot Password?</a>
                </span>
              </div>
              <Button
                width="100%"
                onClick={() => {
                  signIn({ usernameOrEmail, password });
                }}
              >
                Login
              </Button>
            </div>
            <div className="flex flex-row items-baseline space-x-2">
              <div className="w-[116px] h-[1px] bg-white bg-opacity-50" />
              <span className="text-white text-opacity-80">Or With</span>
              <div className="w-[116px] h-[1px] bg-white bg-opacity-50" />
            </div>
            <div className="flex flex-col space-y-[21px] w-full">
              <Button opacity width="100%">
                <div className="flex flex-row w-full items-center px-2">
                  <img src={facebookLogo.src} />
                  <span className="px-9">Login with Facebook</span>
                </div>
              </Button>
              <Button opacity width="100%">
                <div className="flex flex-row w-full items-center px-2">
                  <img src={googleLogo.src} />
                  <span className="px-9">Login with Google</span>
                </div>
              </Button>
            </div>
            <div className="flex flex-row items-center justify-center space-x-3">
              <span className="text-white text-opacity-80 font-medium">
                Already have an account?
              </span>
              <a className="text-accent font-semibold" href="/signup">
                Sign Up
              </a>
            </div>
          </div>
        </FormContainer>
      </div>
      <AppFooter />
    </WelcomeBackground>
  );
}
