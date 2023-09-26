import Contact from "../../Contact";
import Footer from "../../Footer";
import HeaderCarousel from "../../Header/HeaderCarousel";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
const blogsNews = [
  {
    image:
      "https://strategicrealtyinvestment.com/assets/images/photo_2023-08-19_20-31-56.jpg",
    title:
      "MoU signing ceremony between Chief (Cambodia) Commercial Bank Plc and Strategic Realty Investment Co., Ltd. ",
    date: "MARCH 01, 2023",
    desc: "Chief (Cambodia) Commercial Bank Plc represented by Dr. Soeung Morarith, CEO of Chief Bank and Strategic Realty Investment Co., Ltd represented by Ms. Chan Theary",
    fullDesc:
      "On 01 March 2023, Chief (Cambodia) Commercial Bank Plc represented by Dr. Soeung Morarith, CEO of Chief Bank and Strategic Realty Investment Co., Ltd represented by Ms. Chan Theary, Sole Owner as well as Mr. Met Makara and Mr. Meth Tola, Strategic partners signed a Memorandum of Understanding (MoU) on Chief Easy.Chief Easy is the first digital micro-lending app of Chief Bank. Customers can apply for a loan up to USD 5,000 anywhere and anytime without collateral. According to this MoU, Employees of Strategic Realty Investment Co., Ltd will receive special offers for applying loans from a digital micro-lending app called “Chief Easy” of Chief Bank. This MoU is the first step of collaboration of both institutions to reach other financial services in the nearest future.",
  },
  {
    image:
      "https://www.strategicrealtyinvestment.com/assets/images/photo_2023-07-29_10-13-02.jpg",
    title:
      "Strategic Realty Investment Co., Ltd (SRI) sign MOU with K-Architecture Solution Co., Ltd.",
    date: "MARCH 28, 2023",
    desc: "On this day SRI has signed an MOU with Phnom Penh based company K-Architecture Solution Co., Ltd. K-Architecture Solution Co., Ltd. are specialists in both residential and commercial design",
    fullDesc:
      "On this day SRI has signed an MOU with Phnom Penh based company K-Architecture Solution Co., Ltd. K-Architecture Solution Co., Ltd. are specialists in both residential and commercial design and build projects across Cambodia. We work on projects of all scales, ranging from new build architectural designs, full renovation of heritage building projects and large-scale commercial developments and factory installations.They will work very closely with SRI creating our Banteay Srei Eco City Masterplan together. This 300Ha mega project in Siem Reap will turn heads globally.  ",
  },
  {
    image:
      "https://www.strategicrealtyinvestment.com/assets/images/event-blog-01.jpg",
    title:
      "Strategic Realty Investment & AmCham Cambodia had a fantastic Ribbon cutting Ceremony at Satellite Office in the Atom.",
    date: "AUGUST 7, 2023",
    desc: "Strategic Realty Investment & AmCham Cambodia had a fantastic Ribbon cutting Ceremony at Satellite Office in the Atom. SRI is looking forward to a great prosperous cooperation as well as many successful events together.",
    fullDesc:
      "Strategic Realty Investment & AmCham Cambodia had a fantastic Ribbon cutting Ceremony at Satellite Office in the Atom. SRI is looking forward to a great prosperous cooperation as well as many successful events together Strategic Realty Development Co., Ltd is a young company focused on innovative, sustainable, unique as well as strategic development and investment opportunities. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const blogs = blogsNews.map((item, index) => {
  return (
    <Testimonial 
      key={index}
      image={item.image}
      title={item.title}
      date={item.date}
      desc={item.desc}
      fullDesc={item.fullDesc}
    />
  );
});
export default function News() {
  return (
    <div className=" w-full">
      <HeaderCarousel />
      <Hero />
      <div className="p-10 ">{blogs}</div>
      <Contact />
      <Footer />
    </div>
  );
}
