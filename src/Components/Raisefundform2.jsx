import { useState } from 'react';

const Raisefundform2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pwd: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="px-6 pt-4 bg-gray-50 border rounded-lg shadow-lg w-full h-full mx-auto">
      <div className="text-center">
        <div className="mb-2 text-4xl font-bold">Logo</div>
        <h2 className="text-lg text-gray-600 mt-2">
          Signin to process further for the Fundraise
        </h2>
      </div>

      <div className="p-6 rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-50 font-medium text-gray-500 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-50 font-medium text-gray-500 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-50 font-medium text-gray-500 rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="text"
              id="pwd"
              name="pwd"
              value={formData.pwd}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-50 font-medium text-gray-500 rounded-md"
              placeholder="Enter your Password"
              required
            />
          </div>

          <button
            type="submit"
            className=" w-full ml-3 max-w-sm p-4 bg-teal-400 text-white rounded-md hover:bg-teal-500"
          >
            Submit
          </button>

          <p className='text-center' >Don't have a Account? <span className='text-teal-500 hover:underline cursor-pointer'> Signup</span></p>6
        </form>
      </div>
    </div>
  );
};

export default Raisefundform2;
