export default function Partner() {
  const member = [
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partners_1.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partners_6.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partners_2.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partners_3.png",
    },
  ];
  const partner = [
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partner-101.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partner-102.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/chief-bank.png",
    },
    {
      image:
        "	https://www.strategicrealtyinvestment.com/assets/images/partner-104.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partner-105.png",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/partner-106.png",
    },
  ];
  return (
    <div className="p-20  text-4xl flex flex-col gap-10 font-semibold">
      <div>
        <h1>
          <span className="text-gold font-semibold">Member</span> of
        </h1>
        <div className="flex flex-row gap-5 items-center flex-wrap   justify-between">
          {member.map((item, index) => {
            return (
              <img
                key={index}
                src={item.image}
                alt="member"
                className=" w-fit h-52 hover:opacity-50 transition-opacity duration-300 ease-in-out "
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h1>
          <span className="text-gold font-semibold">Partner</span> of
        </h1>
        <div className="flex flex-row flex-wrap gap-5 items-center justify-between">
          {partner.map((item, index) => {
            return (
              <img
                key={index}
                src={item.image}
                alt="Partner"
                className=" w-fit h-52 hover:opacity-50 transition-opacity duration-300 ease-in-out "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
