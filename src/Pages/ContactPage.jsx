import Fotter from '@/Components/Fotter'
import Navbar from '@/Components/Navbar'
import React from 'react'
import Offer from '@/Components/Offer';
import Contact from '@/Components/Contact';
import Doubts from '@/Components/Doubts';

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <Contact />
            {/* <Offer /> */}
            <Doubts />
            <Fotter />
        </>
    )
}

export default ContactPage