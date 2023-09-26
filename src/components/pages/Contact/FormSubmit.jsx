export default function FormSubmit() {
  return (
    <div className="p-10 flex flex-col sm:flex-row items-center justify-evenly gap-10">
      <div>
        <h1 className="text-5xl font-semibold ">
          Our <span className="text-gold">Contact Details</span>
        </h1>
        <p className="text-slate-600 font-semibold text-xl my-5">
          Office Phnom Penh.
        </p>
        <p className="text-slate-600 font-semibold text-xl">
          Office Siem Reap.
        </p>
        <div className="text-slate-600 font-semibold text-xl my-5">
          <img
            className="inline mr-5 w-8"
            src="https://www.strategicrealtyinvestment.com/assets/images/placeholder.png"
          />
          <p className="inline">Wat Phnom, Phnom Penh, Cambodia</p>
        </div>
        <div className="text-slate-600 font-semibold text-xl my-5">
          <img
            className="inline mr-5 w-8"
            src="https://www.strategicrealtyinvestment.com/assets/images/phone-footer.png"
          />
          <p className="inline ">
            <a href="tel:+85514855855" className="hover:underline ">
              Phone: +855 (0)14 855 855
            </a>
          </p>
        </div>
        <div className="text-slate-600 font-semibold text-xl">
          <img
            className="inline mr-5 w-8"
            src="https://www.strategicrealtyinvestment.com/assets/images/envelope.png"
          />
          <p className="inline">
            <a href="#" className="hover:underline">
              Email: info@strategicrealtyinvestment.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5 mt-10">
          <div className="flex flex-row gap-5">
            <input placeholder="Full Name" type="text" className="rounded-md" />
            <input
              placeholder="Email Address"
              type="email"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-row gap-5">
            <input
              placeholder="Phone Number"
              type="text"
              className="rounded-md"
            />
            <input placeholder="Subject" type="email" className="rounded-md" />
          </div>
          <textarea placeholder="Message" rows="5" cols="50" className="rounded-md px-3"></textarea>
          <button className="bg-gold text-white font-semibold py-2 px-5 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
