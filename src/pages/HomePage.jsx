import Navbar from "../components/Navbar"
import NavbarDekstop from "../components/NavbarDekstop"
import Footer from "../components/Footer"
import Banner from "../components/HomePage/Banner";
import LayananKami from "../components/HomePage/LayananKami";
import ArmadaKami from "../components/HomePage/ArmadaKami";
import Features from "../components/HomePage/Features";
import Benefits from "../components/HomePage/Benefits";
import Peta from "../components/HomePage/Peta";
import Kemitraan from "../components/HomePage/Kemitraan";
import Carousel from "../components/HomePage/Carousel";


const HomePage = () => {
    return (
        <div >
            <Navbar />
            <NavbarDekstop />
            <Banner />
            <LayananKami />
            <ArmadaKami />
            <Features />
            <Benefits />
            <Peta />
            <Kemitraan />
            <Carousel />
            <Footer />
        </div>
    )
}

export default HomePage
