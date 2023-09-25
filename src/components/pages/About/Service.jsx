import Item from "./Item";

export default function Service() {
  const items = [
    {
      img: "https://www.strategicrealtyinvestment.com/assets/images/design.png",
      title: "Strategic Investment Solutions",
      desc: "provide personalized plans for life`s journey, bringing simplicity to the financial complexities of life through a customized approach.",
    },
    {
      img: "https://www.strategicrealtyinvestment.com/assets/images/idea.png",
      title: "Private & Commercial Properties",
      desc: "Private and commercial properties are real estate assets that are intended to generate a profit, either through capital gains or rental income.",
    },
    {
      img: "https://www.strategicrealtyinvestment.com/assets/images/creativity.png",
      title: "Project Development",
      desc: "Project development is the process of planning and allocating resources to fully develop a project or product from concept to go-live.",
    },
    {
      img: "https://www.strategicrealtyinvestment.com/assets/images/decor.png",
      title: "Partnership Opportunities",
      desc: "Partnership opportunities can be a great way for companies to expand their reach and capabilities",
    },
  ];
  const renderItems = items.map((item, index) => {
    return <Item key={index} item={item} />;
  });
  return (
    <div>
      <div className="text-center flex flex-col p-4 items-center justify-center">
        <h1 className="text-5xl">
          Our <span className="text-gold font-bold">Service</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row mt-20 items-center justify-center">{renderItems}</div>
    </div>
  );
}
