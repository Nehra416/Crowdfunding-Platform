import Choosecrowd from '@/Components/Choosecrowd'
 import Doubts from '@/Components/Doubts'
import Forraisefund from '@/Components/Forraisefund'
import Heroimg from '@/Components/Heroimg'
import Fotter from '@/Components/Fotter'
import Navbar from '@/Components/Navbar'
import Testimonial from '@/Components/Testimonial'
import Provide from '@/Components/Provide'
import Activefund from '@/Components/Activefund'
import About from '@/Components/About'


const MainPage = () => {
    return (
        <>
            {/* <Navbar /> */}
              <Heroimg />
            <Forraisefund />
            <About />
            <Testimonial />
            <Activefund />
            <Choosecrowd />
            <Provide />
            <Doubts />
            <Fotter />

        </>
    )
}

export default MainPage