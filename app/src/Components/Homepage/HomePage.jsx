import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services';
import Providers from '../Providers/Providers';
// import Footer from '../Footer/Footer'

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Providers />
              {/* <Footer /> */}
        </>
    );
}

export default HomePage;