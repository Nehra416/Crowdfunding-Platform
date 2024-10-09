import hero from "./images/istockphoto-1194025411-612x612.jpg";

const Heroimg = () => {
  return (
    <div className="relative text-red-500">
      <img
        src={hero}
        alt="Hero"
        className="w-full h-auto max-w-screen-2xl max-h-[70vh] min-h-dvh mx-auto overflow-hidden object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center px-4">
          <h1 className="text-white font-mono text-2xl md:text-5xl font-bold">
            Medical Crowdfunding is the <br />
            <span className="mt-4 inline-block">Best Way to Raise</span> <br />
            <span className="mt-4 inline-block">Money for Medical Expenses</span>
          </h1>

          {/* New Heading Below */}
          <p className=" text-white font-mono text-base md:text-xl md:mt-28 mt-7">
            Start a fundraiser today and let others help you cover your medical expenses.
          </p>
          <p className="text-white font-mono text-base md:text-xl mt-2">   
                     Raise money to pay hospital & medical bills for free.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
