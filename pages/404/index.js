import Button from "../../components/button";
import background from "../../public/images/background/404.jpg";

export default function NotFound() {
  const style = {
    background: `url(${background.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="flex w-screen h-screen max-w-full" style={style}>
      <div className="flex flex-col mt-[150px] ml-[150px] space-y-8">
        <span className="text-8xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
          404
        </span>
        <span className="text-white text-3xl">Oops! Page not found</span>
        <span className="text-white w-1/3">
          Looks like you’ve been travelling so far... While we are working on
          this page Please visit the buttons below
        </span>
        <div className="flex flex-row space-x-6">
          <Button
            opacity
            onClick={() => {
              location.href = "/";
            }}
          >
            Go to home
          </Button>
          <Button opacity>Previous page</Button>
        </div>
      </div>
    </div>
  );
}
