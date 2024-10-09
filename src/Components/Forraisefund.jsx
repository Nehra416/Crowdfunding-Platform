import heart from "./images/hert.png";
import kidney from "./images/kidny.png";
import baby from "./images/baby.png";
import bone from "./images/bone.png";
import cancer from "./images/cancer.png";
import any from "./images/any other.png";
import { useState } from "react";

const Forraisefund = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const datas = [
        {
            img: heart,
            name: "Open Heart Surgery",
            info: "6.2 CR RAISED BY 21 PEOPLE FOR THEIR/LOVED ONE'S OPEN HEART SURGERY."
        },
        {
            img: kidney,
            name: "Kidney Transplant",
            info: "8.6 CR RAISED BY 35 PEOPLE FOR THEIR/LOVED ONE'S KIDNEY TRANSPLANT."
        },
        {
            img: baby,
            name: "NICU Care",
            info: "10.7 CR RAISED BY 52 PARENTS FOR THE TREATMENT OF UNDER -DEVELOPED ORGANS OF THEIR BABIES."
        },
        {
            img: bone,
            name: "Bone Marrow Transplant",
            info: "8.6 CR RAISED BY 35 PEOPLE FOR THEIR/LOVED ONE'S Bone Marrow Transplant."
        },
        {
            img: cancer,
            name: "Cancer Treatment",
            info: "32 CR RAISED BY 103 PEOPLE FOR THEIR/LOVED ONE'S Cancer Treatment."
        },
        {
            img: any,
            name: "Any Other Disease",
            info: "12 CR RAISED BY 35 PEOPLE FOR THEIR/LOVED ONE'S ANY OTHER Disease."
        },
    ];

    const handleToogle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="p-5">
            <div className="mb-5">
                <h1 className="text-4xl md:text-5xl font-serif text-center mt-14">
                    What medical treatments can you raise<br />
                    <span className="mt-4 block">funds for?</span>
                </h1>
            </div>
            <div className="flex flex-wrap gap-6 mt-20 mb-14 justify-center">
                {
                    datas.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleToogle(index)}
                            className={`border rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg w-44 cursor-pointer hover:border-none shadow-2xl shadow-white h-56 flex flex-col items-center group bg-gray-100 ${openIndex === index ? 'p-2 bg-[#01BFBD] ' : 'p-6 hover:bg-white'}`}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className={`w-24 h-24 mb-2 object-cover rounded-full ${openIndex === index ? 'hidden' : ''}`}
                            />
                            <div className={`bg-yellow-400 w-12  h-1 my-1 rounded-2xl mx-auto ${openIndex === index ? 'hidden' : ''}`}></div>
                            <h2 className={`text-lg font-semibold ${openIndex === index ? 'hidden' : ''}`}>{item.name}</h2>
                            <h2 className={`font-semibold ${openIndex === index ? 'block' : 'hidden'}`}>{item.info}</h2>
                            <span className={`text-[#01BFBD] underline absolute bottom-2 text-sm group-hover:opacity-100 opacity-0 ${openIndex === index ? 'hidden' : ''}`}>know more</span>
                        </div>

                    ))


                }
            </div>
        </div>
    );
};

export default Forraisefund;
