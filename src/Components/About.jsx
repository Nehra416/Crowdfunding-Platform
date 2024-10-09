import bads from "./images/beds.avif";
import hert from "./images/twohandsandhert.avif";
import chart from "./images/chart.avif";

const About = () => {
  const aboutdata = [
    {
      img: bads,
      h1: "Medical Bills: A Heavy Burden for Many",
      p: "Medical expenses, especially for hospital stays, cancer treatments, and high-cost medications, can be overwhelming. Even with insurance, many families find themselves struggling to cover all necessary expenses, putting immense pressure on their financial situation.",
    },
    {
      img: hert,
      h1: "Explore Medical Crowdfunding",
      p: "Stop worrying about mounting medical bills. With Ketto, a crowdfunding platform based in India, you can start a medical fundraiser to seek support from friends, family, and generous individuals willing to contribute towards your healthcare costs.",
    },
    {
      img: chart,
      h1: "Start a Fundraiser for Yourself or a Loved One",
      p: "Ketto allows you to easily create a fundraiser in minutes, helping cover medical bills and other healthcare expenses. Whether it's for yourself or someone close to you, medical crowdfunding gives people a way to show their support during difficult times.",
    },
  ];

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold mb-4 text-center ">Medical Fundraising and Crowdfunding</h1>
      <p className="text-lg text-center mx-[5vw]">
        Medical crowdfunding is a convenient alternative for raising funds needed for expensive treatments like surgeries, NICU care, bone marrow transplants, cancer treatments, and other life-threatening conditions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-40 mt-16">
        {aboutdata.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6   flex flex-col sm:flex-row items-center justify-center gap-10 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.h1}
              className=" h-80 mb-4 sm:mb-0 sm:ml-4 sm:mr-4"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-semibold mb-2 tracking-wide">
                {item.h1}
              </h2>
              <p className=" max-w-[40vw] text-gray-600 tracking-widest font-serif leading-relaxed">
                {item.p}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
