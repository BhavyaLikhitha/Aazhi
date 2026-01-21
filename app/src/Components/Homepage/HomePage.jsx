import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services';
import Providers from './Providers/Providers';
import FaqSection from './FAQ/FAQ';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer'
import WhoCanOpt from './WhoCanOpt/Whocanopt';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhoCanOpt />
            <Services />
            <Providers />
            <FaqSection />
            <Testimonials />
              <Footer />
        </>
    );
}

export default HomePage;