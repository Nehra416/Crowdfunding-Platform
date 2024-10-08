import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-8 py-2 text-lg font-medium'>
                <h1 className='cursor-pointer hover:text-gray-500'>Logo</h1>
                <div className='flex space-x-10'>
                    <Link to="/" className='cursor-pointer hover:text-gray-500'>Home</Link>
                    <Link to="/about" className='cursor-pointer hover:text-gray-500'>About</Link>
                    <Link to="/contact" className='cursor-pointer hover:text-gray-500'>Contact</Link>
                </div>
                <div className='flex space-x-5'>
                    <Link to="/raiser"  className='cursor-pointer text-base hover:bg-gray-300 bg-gray-200 px-3 py-1 rounded '>Start a FoundRaise</Link >
                    <Link to="/login" className='cursor-pointer hover:text-gray-500'>Sign In</Link >
                </div>
            </div>
            <hr />
        </>
    );
}

export default Navbar;
