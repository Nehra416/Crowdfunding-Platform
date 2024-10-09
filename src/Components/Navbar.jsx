import { Link } from "react-router-dom"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Raisefundform2 from "./Raisefundform2"

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-8 py-2 text-lg font-medium fixed top-0 z-10 left-0 right-0 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg  '>
                <h1 className='cursor-pointer hover:text-gray-500'><Link to="/">Logo</Link></h1>
                <div className='flex space-x-10'>
                    <span className='cursor-pointer hover:text-gray-500'><Link to="/">Home</Link></span>
                    <span className='cursor-pointer hover:text-gray-500'><Link to="/about">About</Link></span>
                    <span className='cursor-pointer hover:text-gray-500'><Link to="/contact">Contact</Link></span>
                </div>
                <div className='flex space-x-5'>
                    <span className='cursor-pointer text-white text-sm hover:bg-teal-400 bg-teal-300 px-3 py-1 rounded-2xl border-2 border-gray-400 hover:border-gray-500 hover: '><Link to="/fund">Start a FoundRaise</Link></span>
                    <Dialog>
                        <DialogTrigger>
                            <span className='cursor-pointer hover:text-gray-500'>Signin</span>
                        </DialogTrigger>
                        <DialogContent className="max-h-[100vh] p-0 m-0">
                            <Raisefundform2 />
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
            <hr />
        </>
    );
}

export default Navbar;
