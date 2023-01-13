import background from "../../../public/images/background/welcome.jpg";

export default function WelcomeBackground({ children }) {
  const style = {
    background: `url(${background.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full h-screen" style={style}>
      {children}
    </div>
  );
}
