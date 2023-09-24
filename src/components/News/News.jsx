import Report from "./Report";

export default function News() {
  const report = [
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/mou-event-1.jpg",
      title: "Fantastic Ribbon cutting Ceremony with AmCham...",
      date: "AUGUST 7, 2023",
      description:
        "Strategic Realty Investment & AmCham Cambodia had a fantastic Ribbon cutting Ceremony at Our Office..",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/blog1.jpg",
      title: "Strategic Realty Investment Co., Ltd (SRI) sign MOU....",
      date: "MARCH 28, 2023",
      description:
        "On this day SRI has signed an MOU with Phnom Penh based company K-Architecture Solution Co., Ltd...",
    },
    {
      image:
        "https://www.strategicrealtyinvestment.com/assets/images/photo_2023-08-16_20-42-22.jpg",
      title:
        "MoU signing ceremony between Chief (Cambodia) Commercial Bank Plc ...",
      date: "MARCH 01, 2023",
      description:
        "On 01 March 2023, Chief (Cambodia) Commercial Bank Plc represented by Dr. Soeung Morarith, CEO of Chief Bank",
    },
  ];
  const items = report.map((item, index) => {
    return (
      <Report
        key={index}
        image={item.image}
        title={item.title}
        date={item.date}
        description={item.description}
      />
    );
  });
  return (
    <section id="news" className="text-center md:p-20  bg-slate-100">
      <div>
        <h1 className="text-gold text-5xl font-semibold">Latest News</h1>
        <p className="my-6 text-lg">In the News</p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-5 md:p-0 p-10">
          {items}
        </div>
      </div>
    </section>
  );
}
