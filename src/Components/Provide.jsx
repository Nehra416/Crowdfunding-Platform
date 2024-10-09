import payout from "./images/Payout.png";
import international from "./images/intrernet.jpeg";
import multiplepeople from "./images/multiple.png";
import webapp from "./images/intrernet.jpeg";
import expert from "./images/expert.png";
import amount from "./images/raisedamount.png";
import support from "./images/serall.png";
import advertise from "./images/advertisingsupport.png";
import tools from "./images/tools.png";

const Provide = () => {
  const providedData = [
    {
      img: payout,
      name: "Payout",
      about: "This is your money, you can withdraw it at any point during the course of your fundraiser",
    },
    {
      img: international,
      name: "International payment support",
      about: "We accept donations in multiple currencies from anywhere in the world",
    },
    {
      img: multiplepeople,
      name: "Multiple people - Same Fundraiser",
      about: "Multiple people manage and fundraise for your cause",
    },
    {
      img: webapp,
      name: "Personalized Web App",
      about: "Get instant updates on your fundraiser's progress via instant alerts, email and track everything realtime on Ketto's web app",
    },
    {
      img: expert,
      name: "Dedicated Fundraiser expert",
      about: "A dedicated fundraiser expert guides you through your fundraising",
    },
    {
      img: amount,
      name: "Keep the raised amount",
      about: "You will receive all the raised amount after the transactional, processing fee.",
    },
    {
      img: support,
      name: "24/7 support",
      about: "We offer you 24/7 assistance via call, WhatsApp, Email, SMS and our Instant Chatting Interface",
    },
    {
      img: advertise,
      name: "Advertising support",
      about: "We provide marketing and promotional support for your fundraiser",
    },
    {
      img: tools,
      name: "Fundraising Marketing Tools",
      about: "A highly intelligent marketing tool, which provides all insights on your fundraiser",
    },
  ];

  return (
    <div className="max-w-7xl text-center mx-[5vw] my-20">
      <h1 className="text-3xl font-bold mb-16 text-center">We Provide Everything You Need</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {providedData.map((item, index) => (
          <div key={index} className="bg-white p-6 flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-20 h-20 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 text-center">{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
