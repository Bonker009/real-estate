import logo from "../assets/images/f_logo.png";
// import phone_solid from "../assets/images/phone-solid.svg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className=" sm:p-20 pt-10 text-white flex sm:flex-row flex-col sm:items-start items-center justify-between gap-5"
      style={{
        backgroundImage: `url("https://www.strategicrealtyinvestment.com/assets/images/footer.jpg")`,
      }}
    >
      <div className="flex flex-col justify-start items-center gap-7">
        <img src={logo} alt="logo" />
        <p className=" w-3/4 text-center">
          The Number 1 in Real Estate Investment Opportunities
        </p>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-gold text-3xl border-b-4 font-semibold  text-center">
            Follow Us
          </h3>
          <div className="flex flex-row gap-4 caret-green-200">
            <a href="https://www.facebook.com/strategicrealtyinvestment">
              <BsFacebook className="text-3xl" />
            </a>
            <a href="https://twitter.com/strategicrealty">
              <BsTwitter className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/strategicrealtyinvestment/">
              <BsInstagram className="text-3xl" />
            </a>
            <a href="https://www.youtube.com/channel/UCz1w4U2Z9mH3J8z7yVgT9OQ">
              <BsYoutube className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:justify-start justify-center gap-4">
        <h3 className="text-gold text-3xl border-b-4 text-center sm:text-left font-semibold">
          Office
        </h3>
        <p>Phnom Penh</p>
        <p>Siem Reap</p>
        <div className="flex flex-row">
          {/* <FontAwesomeIcon icon="phone" /> */}
          <a href="tel:+85514855855"> +855(0)14 855 855</a>
        </div>
        <div className="flex flex-row">
          {/* <FontAwesomeIcon icon="phone" /> */}
          <a href="mailto: info@strategicrealtyinvestment.com">
            info@strategicrealtyinvestment.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start">
        <h3 className="text-gold  text-center sm:text-left text-3xl border-b-4 font-semibold ">
          Newsletter
        </h3>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="p-1 px-3 py-2 rounded-sm"
          />
          <button className="bg-gold ml-2 py-2 px-3 rounded-sm ">JOIN</button>
        </div>
      </div>
    </footer>
  );
}
