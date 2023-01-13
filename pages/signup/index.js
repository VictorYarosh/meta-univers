import { useState } from "react";
import Button from "../../components/button";
import PasswordField from "../../components/inputs/fields/password-field";
import TextField from "../../components/inputs/fields/text-field";
import FormContainer from "../../parts/form/container";
import useStore from "../../data/store";
import facebookLogo from "../../public/icons/logo/facebook.svg";
import googleLogo from "../../public/icons/logo/google.svg";
import WelcomeBackground from "../../parts/welcome/background";
import AppFooter from "../../parts/footer";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signUp } = useStore();

  return (
    <WelcomeBackground>
      <div className="flex w-full h-full items-center justify-center">
        <FormContainer>
          <div className="flex flex-col items-center space-y-8 mx-[200px] my-[30px]">
            <span className="font-manrope text-lg font-bold text-white">
              Create an account
            </span>
            <div className="flex flex-col space-y-5 w-full">
              <TextField
                placeholder="Enter Your Username"
                value={username}
                onInput={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                placeholder="Enter Your Email"
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <PasswordField
                placeholder="Enter Your Password"
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <PasswordField
                placeholder="Confirm Your Password"
                value={passwordConfirm}
                onInput={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
              <Button
                width="100%"
                onClick={() => {
                  signUp({ username, email, password });
                }}
              >
                Sign Up
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
                  <span className="px-9">Sign Up with Facebook</span>
                </div>
              </Button>
              <Button opacity width="100%">
                <div className="flex flex-row w-full items-center px-2">
                  <img src={googleLogo.src} />
                  <span className="px-9">Sign Up with Google</span>
                </div>
              </Button>
            </div>
            <div className="flex flex-row items-center justify-center space-x-3">
              <span className="text-white text-opacity-80 font-medium">
                Already have an account?
              </span>
              <a className="text-accent font-semibold" href="/signin">
                Login
              </a>
            </div>
          </div>
        </FormContainer>
      </div>
      <AppFooter />
    </WelcomeBackground>
  );
}
