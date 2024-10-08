 import child from "./images/div3img.avif"
const Activefund1 = () => {

  return (
    <div className=" ">
      <h1 className=" ">Mast.Abhyang Oswal is Looking For Your Help </h1>
      <div className=" ">
        <div className=" ">
            <img src={child} alt="img" className=" "  />
            <h1 className=" ">Share Your Fundraiserr</h1>
        </div>
        <div className=" ">
            <nav className=" ">
                <span className=" "> About </span>
                <span className="">Documents</span>
                <span className="">Update</span>
                 <span className="">comments</span>
                 </nav>
        </div>

        <div className=" ">
           <div className=" "> <h1 className=" ">Medical Documents</h1></div>
           <div className=" ">
            <img className=" "></img>
            <img className=" "></img>
            <img className=" "></img></div>
            <div className=" ">
            <button className="">Share</button>
            <button className="">Share(1)</button>
            <button className="">donate now</button></div>
         </div>

{/* 2nd part */}
         <div className=" ">
            <h1 className=" ">Other donation method</h1>
            <hr/>
            <span className=" ">You can also npay via Payment/UPI QR code</span>
            <span className=" ">Scan the QR code from the app and make payment.</span>
 <div className=" ">
    <div >
        <p> For Paytm </p>
        {/* <img src={} className=" "/> */}
    </div>
    <div > For Other Apps
        {/* <img src={} className=""/> */}
    </div>
 </div>
 <div className=" ">
    <h1 className=" ">Claim your donation acknowledgement now! For payment done via Paytm and UPI</h1>
 </div>
         </div>
      </div>
    </div>
  )
}

export default Activefund1
