import React from 'react'

const AboutDetails = () => {
    return (
        <div className='my-20 mx-[5vw] text-gray-700'>
            <div>
                <h1 className='text-2xl text-center font-medium '>Welcome to Logo – <span className='text-lg text-gray-500'>Supporting Lives Through Compassionate Funding</span></h1>
                <p className='text-lg mt-5'>
                    At Logo, we believe that everyone deserves access to quality medical care, regardless of their financial situation. Our mission is to bridge the gap for individuals in need by providing a platform that connects generous donors with those who require essential medical operations and treatments that they simply cannot afford.
                </p>
            </div>

            <div>
                <h1 className='mt-5 text-2xl font-medium'>What we do :</h1>
                <p className='text-lg my-2 '>
                    Logo serves as a crowdfunding platform where individuals can share their medical stories and seek financial support from compassionate donors. Our services include:
                </p>
                <ul className='list-disc ml-7'>
                    <li><span className='text-lg font-medium my-2 block'>Campaign Creation:</span> Helping individuals create compelling fundraising campaigns that highlight their medical needs.</li>
                    <li><span className='text-lg font-medium my-2 block'>Community Engagement:</span> Building a supportive community that encourages sharing, donating, and advocating for those in need.</li>
                    <li><span className='text-lg font-medium my-2 block'>Transparency:</span> Ensuring that all funds raised are directed towards medical expenses, with regular updates provided to donors about the impact of their contributions.</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutDetails