export default function Avatar() {
  const image =
    "https://www.strategicrealtyinvestment.com/assets/images/director.jpg";
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img
        src={image}
        alt="director"
        className="w-96 h-96 rounded-md hover:shadow-2xl"
      />
      <h1 className="font-semibold text-3xl text-slate-700 mt-10 text-center sm:text-4xl">
        Message from the Project Development Director.
      </h1>
      <p className="text-center text-slate-800 w-[80%] mt-5">
        We believe the future of Strategic Realty Investment Co., Ltd is more
        than just bricks and mortar&hellip;it&rsquo;s about creating innovative
        projects and new opportunities that continuously improve the lives of
        our customers. This sustains the legacy of Strategic Realty Investment
        Co., Ltd, which is always focused on turning dreams into reality. Now,
        Strategic Realty Investment Co., Ltd offers our clients a building to
        live in but new ways of lifestyle to explore.
      </p>
      <p className="text-center text-slate-800 w-[80%] mt-5">
        Real Estate Development is Cambodia`s most prominent and fastest-growing
        industrial sector. Strategic Realty Investment Co., Ltd is motivated by
        the importance of our projects to deliver stunning innovative unique
        development in one location. Strategic Realty Investment Co., Ltd is
        here to build prosperous communities and sensational ways of lifestyle.
      </p>
      <p className="text-cente text-slate-800r w-[80%] mt-5">
        Strategic Realty Investment Co., Ltd create stunning projects that helps
        you fulfill and turn your dreams into a magnificent reality. Success, in
        my opinion, belongs to those who are brave enough to dream, then create
        a strategy, and then make the effort necessary to achieve their goals
        and make the dream a reality. Banteay Srei Eco City is that dream made
        into reality.
      </p>
      <p className="text-center text-slate-800 w-[75%] mt-5">
        Our basic principles of honesty, creativity, and innovation have allowed
        us to grow and improve since the beginning. With a fresh corporate
        identity and an intriguing new promise for our clients, Strategic Realty
        Investment Co., Ltd has officially launched Banteay Srei Eco City
        Project with the promise of making your dream a reality. &quot;In a time
        of drastic change, it is the learners who inherit the future.&quot;
      </p>
      <h2 className=" text-4xl font-semibold text-slate-900 mt-10">
        Dr. Alexander Evengroen
      </h2>
      <p className="mt-5 text-slate-600">Partner / Project Development Director</p>
      <p className="text-slate-600">Strategic Realty Investment Co., Ltd</p>
    </div>
  );
}
