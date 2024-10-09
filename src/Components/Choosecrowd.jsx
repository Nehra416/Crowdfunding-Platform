import money from "./images/romania-money.png";
import handheart from "./images/heart-care.png";
import emojy from "./images/sad-face.png";
import { LiaStopwatchSolid } from "react-icons/lia";

const Choosecrowd = () => {
  const data = [
    {
      icon: <img src={money} className="h-16 w-16 md:h-20 md:w-20" />,
      name: "High Cost Of Treatment",
      para:
        "Medical emergencies come without a warning. At times, health insurance and savings are not enough to cover the expensive bill. Crowdfunding helps you reach your goal by getting small donations from a large group of people.",
    },
    {
      icon: <img src={handheart} className="h-16 w-16 md:h-20 md:w-20" />,
      name: "Asking For Money Isn’t Easy",
      para:
        "When in need, asking for help from people and describing financial problems face-to-face can be awkward and inconvenient. Online crowdfunding makes the process of asking for money easier and way more seamless.",
    },
    {
      icon: <LiaStopwatchSolid className="h-16 w-16 md:h-20 md:w-20" />,
      name: "Emergencies Demand a Prompt Response",
      para:
        "When your loved ones are diagnosed with life-threatening diseases, it’s overwhelming emotionally as well as financially. By giving you a platform to share your emergency, online crowdfunding helps you gather funds quickly.",
    },
    {
      icon: <img src={emojy} className="h-16 w-16 md:h-20 md:w-20" />,
      name: "Loan Repayment is Stressful",
      para:
        "Getting drowned in personal loans is very common in times of medical emergencies. Once the money is gathered, repaying that loan may take months, sometimes years together. Online crowdfunding comes without debts.",
    },
  ];

  return (
    <div className="p-6 my-[7vh] bg-amber-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl md:text-4xl font-serif font-bold mb-3 text-center mt-8">
          Why are people choosing medical crowdfunding?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-36 mb-12 mt-24">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md shadow-lg border hover:shadow-2xl cursor-pointer p-4 transition-shadow duration-300"
            >
              {item.icon && <div className="mr-4 text-primary">{item.icon}</div>}
              <div className="text-center">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm md:text-base text-gray-600">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choosecrowd;
