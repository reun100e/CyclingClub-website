import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Welcome to the official website of the Trivandrum Cycling Club, a
            community of passionate cyclists dedicated to promoting the sport of
            cycling in Trivandrum, Kerala, India. Whether you're a seasoned
            cyclist or a beginner, our club offers a welcoming and supportive
            environment for all.
          </p>
          <p>© Cycling Club Trivandrum All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link 1</p>
          <p className="my-5">Link 2</p>
          <p>Link 3</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">ABCD, Thiruvananthapuram, Kerala, India</p>
          <p>(+91)9446xxxxx</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
