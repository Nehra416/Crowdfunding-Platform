 import profile from "./images/profile.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"


const Testimonial = () => {
    const testimonal = [
        {
            quote: "My liver transplant was stuck because my family didn't have funds to afford it. It's only because I knocked on Ketto's door that I'm healthy today. A big thank you to each and every one who gave me money. I wouldn't be alive without you.",
            name: "Constable Deepak Patil",
            city: "Mumbai Police",
            amount: " 9,57,401"
        },
        {
            quote: "We would urge anyone and everyone to extend their helping hand in betterment of a person who will continuously make this world a better place. Any contribution you make, big or small, will put us in your debt forever.",
            name: "Constable Deepak Patil",
            city: "Mumbai Police",
            amount: " 9,57,401"
        },
        {
            quote: "We would urge anyone and everyone to extend their helping hand in betterment of a person who will continuously make this world a better place. Any contribution you make, big or small, will put us in your debt forever.",
            name: "Constable Deepak Patil",
            city: "Mumbai Police",
            amount: " 9,57,401"
        },
        {
            quote: "We would urge anyone and everyone to extend their helping hand in betterment of a person who will continuously make this world a better place. Any contribution you make, big or small, will put us in your debt forever.",
            name: "Constable Deepak Patil",
            city: "Mumbai Police",
            amount: " 9,57,401"
        },
    ]

    return (
        <div className='bg-[#F5F5F5] font-serif pt-7 pb-20'>
            <div className='flex flex-col gap-3 mb-8 '>
                <h1 className='text-center text-3xl font-medium text-gray-700'>Hear from people like you</h1>
                <div className='bg-yellow-400 w-28  h-1 rounded-2xl mx-auto'></div>
                <span className='text-center text- block font-medium text-gray-400'>who benefited from medical crowdfunding</span>
            </div>
            <Carousel className="mx-[10vw]">
                <CarouselContent>
                    {
                        testimonal.map((item, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div className='text-center max-w-[60vw] mx-auto text-gray-600'>
                                        <p className='text-xl'>
                                            “{item.quote}”
                                        </p>
                                        <img src={profile} alt="profile" className='w-10 h-10 rounded-full mx-auto my-3' />
                                        <span>
                                            {item.name}, {item.city}, Raised ₹{item.amount}
                                        </span>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
}

export default Testimonial;
