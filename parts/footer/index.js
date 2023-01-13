import GradientText from "../welcome/gradient-text";
import FooterSection from "./section";

export default function AppFooter() {
  return (
    <footer className="box-border flex flex-row px-32 py-28 space-x-28 bg-gradient-to-b from-primary-default to-primary-light text-white text-opacity-80">
      <div className="flex flex-col w-[380px] space-y-3">
        <GradientText>ATOM Universe</GradientText>
        <span className="text-md text-slate-200 font-normal break-normal">
          Proudly made in Energoatom by 5 people. Why do we do it? I don’t know.
        </span>
      </div>
      <div className="flex flex-row space-x-14 font-orbitron">
        <FooterSection
          header="About"
          items={["About ATOM Universe", "Contact Us", "FAQ", "Privacy Policy"]}
        />
        <FooterSection
          header="Services"
          items={["NFT Marketplace", "Virtual Concert", "Gaming", "Artwork"]}
        />
        <FooterSection
          header="Contact"
          items={["2022 © Energoatom. All right reserved."]}
        />
      </div>
    </footer>
  );
}
