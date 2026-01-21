import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services';
import Providers from './Providers/Providers';
import FaqSection from './FAQ/FAQ';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer'
import WhoCanOpt from './WhoCanOpt/Whocanopt';
import HowTherapyWorks from './HowTherapyWorks/HowTherapyWorks';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhoCanOpt />
            <Services />
            <HowTherapyWorks />
            <Providers />
            <WhyChooseUs />
            <FaqSection />
            <Testimonials />
              <Footer />
        </>
    );
}

export default HomePage;