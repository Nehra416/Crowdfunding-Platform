import like from "./images/thumbsup.png";
import tele from "./images/tele.png";
import currency from "./images/currency.webp";
import withdraw from "./images/withdraw.png";
import instant from "./images/instant.png";
import wallet from "./images/wallwt.png";

const Offer = () => {
  const offerData = [
    {
      img: like,
      h1: "Starting a fundraiser on Ketto is absolutely free.",
    },
    {
      img: tele,
      h1: "24x7 assistance from dedicated fundraiser managers throughout your fundraising journey.",
    },
    {
      img: currency,
      h1: "We accept donations in multiple currencies from anywhere in the world.",
    },
    {
      img: withdraw,
      h1: "You can withdraw your funds at any point during the course of your fundraiser.",
    },
    {
      img: instant,
      h1: "Get instant updates on your fundraiser's progress on a real-time dashboard.",
    },
    {
      img: wallet,
      h1: "Accepts donations via all cards, netbanking, UPI, and online wallets.",
    },
  ];

  return (
    <div className="py-10 px-5 bg-gray-100 mb-10">
      <h1 className="text-4xl font-bold  font-serif text-center mb-8">What Ketto Offers?</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
        {offerData.map((offer, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <img src={offer.img} alt="offer" className="w-16 h-16 mb-4" />
            <h2 className="text-lg font-semibold">{offer.h1}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
