import Button from "../components/button";
import AppFooter from "../parts/footer";
import WelcomeBackground from "../parts/welcome/background";
import GradientText from "../parts/welcome/gradient-text";

export default function Welcome() {
  return (
    <WelcomeBackground>
      <div className="flex flex-col w-full h-full items-center justify-center space-y-10">
        <GradientText>Welcome to ATOM Universe</GradientText>
        <div className="flex sm:flex-col sm:space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <Button
            opacity
            onClick={() => {
              location.href = "/signin";
            }}
          >
            Sign In
          </Button>
          <Button
            opacity
            onClick={() => {
              location.href = "/signup";
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <AppFooter />
    </WelcomeBackground>
  );
}
