import Choosecrowd from '@/Components/Choosecrowd'
import Doubts from '@/Components/Doubts'
import Forraisefund from '@/Components/Forraisefund'
import Heroimg from '@/Components/Heroimg'
import Fotter from '@/Components/Fotter'
// import Navbar from '@/Components/Navbar'
   import Testimonial from '@/Components/Testimonial'
  
const MainPage = () => {
    return (
        <>
            {/* <Navbar /> */}
              <Heroimg />
            <Forraisefund />
            <Testimonial />
            <Choosecrowd />
            <Doubts />
            <Fotter />
         </>
    )
}

export default MainPage