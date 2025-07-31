import Logo from "@/assets/images/logo.webp";
export function LogoAndBanner() {
  return (
    <>
      <div className="">
        <img src={Logo} alt="logo" className="rounded-md"/>
      </div>
    </>
  );
}
