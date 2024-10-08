import { Link } from "react-router-dom";
import man from "./images/div1img.avif";
import docImage from "./images/doc.jpeg";
import paytm from "./images/paytm.jpeg";
import upi from "./images/upi.png";
import qr from "./images/qr.png";
import accImg from "./images/accound detail.png" // Corrected the spelling
import { FaWhatsapp, FaHeart } from "react-icons/fa";

const FundraiserPage = () => {
  const handleDonateClick = () => {
    // Add your donation handling logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Main Header */}
      <header className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h1 className=" text-2xl font-serif bg-orange-400 rounded-lg w-[50%] m-auto text-center ">This fundraiser is in an urgent need of funds</h1>
        <h1 className="text-4xl font-bold mt-7 text-gray-800 text-center">
          I Need Your Urgent Support For My Brain Haemorrhage Treatment
        </h1>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Image Section */}
          <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <img
              src={man}
              alt="Sukhvinder Singh"
              className="w-full h-96 object-cover rounded-lg"
            />
          </section>

          {/* Navbar Section */}
          <nav className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <ul className="flex justify-around">
              <li><a href="#about" className="text-blue-600 hover:text-blue-800">About</a></li>
              <li><a href="#documents" className="text-blue-600 hover:text-blue-800">Documents</a></li>
              <li><a href="#updates" className="text-blue-600 hover:text-blue-800">Updates</a></li>
              <li><a href="#comments" className="text-blue-600 hover:text-blue-800">Comments</a></li>
            </ul>
          </nav>

          {/* About the Fundraiser */}
          <section id="about" className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700 text-center">About the Fundraiser</h2>
            <p className="text-gray-600">
              Hi,<br />
              My name is Sukhvinder Singh and I am raising funds for myself. I am suffering from brain haemorrhage and undergoing treatment at Lotus Imaging. My family has done all it can to collect the total amount required for the treatment, but Rs. 250,000 more is needed for all the medical expenses.<br /><br />
              As the amount required is huge, I kindly request you to contribute towards the treatment and help during this time of need. Each contribution is important!<br /><br />
              Please help us raise this amount by clicking on the donate button and sharing this page with your friends and family.<br /><br />
              We are grateful for your help and wishes. Thank you.
            </p>
          </section>

          {/* Medical Documents */}
          <section id="documents" className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700 text-center">Medical Documents</h2>
            <img src={docImage} alt="Medical Document" className="w-full h-64 object-contain rounded-lg mb-4" />
            <div className="bg-opacity-50 bg-gray-200 p-4 rounded-lg mb-4 flex justify-between">
              <div className="flex gap-4">
                <img src={docImage} alt="Document 1" className="h-20 w-20 object-cover rounded" />
                <img src={docImage} alt="Document 2" className="h-20 w-20 object-cover rounded" />
                <img src={docImage} alt="Document 3" className="h-20 w-20 object-cover rounded" />
                <img src={docImage} alt="Document 4" className="h-20 w-20 object-cover rounded" />
              </div>
              <div className="flex items-center mt-5">
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition">
                  View Documents
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex hover:bg-green-700 transition">
                <FaWhatsapp className="mt-1 mr-2" /> WhatsApp & Share
              </button>
              <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition">Contribute Now</button>
            </div>
          </section>

          {/* Another Donation Method */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-6 mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700 text-center">Another Donation Method</h2>
            <hr />
            <p className="mt-4">Transfer directly to the bank account for this fundraiser. Only INR transfers are allowed.</p>
            <div className="flex items-center justify-evenly mt-8">
              <div className="flex-shrink-0 mr-4">
                <img src={accImg} alt="Account Details" className="w-32 h-32 object-contain rounded" />
              </div>
              <div>
                <p className="text-gray-600 text-xl mb-2"><span className="font-bold">Account No:</span> 000011112222</p>
                <p className="text-gray-600 text-xl mb-2"><span className="font-bold">Account Name:</span> Veena</p>
                <p className="text-gray-600 text-xl mb-2"><span className="font-bold">Account Number:</span> 123456789</p>
                <p className="text-gray-600 text-xl mb-2"><span className="font-bold">IFSC Code:</span> EXAMPLE123</p>
              </div>
            </div>
            <p className="bg-teal-500 text-white mt-6 p-4 rounded text-center">
              Claim your donation acknowledgement now! For payments made via <Link to="/" className="hover:text-black text-red-900">Bank Transfer</Link>.
            </p>
          </section>

          {/* Payment via QR Code */}
          <section className="bg-white shadow-lg rounded-lg p-6 mb-6 mx-auto">
            <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">Pay via Paytm/UPI QR Code</h2>
            <p className="text-gray-600 text-center mb-6">Scan the QR code from your app to make a payment.</p>
            <div className="flex flex-col md:flex-row justify-between items-center p-4 rounded">
              <div className="flex flex-col items-center bg-gray-200 rounded-md w-72 h-96 p-8">
                <p className="text-2xl font-bold mb-2">Paytm</p>
                <img src={paytm} alt="Paytm QR Code" className="w-32 rounded shadow" />
                <img src={qr} alt="Scanner Icon" className="w-32 h-32 mt-6 rounded-sm" />
                <button className="bg-teal-500 text-white px-6 py-2 rounded-sm hover:bg-teal-600 transition duration-200 mt-3">Generate UPI QR</button>
              </div>
              <div className="flex flex-col items-center rounded-md bg-gray-200 w-72 h-96 p-8">
                <p className="text-2xl font-bold mb-2">For Other Apps</p>
                <img src={upi} alt="UPI QR Code" className="w-32 mb-2 h-14 rounded shadow" />
                <img src={qr} alt="Scanner Icon" className="w-32 h-32 mb-2 mt-5 rounded-sm" />
                <button className="bg-teal-500 text-white px-6 py-2 mt-2 rounded-sm hover:bg-teal-600 transition duration-200">Generate UPI QR</button>
              </div>
            </div>
            <p className="bg-teal-500 text-white mt-6 p-4 rounded text-center">
              Claim your donation acknowledgement now! For payments made via <Link to="/" className="hover:text-black text-red-900">Bank Transfer</Link>.
            </p>
          </section>

          {/* Refer a Friend */}
          <section className="bg-white shadow-lg rounded-lg p-6 mb-6 mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-gray-700 font-serif">Refer A Friend</h1>
            <hr className="text-black" />
            <p>
              In need of funds for medical treatment or know someone who might be? Share the details and Ketto will get in touch with you.
            </p>
            <div className="flex justify-center mt-4 ml-6">
              <button className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition duration-200">
                Refer a Friend
              </button>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Donation Button Section */}
            <div className="col-span-1 flex flex-col items-center">
              <button
                id="donate-now-button"
                onClick={handleDonateClick}
                className="flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 mb-4"
              >
                <FaHeart className="text-3xl" />
                <span className="ml-4 text-3xl font-serif">Contribute Now</span>
              </button>

              {/* Payment Modes Options */}
              <ul className="flex space-x-9 list-none mb-4">
                <li className="text-sm text-gray-700">Credit/Debit</li>
                <li className="text-sm text-gray-700">Net Banking</li>
                <li className="text-sm text-gray-700">Paytm Wallet</li>
                <li className="text-sm text-gray-700">Bank Transfer</li>
              </ul>
            </div>

            {/* Progress Section */}
            <div className="col-span-1 md:col-span-3">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="text-3xl font-bold text-blue-600">
                  <span>₹</span> 2,40,315
                </div>
                <div className="text-sm text-gray-600 mb-2 mt-2">
                  raised of <span>₹</span> 2,50,000 goal
                </div>
                <div className="h-2 bg-gray-300 rounded">
                  <div className="h-full bg-blue-600" style={{ width: '96%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>349 supporters</span>
                  <span>26 Days left</span>
                </div>
              </div>

              {/* Campaigner Info */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col gap-4">
                <div className="flex flex-row items-center ">
                  <div className="mr-3 font-bold text-3xl text-blue-600 bg-gray-300 p-3 rounded-full">SS</div>
                  <div className="text-sm ml-5">
                  <h3 className="font-bold text-lg">Beneficiary</h3>
                  <div className="text-sm text-gray-700">Siddhant Kundu</div>
                  <div className="text-sm text-gray-600">Navi Mumbai</div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="flex flex-row items-center">
                  <div className="mr-3 font-bold text-3xl text-blue-600 bg-gray-300 p-3 rounded-full">SS</div>
                  <div className="text-sm ml-5">
                    <h3 className="font-bold text-lg">Beneficiary</h3>
                    <div className="text-sm text-gray-700">Siddhant Kundu</div>
                    <div className="text-sm text-gray-600">Navi Pune</div>
                  </div>
                </div>
              </div>

              {/* Fundraising Team Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-bold text-3xl">Fundraising Team</h3>
                <div className="flex items-center mt-2">
                  <div className="mr-3 text-2xl text-green-600 ">🏆</div>
                  <div className="text-lg mt-3 text-gray-700">Start a Supporting Fundraiser</div>
                </div>
              </div>

              {/* Supporters List */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-bold text-lg">349 Supporters</h3>
                <img
                  loading="lazy"
                  alt="Supporters List"
                  src="https://ketto.gumlet.io/assets/images/supporters-list.png?w=360&dpr=1.3"
                  className=" m-auto mb-4 rounded-lg  shadow-sm"
                />
                <div className="text-sm text-gray-600 mb-4 mx-auto ">
                  See those who are creating a huge impact and saving lives one donation at a time!
                </div>
                <button className="mt-4 bg-teal-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 items-center ">
                  View all supporters <span className="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserPage;
