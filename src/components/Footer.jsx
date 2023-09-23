import logo from "../assets/images/f_logo.png";
// import phone_solid from "../assets/images/phone-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer
      className=" p-10 text-white flex flex-row items-center justify-between gap-5"
      style={{
        backgroundImage: `url("https://www.strategicrealtyinvestment.com/assets/images/footer.jpg")`,
        objectPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-start items-center gap-7">
        <img src={logo} alt="logo" />
        <p>The Number 1 in Real Estate Investment Opportunities</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-gold text-3xl border-b-4 ">Office</h3>
        <p>Phnom Penh</p>
        <p>Siem Reap</p>
        <div className="flex flex-row">
          <FontAwesomeIcon icon="phone" />
          <a href="tel:+85514855855"> +855(0)14 855 855</a>
        </div>
        <div className="flex flex-row">
          <FontAwesomeIcon icon="phone" />
          <a href="mailto: info@strategicrealtyinvestment.com">
            info@strategicrealtyinvestment.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start">
        <h3 className="text-gold text-3xl border-b-4 ">Newsletter</h3>
        <div>
          <input type="email" placeholder="Email Address" />
          <button>JOIN</button>
        </div>
      </div>
    </footer>
  );
}
