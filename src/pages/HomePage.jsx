import Navbar from "../components/Navbar"
import NavbarDekstop from "../components/NavbarDekstop"
import Footer from "../components/Footer"
import Banner from "../components/HomePage/Banner";
import LayananKami from "../components/HomePage/LayananKami";
import ArmadaKami from "../components/HomePage/ArmadaKami";
import Features from "../components/HomePage/Features";

const HomePage = () => {
    return (
        <div >
            <Navbar />
            <NavbarDekstop />
            <Banner />
            <LayananKami />
            <ArmadaKami />
            <Features />
            <Footer />
        </div>
    )
}

export default HomePage