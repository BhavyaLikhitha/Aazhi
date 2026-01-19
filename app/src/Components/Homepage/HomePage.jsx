import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services';
import Providers from './Providers/Providers';
import FaqSection from './FAQ/FAQ';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer'

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Providers />
            <FaqSection />
            <Testimonials />
              <Footer />
        </>
    );
}

export default HomePage;